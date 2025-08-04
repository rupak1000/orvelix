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
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
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
                <div className="flex flex-col space-y-4">
                  {/* Stripe Radio Button and Input Section */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value="stripe" id="payment-stripe" />
                      <Label htmlFor="payment-stripe" className="flex-1 cursor-pointer font-medium">
                        Credit/Debit Card (Stripe)
                      </Label>
                      <div className="flex gap-2 items-center">
                         <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                          alt="Visa"
                          width={32}
                          height={24}
                          className="h-4 sm:h-5 w-auto object-contain"
                         />
                         <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                          alt="Mastercard"
                          width={32}
                          height={24}
                          className="h-4 sm:h-5 w-auto object-contain"
                         />
                         <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png"
                          alt="American Express"
                          width={32}
                          height={24}
                          className="h-4 sm:h-5 w-auto object-contain"
                         />
                         <Image
                          src="https://img.icons8.com/?size=100&id=6Mqn7dgNkEH4&format=png&color=000000"
                          alt="Discover"
                          width={32}
                          height={24}
                          className="h-4 sm:h-5 w-auto object-contain"
                         />
                      </div>
                    </div>
                    {paymentMethod === 'stripe' && (
                      <div className="px-4">
                        <ErrorBoundary>
                          <StripeCheckout
                            ref={stripeRef}
                            amount={finalTotal}
                            onSuccess={handlePaymentSuccess}
                            onError={handlePaymentError}
                            disabled={!isFormValid() || isProcessing}
                          />
                        </ErrorBoundary>
                      </div>
                    )}
                  </div>
                  
                  {/* PayPal Radio Button */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value="paypal" id="payment-paypal" />
                      <Label htmlFor="payment-paypal" className="flex-1 cursor-pointer font-medium">
                        PayPal
                      </Label>
                      <Image
                        alt="PayPal"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
                        width={70}
                        height={20}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </RadioGroup>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(!!checked)}
                    disabled={isProcessing}
                  />
                  <Label htmlFor="terms" className="cursor-pointer select-none">
                    I accept the{' '}
                    <a
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-amber-600"
                    >
                      terms and conditions
                    </a>
                    .
                  </Label>
                </div>
              </div>
              <Separator />
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  Order Total: <strong>${finalTotal.toFixed(2)}</strong> (includes shipping and tax)
                </p>
                {paymentMethod === 'stripe' ? (
                  <Button
                    className="w-full mt-4"
                    onClick={handlePayNowClick}
                    disabled={!isFormValid() || isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Pay Now'
                    )}
                  </Button>
                ) : (
                  <div id="paypal-button-container" className="w-full mt-4">
                    <ErrorBoundary>
                      <PayPalCheckout
                        amount={finalTotal}
                        onSuccess={handlePaymentSuccess}
                        onError={handlePaymentError}
                        disabled={!isFormValid() || isProcessing}
                        containerId="paypal-button-container"
                      />
                    </ErrorBoundary>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg lg:text-xl">
                <Shield className="h-5 w-5 lg:h-6 lg:w-6 text-amber-600" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-gray-200">
                {items.map(({ id, name, quantity, price }) => (
                  <div
                    key={id}
                    className="flex items-center justify-between py-3"
                  >
                    <p className="font-medium text-gray-800">
                      {quantity} × {name}
                    </p>
                    <p className="font-semibold text-gray-900">
                      ${(price * quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <p>Subtotal</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <p>Shipping</p>
                <p>${shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <p>Tax (8%)</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between font-semibold text-gray-900 text-lg">
                <p>Total</p>
                <p>${finalTotal.toFixed(2)}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}