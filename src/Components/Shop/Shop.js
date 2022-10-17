import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Shop = () => {
    const {products, initialCard} = useLoaderData();

    const [cart, setCart] = useState(initialCard);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    // const [price, setPrice] = useState(0);
    // const [tax, setTax] = useState(0);
    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [ ...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);

        // const totalPrice = newCart.reduce((prev, next) => prev + next.price, 0);
        // setPrice(totalPrice);

        // const totalTax = (totalPrice > 1000) ? totalPrice*(10/100) : 0;
        // setTax(parseFloat(totalTax.toFixed(2)));
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                <Link to='/orders'>
                    <button>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;