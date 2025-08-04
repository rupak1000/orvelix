// app/checkout/page.tsx

'use client';
import type React from 'react';
import { useState, useRef, Component, ReactNode, useEffect } from 'react';
import { useCart } from '@/contexts/cart-context';
import { useAuth } from '@/contexts/auth-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Truck, Shield, Lock, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import PayPalCheckout from '@/components/paypal-checkout';
import StripeCheckout from '@/components/stripe-checkout';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p className="p-4 bg-red-100 text-red-700 rounded-md">Something went wrong with the payment. Please try again.</p>;
    }

    return this.props.children;
  }
}

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  });
  const stripeRef = useRef<{ submitPayment: () => void } | null>(null);

  useEffect(() => {
    if (items.length === 0) {
      toast({
        title: 'Cart is empty',
        description: 'Please add items to your cart before checking out.',
        variant: 'destructive',
      });
      redirect('/cart');
    }
  }, [items.length, toast]);

  const shipping = total > 100 ? 0 : 15.99;
  const tax = total * 0.08;
  const finalTotal = total + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentSuccess = (details: any) => {
    setIsProcessing(false);
    toast({
      title: 'Payment successful!',
      description: 'Your order has been placed successfully.',
    });
    clearCart();
    window.location.href = '/order-success';
  };

  const handlePaymentError = (error: any) => {
    setIsProcessing(false);
    toast({
      title: 'Payment failed',
      description: error.message || 'Please try again or use a different payment method.',
      variant: 'destructive',
    });
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zipCode &&
      termsAccepted
    );
  };

  const handlePayNowClick = () => {
    if (!isFormValid()) {
      toast({
        title: 'Incomplete form',
        description: 'Please complete all required fields and accept the terms.',
        variant: 'destructive',
      });
      return;
    }

    if (paymentMethod === 'stripe') {
      if (stripeRef.current) {
        setIsProcessing(true);
        stripeRef.current.submitPayment();
      } else {
        handlePaymentError(new Error("Stripe payment is not ready."));
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-8 lg:mb-12">
        Secure Checkout
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6 lg:space-y-8">
          {/* Shipping Information */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg lg:text-xl">
                <Truck className="h-5 w-5 lg:h-6 lg:w-6 text-amber-600" />
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    disabled={isProcessing}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  disabled={isProcessing}
                />
              </div>
              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  disabled={isProcessing}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    disabled={isProcessing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg lg:text-xl">
                <CreditCard className="h-5 w-5 lg:h-6 lg:w-6 text-amber-600" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                disabled={isProcessing}
              >
                <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value="stripe" id="stripe" />
                  <Label htmlFor="stripe" className="flex-1 cursor-pointer font-medium">
                    Credit/Debit Card (Stripe)
                  </Label>
                  <div className="flex gap-2">
                    <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      V
                    </div>
                    <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      M
                    </div>
                    <div className="w-8 h-6 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                      A
                    </div>
                    <div className="w-8 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      D
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex-1 cursor-pointer font-medium">
                    PayPal
                  </Label>
                  <div className="text-2xl">💙</div>
                </div>
              </RadioGroup>

              {!isFormValid() && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-sm text-amber-800">
                    Please complete all shipping information and accept the terms.
                  </p>
                </div>
              )}

              <ErrorBoundary>
                <div className="mt-6 space-y-6">
                  {paymentMethod === 'stripe' && (
                    <>
                      <StripeCheckout
                        amount={finalTotal}
                        onSuccess={handlePaymentSuccess}
                        onError={handlePaymentError}
                        ref={stripeRef}
                        disabled={!isFormValid() || isProcessing}
                      />
                      <Button
                        onClick={handlePayNowClick}
                        disabled={isProcessing || !isFormValid()}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-medium"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Processing Payment...
                          </>
                        ) : (
                          <>
                            <CreditCard className="h-5 w-5 mr-2" />
                            Pay ${finalTotal.toFixed(2)}
                          </>
                        )}
                      </Button>
                    </>
                  )}
                  {paymentMethod === 'paypal' && (
                    <PayPalCheckout
                      amount={finalTotal}
                      onSuccess={handlePaymentSuccess}
                      onError={handlePaymentError}
                      disabled={!isFormValid() || isProcessing}
                    />
                  )}
                </div>
              </ErrorBoundary>

              <div className="flex items-center space-x-2 pt-4">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(!!checked)}
                  required
                  disabled={isProcessing}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <a href="/terms" className="text-amber-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-amber-600 hover:underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="space-y-6 lg:space-y-8">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg lg:text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
              <div className="max-h-64 overflow-y-auto space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0">
                      <Image
                        src={item.image || '/placeholder.svg'}
                        alt={item.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 line-clamp-2 text-sm lg:text-base">{item.name}</h4>
                      <p className="text-xs lg:text-sm text-gray-500">{item.brand}</p>
                      <p className="text-xs lg:text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-base lg:text-lg font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between text-base lg:text-lg">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base lg:text-lg">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-base lg:text-lg">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-xl lg:text-2xl">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-4 lg:p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">Secure Checkout</div>
                    <div className="text-xs lg:text-sm text-gray-600">
                      Your payment information is encrypted and secure
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">Fast Shipping</div>
                    <div className="text-xs lg:text-sm text-gray-600">Free shipping on orders over $100</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">SSL Protected</div>
                    <div className="text-xs lg:text-sm text-gray-600">256-bit SSL encryption for maximum security</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
