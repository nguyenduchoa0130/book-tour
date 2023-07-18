import { useElements, useStripe, PaymentElement } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = ({ onPayment, paymentIntents }) => {
  const stripe = useStripe();
  const elements = useElements();
  return (
    <>
      <PaymentElement />
    </>
  );
};

export default CheckoutForm;
