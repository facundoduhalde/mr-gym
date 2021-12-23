import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ stock, valorInicial, onAdd }) => {
  const [count, setCount] = useState(parseInt(valorInicial));
  const RemoveItem = () => count > 0 && setCount(count - 1);
  const AddItem = () => count < stock && setCount(count + 1);
  const navigate = useNavigate();
  return (
    <Container>
      <div style={{ display: "flex", width: "auto" }}>
        <Button variant="secondary" onClick={RemoveItem} disabled={count <= 0}>
          {" "}
          -{" "}
        </Button>
        <p style={{ margin: "auto" }}> {count} </p>
        <Button variant="secondary" onClick={AddItem} disabled={count >= stock}>
          {" "}
          +{" "}
        </Button>
      </div>
      <br />
      <Button
        variant="primary"
        onClick={() => onAdd(count)}
        disabled={count > stock || count <= 0}
      >
        Agregar al carrito{" "}
      </Button>
      <Button variant="secondary" onClick={() => navigate("/")}>
        Volver
      </Button>
    </Container>
  );
};

export default ItemCount;
