import { Elements } from '@stripe/react-stripe-js';
import { Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentService } from '../../services';
import { hideLoading, showLoading } from '../../store/actions/global.actions';
import { GlobalSelectors } from '../../store/selectors';
import AlertUtil from '../../utils/alert.util';
import CheckoutForm from './checkout-form/CheckoutForm';
import stripePromise from './load-stripe';

const Stripe = ({ amount, onPayment }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(GlobalSelectors.selectIsLoading);

  const [options, setOptions] = useState({
    appearance: {
      theme: 'stripe',
    },
    clientSecret: null,
  });
  const [paymentIntents, setPaymentIntents] = useState(null);

  useEffect(() => {
    const setUpPaymentIntent = async () => {
      try {
        dispatch(showLoading());
        const resData = await paymentService.setUpPaymentIntent(amount);
        setPaymentIntents(resData);
        setOptions((prevState) => ({ ...prevState, clientSecret: resData.client_secret }));
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      } finally {
        dispatch(hideLoading());
      }
    };
    setUpPaymentIntent();
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          {options.clientSecret ? (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm onPayment={onPayment} paymentIntents={paymentIntents} />
            </Elements>
          ) : (
            <Empty />
          )}
        </>
      ) : null}
    </>
  );
};

export default Stripe;
