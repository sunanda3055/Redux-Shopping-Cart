import React from 'react';
import './style.css';

const AddToCart = (props) =>{
    return(
        <div className='addToCart'>
            <button onClick={props.onAddToCartHandler} className='addToCart-btn'>Add To Cart</button>
        </div>
    )
}

export default AddToCart;