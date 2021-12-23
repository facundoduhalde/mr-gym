import React from "react";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NavBar from "../components/NavBar";

const Product = () => (
  <div>
    <NavBar />
    <br></br>
    <ItemDetailContainer />
  </div>
);

export default Product;
