import React from 'react';
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrderAction } from '../actions/orderActions';
import SuccessComponent from './SuccessComponent';
import Loader from './LoaderComponent';
import ErrorComponent from './ErrorComponent';

export default function CheckoutComponent({ grandTotal }) {

    const orderstate = useSelector(state => state.placeOrderReducer);
    const { loading, error, success } = orderstate;
    const dispatch = useDispatch()

    function tokenHandler(token) {
        console.log(token);
        dispatch(placeOrderAction(token, grandTotal))
    }

    return (
        <div>

            {loading && (<Loader />)}
            {error && (<ErrorComponent error="something went wrong" />)}
            {success && (<SuccessComponent success="Your order is placed Successfully" />)}

            <StripeCheckout
                stripeKey='pk_test_51KtVxhSAIlAmsg9EbJcTcjdNkbfzYusjdZirZWYvKuf6zDwjPYQZWhhhnd173MeZzTEfk6nlexxDeGjVfTIhbRsz00zRgCAr28'
                amount={grandTotal * 100}
                shippingAddress
                token={tokenHandler}
                currency='INR' >

                <Button className='btn'> Place Order </Button>

            </StripeCheckout>

        </div>
    )
}
