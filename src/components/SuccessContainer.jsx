import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const SuccessContainer = () => {
  const { id: idOrder } = useParams();
  return (
    <Container>
      <br />
      <h3 align="center">Muchas gracias por su compra!!!</h3>
      <p align="center" className="card-text">
        <small align="center" className="text-muted">
          Su número de identificación es: <b>{idOrder}</b>
        </small>
      </p>
      <div align="center">
        <img src="https://firebasestorage.googleapis.com/v0/b/mr-gym.appspot.com/o/logogrande-01.png?alt=media&token=cd9c42be-a5c4-4958-96e5-4ed3798bfcff"></img>
      </div>
    </Container>
  );
};

export default SuccessContainer;
