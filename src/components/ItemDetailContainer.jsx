import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { Items } from "../mocks/items";

const ItemDetailContainer = () => {
  const { id: idItem } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => getItemAsyncAwait(), []);

  const getItem = () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () => (Items ? resolve(Items) : reject(new Error("ERROR"))),
        1000
      );
    });

  const getItemAsyncAwait = async () => {
    try {
      const product = await getItem();
      handleFilter(product);
    } catch (error) {
      console.log("ERROR", "Hubo un error", error);
    }
  };

  const handleFilter = (data) => {
    if (idItem && data) {
      const _item = data.filter((item) => item.id === idItem);
      if (_item.length === 1) {
        setItem(_item[0]);
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  };

  return (
    <Container>
      {item ? (
        <ItemDetail {...item} />
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </Container>
  );
};

export default ItemDetailContainer;
