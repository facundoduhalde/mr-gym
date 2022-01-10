import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [price, setPrice] = useState(0);

	useEffect(() => {
		setTotal(handleTotal());
        setPrice(handleTotalPrice());
	}, [cartItems]);

    const isInCart = item => cartItems && cartItems.some(element => element.item.id === item.id);

    const addItem = (item, quantity) => {
        let cartElement = { item, quantity };
        let cartAux = [];
        if (isInCart(item)) {
            //console.log("El producto ya esta en el carrito");
            cartElement = cartItems.find(element => element.item.id === item.id);
            cartElement.quantity += quantity;
            cartAux = [...cartItems];
        } else {
            //console.log("El producto NO esta en el carrito");
            //console.log('Id Producto:', item.id, 'Cantidad: ', quantity);
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

	const handleTotal = () => {
		const initialValue = 0;
		return (
			cartItems
      && cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, initialValue)
		);
	};

	const handleTotalPriceByItem = () => {
		const newCartItems = cartItems;
		return newCartItems.map(element =>
			({
				...element,
				price: element.item.price * element.quantity,
			}),
		);
	};

    const handleTotalPrice = () => {
		const cartAux = handleTotalPriceByItem();
		const initialValue = 0;
		return (
			cartAux
      && cartAux.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue)
		);
	};

    return (
        <CartContext.Provider
            value={{
                addItem,
                removeItem,
                clearCart,
                isInCart,
                cartItems,
                total,
                price,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};