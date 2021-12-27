import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CartWidget from "./CartWidget";

const ItemDetail = ({
  id,
  title,
  description,
  category,
  pictureUrl,
  price,
  stock,
}) => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(null);
  return (
    <div className="cardDetails" data-id={id}>
      <div className="col-md-12">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-title">{category}</h6>
        <img style={{ width: "auto" }} src={pictureUrl} alt={title}></img>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">Precio: {price}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">Stock: {stock - counter}</small>
        </p>
        {counter ? (
          <Button variant="success" onClick={() => navigate("/cart")}>
            {" "}
            Terminar mi compra
          </Button>
        ) : (
          <ItemCount stock={stock} onAdd={(value) => setCounter(value)} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
