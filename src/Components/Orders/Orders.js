import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { initialCard } = useLoaderData();
    const [cart, setCart] = useState(initialCard);

    const handleRemoveItem = (id) => {
        const remainingItem = initialCard.filter(product => product.id !== id);
        setCart(remainingItem);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>You have no items to review. Select items from <Link to='/shop'>Shop</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;