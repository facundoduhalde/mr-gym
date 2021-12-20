import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import Container from 'react-bootstrap/Container'
import { Items } from '../mocks/items';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect(() => getItemAsyncAwait(), []);


    const getItem = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => Items[0]
              ? resolve(Items[0])
              : reject(new Error())
          , 2000);
        })    
      }

      
      const getItemAsyncAwait = async () => {
		try {
			const product = await getItem();
			setItem(product);
		} catch (error) {
			console.log('ERROR', 'Hubo un error', error);
		}
	};



    return (
        <Container>
            {item ? <ItemDetail  {...item}/> : <h5>Cargando...</h5>}
        </Container>
    )
};

export default ItemDetailContainer
