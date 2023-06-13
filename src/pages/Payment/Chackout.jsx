import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { AuthContext } from '../../providers/AuthProviders';
import './Chackout.css'


const Chackout = ({price,itemId,itemName,countId,image}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext)
    const [err,setErr] = useState('')
    const [axiosSecure] =useAxios()
    const [clientSecret,setclientSecret] = useState('')
    const [processing,setProcessing] = useState(false)
    const [transationId,setTransationId] = useState('')

    useEffect(() =>{
        if (price > 0) {
            axiosSecure.post('/creat-payment',{price})
        .then(res => {
            setclientSecret(res.data.clientSecret)
        })
        }
    },[])

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

          setProcessing(true)
          const {paymentIntent, error :confirmErro} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'Unknown Person',
                  name : user?.displayName || 'Unknon person'
                },
              },
            },
          );
          if (confirmErro) {
            console.log(confirmErro);
          }
          console.log("paymentIntent",paymentIntent);
          setProcessing(false)
          if (paymentIntent.status == 'succeeded') {
            const TransationId = paymentIntent.id
            setTransationId(TransationId)

            // send the informatiob to the surver 
            const payment = {
                email: user?.email,
                TransationId,
                price : price,
                quantity : 1,
                itemId :itemId,
                countId,
                itemName : itemName, 
                date: new Date(),
                orderStatus : 'pending',
                image : image,
                ownerName: user?.displayName,
            }
            axiosSecure.post('/paymentDetils',payment)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    console.log('pice bhai');
                    console.log('pice bhai' ,);
                }
            })


            axiosSecure.delete(`/confirmPayment/${itemId}`)
            .then(res => console.log(res.data))
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
            <button type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        {
            err && <p className='text-red-500'> {err}</p>
        }
        {
            transationId && <p className='text-green-500'> {transationId}</p>
        }
        </>
    );
};

export default Chackout;