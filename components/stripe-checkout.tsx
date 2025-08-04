// components/stripe-checkout.tsx
'use client';
import type React from 'react';
import { forwardRef, useState, useImperativeHandle } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

interface StripeCheckoutProps {
  amount: number;
  onSuccess: (paymentIntent: any) => void;
  onError: (error: any) => void;
  disabled: boolean;
}

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey && stripeKey.startsWith('pk_') ? loadStripe(stripeKey) : null;

const CheckoutForm = forwardRef<{ submitPayment: () => void }, Omit<StripeCheckoutProps, 'disabled'>>(
  ({ amount, onSuccess, onError }, ref) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useImperativeHandle(ref, () => ({
      submitPayment: handleSubmit,
    }));

    const handleSubmit = async () => {
      // ... (rest of the handleSubmit function remains the same)
      if (!stripe || !elements) {
        const error = new Error('Stripe.js has not loaded. Please try again later.');
        setErrorMessage(error.message);
        onError(error);
        return;
      }

      if (amount <= 0) {
        const error = new Error('Invalid payment amount');
        setErrorMessage(error.message);
        onError(error);
        return;
      }

      setIsProcessing(true);
      setErrorMessage(null);

      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: Math.round(amount * 100),
            currency: 'usd',
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to create payment intent: ${response.statusText}`);
        }

        const { client_secret, error } = await response.json();

        if (error) {
          throw new Error(error.message || 'Error creating payment intent.');
        }

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          throw new Error("Card element not found.");
        }

        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: cardElement,
          },
        });

        if (confirmError) {
          setErrorMessage(confirmError.message || 'Payment failed');
          onError(confirmError);
        } else if (paymentIntent) {
          onSuccess(paymentIntent);
        }
      } catch (error: any) {
        setErrorMessage(error.message || 'An unexpected error occurred');
        onError(error);
      } finally {
        setIsProcessing(false);
      }
    };

    const cardElementOptions = {
      // ... (options remain the same)
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
          fontFamily: 'Inter, system-ui, sans-serif',
        },
        invalid: {
          color: '#9e2146',
        },
      },
      hidePostalCode: true,
    };

    return (
      <Card className="border-gray-200">
        <CardContent className="p-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Card Information</label>
              <div className="p-4 border border-gray-300 rounded-lg bg-white">
                <CardElement options={cardElementOptions} />
              </div>
            </div>
            {errorMessage && <div className="text-sm text-red-600">{errorMessage}</div>}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Lock className="h-4 w-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  },
);

const StripeCheckout = forwardRef<{ submitPayment: () => void }, StripeCheckoutProps>(
  ({ amount, onSuccess, onError, disabled }, ref) => {
    // Corrected logic: return the error UI directly without calling the parent's onError prop.
    if (!stripePromise) {
      const error = new Error('Stripe publishable key is missing or invalid. Please contact support.');
      return (
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <div className="text-red-600 text-sm">{error.message}</div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={amount} onSuccess={onSuccess} onError={onError} ref={ref} />
      </Elements>
    );
  }
);

export default StripeCheckout;