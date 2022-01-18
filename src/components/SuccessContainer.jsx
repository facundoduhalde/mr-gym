import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const SuccessContainer = () => {
  const { id: idOrder } = useParams();
  return (
    <Container>
      <br />
      <h3 align="center">Muchas gracias por su compra!!!</h3>
      <p align="center" className="card-text">
          <small align="center" className="text-muted">Su número de identificación es: <b>{idOrder}</b></small>
        </p>
    </Container>
  );
};

export default SuccessContainer;
