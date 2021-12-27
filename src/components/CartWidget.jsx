import React from "react";
import Nav from "react-bootstrap/Nav";
import CartIcon from "../assets/img/cartIcon.svg";
import "./CartWidget.css";

const CartWidget = (props) => {
  return (
    <Nav.Link>
      <img src={CartIcon} width="30px" height="30px"></img>
      <span class="badge badge-warning" id="lblCartCount">
        {" "}
        {props.count}{" "}
      </span>
    </Nav.Link>
  );
};

export default CartWidget;
