import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({
  id,
  title,
  description,
  category,
  pictureUrl,
  price,
  stock,
}) => {
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
          <small className="text-muted">Stock: {stock}</small>
        </p>
        <ItemCount
          stock={stock}
          valorInicial="1"
          onAdd={(count) =>
            alert(`Se han agregado ${count} articulos al carrito`)
          }
        />
      </div>
    </div>
  );
};

export default ItemDetail;
