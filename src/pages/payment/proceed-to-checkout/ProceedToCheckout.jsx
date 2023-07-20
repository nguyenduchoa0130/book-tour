import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentService } from '../../../common/services';
import { GlobalActions } from '../../../common/store/actions';
import { GlobalSelectors } from '../../../common/store/selectors';
import AlertUtil from '../../../common/utils/alert.util';
import CheckoutForm from './checkout-form';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC_KEY);

const ProceedToCheckout = ({ user, bookingTour }) => {
  // State
  const [options, setOptions] = useState({
    appearance: {
      theme: 'stripe',
    },
    clientSecret: null,
  });
  const [paymentIntents, setPaymentIntents] = useState(null);

  const dispatch = useDispatch();
  const isLoading = useSelector(GlobalSelectors.selectIsLoading);

  useEffect(() => {
    const setUpPaymentIntent = async () => {
      try {
        dispatch(GlobalActions.showLoading());
        const resData = await paymentService.setUpPaymentIntent(bookingTour?.Gia);
        setPaymentIntents(resData);
        setOptions((prevState) => ({ ...prevState, clientSecret: resData.client_secret }));
      } catch (error) {
        AlertUtil.showError(error?.response?.data?.message || error.message);
      } finally {
        dispatch(GlobalActions.hideLoading());
      }
    };
    setUpPaymentIntent();
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          {options.clientSecret ? (
            <>
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm
                  paymentIntents={paymentIntents}
                  user={user}
                  bookingTour={bookingTour}
                />
              </Elements>
            </>
          ) : (
            <Empty />
          )}
        </>
      ) : null}
    </>
  );
};

export default ProceedToCheckout;
