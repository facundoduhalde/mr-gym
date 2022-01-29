import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCart from "../components/ItemCart";
import { Container, Button, Form, Table } from "react-bootstrap";
import { FirebaseConfig } from "../firebase/firebaseConfig";

const CartContainer = () => {
  const { cartItems, clearCart, price, total } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();
  const firebase = new FirebaseConfig();

  const addOrderToDb = async (e) => {
    e.preventDefault();
    const idOrder = await firebase.addOrder(cartItems, formData, price, total);
    navigate(`/success/${idOrder}`);
    clearCart();
    return null;
  };

  return (
    <div>
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

          <form class="row g-3" onSubmit={addOrderToDb}>
            <div class="col-12" align="center">
              <h4>Complete sus datos para la compra:</h4>
            </div>
            <div class="col-md-6">
              <label for="name" class="form-label">
                Nombre y Apellido
              </label>
              <input
                type="text"
                placeholder="Ingrese su nombre y apellido"
                class="form-control"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              ></input>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Ingrese su e-mail"
                class="form-control"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></input>
            </div>
            <div class="col-12" align="center">
              <button type="submit" class="btn btn-primary">
                Finalizar Compra
              </button>
            </div>
          </form>
        </Container>
      )}
    </div>
  );
};
export default CartContainer;
