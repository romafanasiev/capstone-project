import { REACT_APP_STRIPE_PUBLISHABLE_KEY } from "../../.env";
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLISHABLE_KEY);