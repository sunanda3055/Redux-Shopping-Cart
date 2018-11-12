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
                <li>
                    <button 
                    onClick={this.props.onDecCartQtyHandler} 
                    disabled={this.props.product.quantity===0}
                    >
                    &nbsp;- &nbsp;
                    </button>
                </li>
                { 
                this.props.product.quantity === 0 ? this.props.onDeleteCartItemHandler() : this.props.onDecCartQtyHandler
                }
                <li>In Cart : {this.props.product.quantity}</li>
                <li>
                    <button
                        onClick={this.props.onIncCartQtyHandler}
                        disabled={this.props.product.availableQty===0}
                    >
                        &nbsp;+ &nbsp;
                    </button>
                </li>
                <li>Rs.{ this.props.product.price * this.props.product.quantity }</li>
                <li><button onClick={this.props.onDeleteCartItemHandler}>&nbsp;x &nbsp;</button></li>
            </ul>
        )
    }
}


export default Cart;
