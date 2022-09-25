import React from 'react';

const Cart = (props) => {
    const {cart, price, tax} =props;
    return (
        <div>
            <h4>Order summary</h4>
            <div>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Charge:</p>
                <p>Tax: ${tax}</p>
                <p>Grand Total: ${price + tax}</p>
            </div>
            <div>
                <button>Clear Cart</button>
                <button>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;