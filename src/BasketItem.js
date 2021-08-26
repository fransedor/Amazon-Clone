import React from 'react';
import './BasketItem.css';
import {useStateValue} from './StateProvider';

function BasketItem({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='basketItem'>
            <img className= "basketItem__image" src={image} />
            <div className="basketItem__info">
                <p className="basketItem__title">{title}</p>
                <p className="basketItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="basketItem__rating">
                    {Array(rating).fill().map(( i ) => (
                        <span>&#11088;</span>
                    ))}                    
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default BasketItem
