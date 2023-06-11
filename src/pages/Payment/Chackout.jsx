import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { set } from 'react-hook-form';


const Chackout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [err,setErr] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('error', error);
            setErr(err.message)
          } else {
            setErr('')
            console.log('PaymentMethod', paymentMethod);
          }
        };


    
    return (
        <>
        <form className='mt-72 h-[60vh] px-8' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            err && <p className='text-red-500'> {err}</p>
        }
        </>
    );
};

export default Chackout;