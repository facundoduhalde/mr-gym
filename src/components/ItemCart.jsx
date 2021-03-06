import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ItemCart = (product) => {
  const { removeItem } = useContext(CartContext);
  const { item, quantity } = product;
  const { id, title, image, price } = item;
  return (
    <tr data-id={id}> 
      <td align="center"><img src={image} width="200px" alt={title}></img></td>
      <td align="center" valign="middle">{title}</td>
      <td align="center" valign="middle">{quantity}</td>
      <td align="center" valign="middle">$ {price * quantity}</td>
      <td align="center" valign="middle"><Button variant="danger" onClick={() => removeItem(item)}>Eliminar del carrito</Button></td>
    </tr>
  );
};

export default ItemCart;
