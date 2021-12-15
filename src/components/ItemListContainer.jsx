import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { Items } from '../mocks/items';

const ItemListContainer = (props) => {

    const [list, setList] = useState(null)

    const returnList = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => Items 
              ? resolve(Items)
              : reject(new Error())
          , 2000);
        })    
      }

      
  const setReturnListPromise = () => {
    returnList()
      .then(response => setList(response))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setReturnListPromise()
     }, [])

    return (
        <Container>
            <h3>{props.text}</h3>
            <br />
            {/* <ItemCount stock="10" valorInicial="1" onAdd={count => alert(`Se han agregado ${count} articulos al carrito`)}/>  */}
            {list ? <ItemList items={list}/> : <h5>Cargando...</h5>}
        </Container>
    )
};

export default ItemListContainer;