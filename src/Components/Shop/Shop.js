import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find( product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const [cart, setCart] = useState([]);
    // const [price, setPrice] = useState(0);
    // const [tax, setTax] = useState(0);
    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;