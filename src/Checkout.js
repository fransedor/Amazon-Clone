import React from 'react';
import "./Checkout.css"
import Subtotal from './Subtotal';
import BasketItem from './BasketItem';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className= "checkout">
            <div className="checkout__left">
                <img src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/banner-ads-examples-ncino.jpg" alt="checkout ads" className="checkout__ad" />
                <div>
                    <h3>Hello, {user ? user.email : 'Guest'}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {/* BasketItem */}
                    {basket.map(item => (
                        <BasketItem 
                        id={item.id}
                        title = {item.title}
                        price = {item.price}
                        rating = {item.rating}
                        image={item.image}
                     />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
