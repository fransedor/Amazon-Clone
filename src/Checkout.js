import React from 'react';
import "./Checkout.css"
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className= "checkout">
            <div className="checkout__left">
                <img src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/banner-ads-examples-ncino.jpg" alt="checkout ads" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
