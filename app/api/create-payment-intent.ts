// pages/api/create-payment-intent.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { amount } = req.body;

  if (!amount || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount provided.' });
  }

  // A server-side check for the secret key is good practice
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('Stripe secret key is missing from environment variables.');
    return res.status(500).json({ error: 'Server misconfiguration: stripe key missing' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount is in cents, assuming your frontend sends it this way
      currency: 'usd',
      // Optional: Add other data like customer, description, etc.
    });

    res.status(200).json({ client_secret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error('Error creating payment intent:', err.message);
    res.status(500).json({ error: 'Failed to create payment intent.', details: err.message });
  }
}