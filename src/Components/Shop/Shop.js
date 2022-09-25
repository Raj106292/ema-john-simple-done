import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(resp => resp.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error.message))
    }, [])

    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(0);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const totalPrice = newCart.reduce((prev, next) => prev + next.price, 0);
        setPrice(totalPrice);
        const totalTax = (totalPrice > 1000) ? totalPrice*(10/100) : 0;
        setTax(parseFloat(totalTax.toFixed(2)));
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
                <Cart cart={cart}
                price={price}
                tax={tax}></Cart>
            </div>
        </div>
    );
};

export default Shop;