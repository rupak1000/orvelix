// components/paypal-checkout.tsx
'use client';
import { useEffect, useRef, useState, memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PayPalCheckoutProps {
  amount: number;
  onSuccess: (details: any) => void;
  onError: (error: any) => void;
  disabled: boolean;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

const PayPalCheckout = memo(({ amount, onSuccess, onError, disabled }: PayPalCheckoutProps) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  const loadPayPalScript = async () => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    console.log('PayPal Client ID:', clientId);

    if (!clientId || !clientId.startsWith('A')) {
      const errorMsg = 'PayPal client ID is missing or invalid. Please contact support.';
      setError(errorMsg);
      onError(new Error(errorMsg));
      return;
    }

    // Check and clear namespace conflict
    if (typeof window !== 'undefined') {
      console.log('Initial window.paypal:', window.paypal);
      if (window.paypal && !window.paypal.Buttons) {
        console.warn('window.paypal conflict detected:', window.paypal);
        const conflictingElement = document.getElementById('paypal');
        let errorMsg = 'PayPal namespace conflict detected. ';
        if (conflictingElement) {
          errorMsg += 'An element with id="paypal" was found. Please rename it to something like "payment-paypal" and try again.';
        } else {
          errorMsg += 'Another script or element is using "paypal". Please ensure no scripts or elements use the "paypal" ID or name.';
        }
        setError(errorMsg);
        onError(new Error(errorMsg));
        window.paypal = undefined; // Clear conflict
        return;
      }
    }

    if (typeof window === 'undefined' || window.paypal?.Buttons) {
      if (window.paypal?.Buttons) {
        setSdkLoaded(true);
      }
      return;
    }

    try {
      const script = document.createElement('script');
      script.id = 'paypal-sdk-script';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&components=buttons`;
      script.async = true;

      let attempts = 0;
      const maxAttempts = 100; // Check for up to 10 seconds
      const checkButtons = () => {
        if (isMounted.current) {
          console.log('Checking PayPal Buttons, attempt:', attempts, 'window.paypal:', window.paypal);
          if (window.paypal?.Buttons) {
            setSdkLoaded(true);
          } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(checkButtons, 100);
          } else {
            const errorMsg = 'PayPal SDK loaded, but Buttons component is unavailable. Please try again.';
            setError(errorMsg);
            onError(new Error(errorMsg));
          }
        }
      };

      script.onload = () => {
        console.log('PayPal SDK script loaded successfully, window.paypal:', window.paypal);
        checkButtons();
      };
      script.onerror = () => {
        console.error('PayPal SDK script failed to load');
        if (isMounted.current) {
          const errorMsg = 'Failed to load PayPal SDK script. Please check your network connection.';
          setError(errorMsg);
          onError(new Error(errorMsg));
        }
      };
      document.body.appendChild(script);
    } catch (err: any) {
      if (isMounted.current) {
        const errorMsg = 'Error loading PayPal SDK. Please try again.';
        setError(errorMsg);
        onError(err);
      }
    }
  };

  const retryLoadPayPalScript = () => {
    setError(null);
    setSdkLoaded(false);
    if (paypalRef.current) paypalRef.current.innerHTML = '';
    // Remove existing PayPal scripts
    const scripts = document.querySelectorAll(`script[src*="paypal.com/sdk/js"]`);
    scripts.forEach((script) => script.remove());
    // Clear window.paypal if it’s not the SDK
    if (typeof window !== 'undefined' && window.paypal && !window.paypal.Buttons) {
      console.log('Cleared conflicting window.paypal:', window.paypal);
      window.paypal = undefined;
    }
    console.log('Retrying PayPal SDK load');
    loadPayPalScript();
  };

  useEffect(() => {
    isMounted.current = true;
    loadPayPalScript();

    return () => {
      isMounted.current = false;
      const script = document.getElementById('paypal-sdk-script');
      if (script) script.remove();
    };
  }, [onError]);

  useEffect(() => {
    if (sdkLoaded && paypalRef.current && window.paypal?.Buttons && !error && !disabled) {
      try {
        if (paypalRef.current.hasChildNodes()) {
          paypalRef.current.innerHTML = '';
        }

        const buttonInstance = window.paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toFixed(2),
                  currency_code: 'USD',
                },
              }],
            });
          },
          onApprove: async (data: any, actions: any) => {
            try {
              const details = await actions.order.capture();
              onSuccess(details);
            } catch (captureError) {
              setError('Payment failed. Please try again.');
              onError(captureError);
            }
          },
          onError: (buttonError: any) => {
            setError('PayPal error occurred. Please try again.');
            onError(buttonError);
          },
          style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal', height: 45 },
        });

        buttonInstance.render(paypalRef.current).catch((renderErr: any) => {
          setError('Failed to render PayPal button. Please try again.');
          onError(renderErr);
        });
      } catch (initErr: any) {
        setError('Failed to initialize PayPal button. Please try again.');
        onError(initErr);
      }
    }
  }, [sdkLoaded, amount, onSuccess, onError, error, disabled]);

  if (error) {
    return (
      <Card className="border-gray-200">
        <CardContent className="p-6">
          <div className="text-red-600 text-sm">{error}</div>
          <button
            onClick={retryLoadPayPalScript}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry PayPal
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`border-gray-200 ${disabled ? 'opacity-50' : ''}`}>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Pay with PayPal</h3>
          <p className="text-sm text-gray-600">You'll be redirected to PayPal to complete your payment securely.</p>
        </div>
        {!sdkLoaded && !error && <p className="text-gray-600">Loading PayPal...</p>}
        <div ref={paypalRef} className="min-h-[45px]" />
      </CardContent>
    </Card>
  );
});

export default PayPalCheckout;