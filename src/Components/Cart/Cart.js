import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const { cart, clearCart } = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let tax = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        tax = (total > 1000) ? parseFloat((total * (10 / 100)).toFixed(2)) : 0;
    }

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <div>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <p className='grn-total'>Grand Total: ${total + shipping + tax}</p>
            </div>
            <div className='cart-btn'>
                <button onClick={clearCart}>Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                <Link to='/orders'>
                    <button>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;