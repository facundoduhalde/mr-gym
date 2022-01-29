import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { FirebaseConfig } from "../firebase/firebaseConfig";
import { ItemContext } from "../context/ItemContext";

const ItemDetailContainer = () => {
  const { id: idItem } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const { setLoad } = useContext(ItemContext);
  const firebase = new FirebaseConfig();

  useEffect(() => getItemFromDbById(), []);

  const getItemFromDbById = async () => {
    try {
      setLoad(true);
      const value = await firebase.getItemById(idItem);
      setLoad(false);
      if (value) {
        setItem(value);
      } else {
        navigate("/");
      }
    } catch (error) {
      navigate("/");
      console.error("getProductFromDbByID", error);
    }
  };

  return (
    <Container>
      {item ? (
        <ItemDetail {...item} />
      ) : (
        <div align="center" style={{ margin: "150px" }}><h5>Cargando...</h5><Spinner animation="border" variant="primary" /></div>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
