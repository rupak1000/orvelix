import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error("Missing STRIPE_SECRET_KEY in environment")
  }
  return new Stripe(key, {
    apiVersion: "2024-06-20",
  })
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe()

    const { amount, currency = "usd" } = await request.json()

    if (typeof amount !== "number" || amount < 50) {
      return NextResponse.json(
        { error: "Amount must be a number and at least $0.50" },
        { status: 400 }
      )
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        integration_check: "accept_a_payment",
      },
    })

    return NextResponse.json({
      client_secret: paymentIntent.client_secret,
    })
  } catch (error: any) {
    console.error("Error creating payment intent:", error)
    const status =
      error?.message === "Missing STRIPE_SECRET_KEY in environment" ? 500 : 500
    const message =
      error?.message === "Missing STRIPE_SECRET_KEY in environment"
        ? "Server misconfiguration: stripe key missing"
        : "Failed to create payment intent"
    return NextResponse.json({ error: message }, { status })
  }
}
