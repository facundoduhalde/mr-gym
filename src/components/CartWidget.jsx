import React, {useContext} from "react";
import Nav from "react-bootstrap/Nav";
import CartIcon from "../assets/img/cartIcon.svg";
import "./CartWidget.css";
import {CartContext} from '../context/CartContext';
import { useNavigate } from "react-router-dom";


const CartWidget = () => {
  const navigate = useNavigate()
  const {total} = useContext(CartContext);
  return (
    <Nav.Link onClick={() => navigate("/cart")}>
      <img src={CartIcon} width="30px" height="30px"></img>
      <span class="badge badge-warning" id="lblCartCount">
        {total}
      </span>
    </Nav.Link>
  );
};

export default CartWidget;
