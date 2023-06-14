import { loadStripe } from "@stripe/stripe-js";
import HeadingTitle from "../../components/Share/HeadingTitle";
import Chackout from "./Chackout";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import './Payment.css'
// TODO provide key 
const stripePromise = loadStripe('pk_test_51NFEcBHhSxbFq9EibI7wK8uzfx572W4CsZSiMhNFJciRDNPbrvMEkjsmphoQgJDMPQ4DN5B4yCeMkNw0eVOG7SXx00l2NRGLbl');
const Payment = () => {
    const location = useLocation();
    console.log(location.state.itemName);
    const itemName = location.state.itemName
    const itemId = location.state.itemId
    const image = location.state.image
    const countId = location.state.countId
    const price = location.state?.price
    // const price = parseInt(priceStr.toFixed(2))

    
    console.log(itemId);
    console.log(price);
    return (
        <div className="bg-img w-full">
            <HeadingTitle heading='please complite your payment' />

            <Elements stripe={stripePromise}>
                <Chackout image={image} price={price} itemId={itemId} itemName={itemName} countId={countId}/>
            </Elements>
        </div>
    );
};

export default Payment;