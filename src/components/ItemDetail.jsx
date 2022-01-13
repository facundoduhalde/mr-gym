import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";
import { Container } from "react-bootstrap";

const ItemDetail = (item) => {
  const { id, title, description, category, image, price, stock } = item;
  const { addItem, cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(null);

  console.log(cartItems);

  const handleOnAdd = (quantity) => {
    //console.log("Cantidad a agregar: ", quantity);
    setCounter(quantity);
    addItem(item, quantity);
  };

  return (
    <div className="cardDetails" data-id={id}>
      <div className="col-md-12">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-title">{category}</h6>
        <img style={{ width: "100%" }} src={image} alt={title}></img>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">Precio: $ {price}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">Stock: {stock - counter}</small>
        </p>
        {counter ? (
          <Container>
            <Button variant="outline-dark" onClick={() => navigate("/")}>
              Seguir comprando
            </Button>
            <br />
            <br />
            <Button variant="success" onClick={() => navigate("/cart")}>
              Terminar mi compra
            </Button>
          </Container>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
