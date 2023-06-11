import { loadStripe } from "@stripe/stripe-js";
import HeadingTitle from "../../components/Share/HeadingTitle";
import Chackout from "./Chackout";
import { Elements } from "@stripe/react-stripe-js";
// TODO provide key 
const stripePromise = loadStripe('pk_test_51NFEcBHhSxbFq9EibI7wK8uzfx572W4CsZSiMhNFJciRDNPbrvMEkjsmphoQgJDMPQ4DN5B4yCeMkNw0eVOG7SXx00l2NRGLbl');
const Payment = () => {
    return (
        <div>
            <HeadingTitle heading='please complite your payment' />

            <Elements stripe={stripePromise}>
                <Chackout />
            </Elements>
        </div>
    );
};

export default Payment;