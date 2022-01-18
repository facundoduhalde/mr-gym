import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCart from "../components/ItemCart";
import { Container, Button, Form, Table } from "react-bootstrap";
import { ItemContext } from "../context/ItemContext";
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
    /*       console.log(formData);
      console.log(cartItems);
      console.log(price);
      console.log(total); */
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
            <div class="col-md-6">
              <label for="name" class="form-label">
                Nombre
              </label>
              <input
                type="text"
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
                class="form-control"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></input>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
          {/* <Form  action="" onSubmit={() => this.addOrderToDb()}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                id="name"
                placeholder="Nombre y Apellido"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                id="email"
                type="email"
                placeholder="Ingrese su email"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Finalizar Compra
            </Button>
          </Form> */}
        </Container>
      )}
    </div>
  );
};
export default CartContainer;
