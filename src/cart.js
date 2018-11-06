import React from 'react';
import './style.css';

class Cart extends React.Component{
    constructor(props){
        super(props);
    }

    // componentWillReceiveProps(nextProps){
    //     console.log('nextProps-----',nextProps);
    // }

    render(){

        return(
            <ul className='cart-item'>
                <li className='cart-item-name'>{this.props.product.name}</li>
                <li>Rs.{this.props.product.price}</li>
                <li><button onClick={this.props.onDecCartQtyHandler} disabled={this.props.product.quantity===0}>&nbsp;- &nbsp;</button></li>
                <li>Added : {this.props.product.quantity} | Available : {this.props.product.availableQty}</li>
                <li>
                    <button
                        onClick={this.props.onIncCartQtyHandler}
                        disabled={this.props.product.availableQty===0}
                    >
                        &nbsp;+ &nbsp;
                    </button>
                </li>
                <li>Rs.{this.props.product.price * this.props.product.quantity }</li>
                <li><button onClick={this.props.onDeleteCartItemHandler}>&nbsp;x &nbsp;</button></li>
            </ul>
        )

        /*console.log('props ------------', this.props.product['id'], this.props.cart[this.props.product['id']]);
        const { cart, product } = this.props;
        const quantity = cart[product['id']]
        return(
            <ul className='cart-item'>
                <li className='cart-item-name'>Item Name</li>
                <li>Rs.price</li>
                <li><button>&nbsp;- &nbsp;</button></li>
                {/!*<li>{props.cart.qty}</li>*!/}
                {/!*<li>{(quantity && quantity.quantity) || 0} Qty</li>*!/}
                <li><button>&nbsp;+ &nbsp;</button></li>
                <li>Rs.ttl</li>
                <li><button>&nbsp;x &nbsp;</button></li>
            </ul>
        )*/
    }
}


export default Cart;
