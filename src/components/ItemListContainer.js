import React from 'react'
import Container from 'react-bootstrap/Container'

const ItemListContainer = (props) => {
    return (
        <Container>
            <h3>{props.text}</h3>
        </Container>
    )
};

export default ItemListContainer;