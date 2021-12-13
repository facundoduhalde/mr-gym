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
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Colchoneta 100*50*0.50</Card.Title>
                    <Card.Text>
                        Medidas: 100cm x 50 x 5cm Material: Bagun tela superior e inferior. Con cierre
                    </Card.Text>
                    <Card.Text>
                        Rellena espuma de polietileno de alta densidad. Material: Bagun tela superior e inferior. Con cierre
                    </Card.Text>
                    <Card.Text>
                        Material: Bagun tela superior e inferior. Con cierre
                    </Card.Text>
                    <div style={{ display: 'flex'}}>
                        <Button  variant="secondary" onClick={RemoveItem} disabled={count <= 0} style={{  margin: 'auto' }}>  -  </Button>
                        <p style={{  margin: 'auto' }}>     {count}     </p>
                        <Button variant="secondary" onClick={AddItem} disabled={count >= stock} style={{  margin: 'auto' }}>  +  </Button>
                    </div>
                    <br />
                    <Button variant="primary" onClick={() => onAdd(count)} disabled={count > stock || count <= 0} style={{  margin: 'auto' }}> 
                        Agregar al carrito </Button>
                </Card.Body>
            </Card>
        </Container>
    )
};

export default ItemCount;