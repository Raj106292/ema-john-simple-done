import { getStoredCart } from "../utilities/fakedb";

export const ProductCardLoader = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get card
    const savedCard = getStoredCart();
    const initialCard = [];

    for (const id in savedCard) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCard[id];
            addedProduct.quantity = quantity;
            initialCard.push(addedProduct);
        }
    }

    return { products: products, initialCard: initialCard };
}