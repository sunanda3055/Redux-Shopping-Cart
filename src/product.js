import React from 'react';
import './style.css';
import AddToCart from './addToCart.js';

class Product extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className='product-border'>
                <li><img src={this.props.image} /></li>
                <li className='product-detail-list'>
                    <h4>{this.props.name}</h4>
                    <h4><b>Rs.{this.props.price}</b></h4>
                    {
                        this.props.qty >0 ?
                            (<h5>In stock (<b>{this.props.qty}</b>)</h5>)
                            : (<h5><b>Out of stock</b></h5>)
                    }
                    <AddToCart onAddToCartHandler={this.props.onAddToCartHandler}/>
                </li>
            </ul>
        )
    }
}

export default Product;