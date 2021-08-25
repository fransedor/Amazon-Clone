import React from 'react';
import "./Product.css"

function Product({ id, title, image, price, rating}) {
    return (
        <div className= "product">
            <div className="product__info">
                <p>{title}</p>
                <p className = 'product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="prodcut__rating">
                    {Array(rating).fill().map(( i ) => (
                        <span>&#11088;</span>
                    ))}                    
                </div>
            </div>
            <img src={image} />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
