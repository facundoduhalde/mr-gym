import React, {useState, createContext} from 'react';

export const ItemContext = createContext({});

export const ItemContextProvider = ({children}) => {
	const [items, setItems] = useState([]);
	const [load, setLoad] = useState(true);

	return (
		<ItemContext.Provider
			value={{
				items,
				setItems,
				load,
				setLoad,
			}}
		>
			{children}
		</ItemContext.Provider>
	);
};