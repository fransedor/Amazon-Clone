import React from 'react';
import BasketItem from './BasketItem';
import './Payment.css'
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className = 'payment'>
            <div className="payment__container">
                <h1>
                    Checkout 
                        (<Link to = "/checkout">{basket?.length} items</Link>)
                </h1>

                {/* Payment section - delivery adress */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{user?.email}</p>
                        <p>123 Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* Payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
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

                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
