import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC_KEY);
export default stripePromise;
