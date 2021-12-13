import React from 'react'
import Container from 'react-bootstrap/Container'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (
        <Container>
            <h3>{props.text}</h3>
            <br />
            <ItemCount stock="10" valorInicial="1" onAdd={count => alert(`Se han agregado ${count} articulos al carrito`)}/> 
        </Container>
    )
};

export default ItemListContainer;