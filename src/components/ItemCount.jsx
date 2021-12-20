import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock, valorInicial, onAdd }) => {
    const [count, setCount] = useState(parseInt(valorInicial));
    const RemoveItem = () => count > 0 && setCount(count - 1);
    const AddItem = () => count < stock && setCount(count + 1);
    return (
        <Container>
                
                    <div style={{ display: 'flex', width: '200px' }}>
                        <Button  variant="secondary" onClick={RemoveItem} disabled={count <= 0}>  -  </Button>
                        <p style={{  margin: 'auto' }}>     {count}     </p>
                        <Button variant="secondary" onClick={AddItem} disabled={count >= stock}>  +  </Button>
                    </div>
                    <br />
                    <Button variant="primary" onClick={() => onAdd(count)} disabled={count > stock || count <= 0}> 
                        Agregar al carrito </Button>
               
        </Container>
    )
};

export default ItemCount;