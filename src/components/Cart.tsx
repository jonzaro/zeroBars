import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { X, Plus, Minus } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const ShippingForm: React.FC<{
  onSubmit: (details: ShippingDetails) => void;
}> = ({ onSubmit }) => {
  const [details, setDetails] = useState<ShippingDetails>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  const inputClass = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50";
  const labelClass = "block text-sm font-medium text-gray-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>First Name</label>
          <input
            type="text"
            id="firstName"
            required
            className={inputClass}
            value={details.firstName}
            onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name</label>
          <input
            type="text"
            id="lastName"
            required
            className={inputClass}
            value={details.lastName}
            onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          type="email"
          id="email"
          required
          className={inputClass}
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>Street Address</label>
        <input
          type="text"
          id="address"
          required
          className={inputClass}
          value={details.address}
          onChange={(e) => setDetails({ ...details, address: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className={labelClass}>City</label>
          <input
            type="text"
            id="city"
            required
            className={inputClass}
            value={details.city}
            onChange={(e) => setDetails({ ...details, city: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="state" className={labelClass}>State</label>
          <input
            type="text"
            id="state"
            required
            className={inputClass}
            value={details.state}
            onChange={(e) => setDetails({ ...details, state: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="zipCode" className={labelClass}>ZIP Code</label>
          <input
            type="text"
            id="zipCode"
            required
            className={inputClass}
            value={details.zipCode}
            onChange={(e) => setDetails({ ...details, zipCode: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>Country</label>
          <input
            type="text"
            id="country"
            required
            className={inputClass}
            value={details.country}
            onChange={(e) => setDetails({ ...details, country: e.target.value })}
          />
        </div>
      </div>

      <button type="submit" className="w-full btn py-3">
        Continue to Payment
      </button>
    </form>
  );
};

const CheckoutForm: React.FC<{ total: number }> = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (submitError) {
      setError(submitError.message ?? 'An error occurred');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full btn py-3 disabled:opacity-50"
      >
        {processing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
      </button>
    </form>
  );
};

export const Cart: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { items, removeItem, updateQuantity, total } = useCartStore();
  const [showPayment, setShowPayment] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails | null>(null);

  if (!isOpen) return null;

  const options = {
    mode: 'payment' as const,
    amount: Math.round(total * 100),
    currency: 'usd',
    appearance: {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#000000',
      },
    },
  };

  const handleShippingSubmit = (details: ShippingDetails) => {
    setShippingDetails(details);
    setShowShipping(false);
    setShowPayment(true);
  };

  const getStepTitle = () => {
    if (showShipping) return 'Shipping Information';
    if (showPayment) return 'Payment';
    return 'Shopping Cart';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 w-full max-w-md">
        <div className="h-full bg-white shadow-xl flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium">{getStepTitle()}</h2>
            <button onClick={onClose}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : showPayment ? (
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm total={total} />
              </Elements>
            ) : showShipping ? (
              <ShippingForm onSubmit={handleShippingSubmit} />
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center space-x-4"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-20 w-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-gray-500">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="p-1"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-1"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && !showShipping && !showPayment && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={() => setShowShipping(true)}
                className="w-full btn py-3"
              >
                Proceed to Checkout
              </button>
            </div>
          )}

          {(showShipping || showPayment) && (
            <div className="border-t p-4">
              <button
                onClick={() => {
                  if (showPayment) {
                    setShowPayment(false);
                    setShowShipping(true);
                  } else {
                    setShowShipping(false);
                  }
                }}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                ← Back to {showPayment ? 'Shipping' : 'Cart'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};