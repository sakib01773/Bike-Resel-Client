import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';
import Spiner from '../../../components/Spiner/Spiner';
import useTitle from '../../../hocks/useTitles';


const stripePromise = loadStripe(process.env.REACT_APP_STRPIE_PK)

console.log('stripe key', stripePromise)
const Payment = () => {
    useTitle("payment")
    const order = useLoaderData();
    const navigation = useNavigation()
    const {productName, price} = order;
    // console.log('orders data', order)
    if(navigation.state === "loading"){
        return <Spiner></Spiner>
    }
    return (
        <div>
            <h2 className='text-3xl'>Payment for {productName}</h2>
            <p>Please Pay: {price}</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;