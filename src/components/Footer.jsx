import React from "react";
import { Instagram, Twitter, Facebook } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="row">
          <div className="col-xs-8 col-md-6">
            <h5>Mr. Gym</h5>
            <p>
              ©2022 Mr. Gym | Todos los derechos reservados. Diseñó Facundo
              Duhalde
            </p>
          </div>
          <div className="col-xs-8 col-md-6">
            <p>Seguinos en nuestras redes sociales:</p>
            <a className="Instagram" href="http://www.instagram.com/mr.gymshop">
              <Instagram>" "</Instagram>
            </a>
            <a
              className="Facebook"
              href="https://www.facebook.com/Mr-Gym-Shop-104702847644301/?ref=page_internal"
            >
              <Facebook></Facebook>
            </a>
            <a className="Twitter" href="http://www.twitter.com">
              <Twitter></Twitter>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
