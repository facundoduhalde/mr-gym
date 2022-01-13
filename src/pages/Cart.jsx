import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { CartContext } from "../context/CartContext";
import Table from "react-bootstrap/Table";
import ItemCart from "../components/ItemCart";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, clearCart, price, total } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <br></br>
      {cartItems.length === 0 ? (
        <Container>
          <h2 align="center">No hay items en el carrito</h2>
          <div class="col-md-12 text-center">
            <Button align="center" onClick={() => navigate("/")}>
              Ver Productos
            </Button>
          </div>
        </Container>
      ) : (
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr align="center">
                <th>Imagen</th>
                <th>Descripcion</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item, index) => (
                  <ItemCart key={"CartItemMap" + index} {...item} />
                ))}
            </tbody>
          </Table>
          <div align="right">
            <Button variant="outline-danger" onClick={() => clearCart()}>
              Vaciar el carrito
            </Button>
            <br />
          </div>
          <Container>
          <br />
            <h4 align="right"> Total: $ {price}</h4>
          </Container>
        </Container>
      )}
    </div>
  );
};
export default Cart;
