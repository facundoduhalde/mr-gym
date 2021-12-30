import React, { useState, createContext } from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const isInCart = item => cartItems && cartItems.some(element => element.item.id === item.id);

    const addItem = (item, quantity) => {
        let cartElement = { item, quantity };
        let cartAux = [];
        if (isInCart(item)) {
            console.log("El producto ya esta en el carrito");
            cartElement = cartItems.find(element => element.item.id === item.id);
            cartElement.quantity += quantity;
            cartAux = [...cartItems];
        } else {
            console.log("El producto NO esta en el carrito");
            console.log('Id Producto:', item.id, 'Cantidad: ', quantity);
            cartAux = [cartElement, ...cartItems];
        }

        setCartItems(cartAux);

    };


    const removeItem = item => {
        if (isInCart(item)) {
            const cartElements = cartItems.filter(element => element.item.id !== item.id) || [];
            setCartItems([...cartElements]);
        }
    };

    const clearCart = () => setCartItems([]);



    return (
        <CartContext.Provider
            value={{
                addItem,
                removeItem,
                clearCart,
                isInCart,
                cartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};