import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ItemList from "./ItemList";
import { Items } from "../mocks/items";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const { name: categoryName } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => setReturnListAsyncAwait(), [categoryName]);

  const returnList = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => (Items ? resolve(Items) : reject(new Error())), 1000);
    });
  };

  const setReturnListAsyncAwait = async () => {
    try {
      const products = await returnList();
      setList(handleFilter(products));
    } catch (error) {
      console.error("Error", "Se ha producido un error", error);
    }
  };

  const handleFilter = (data) =>
    categoryName && data
      ? data.filter((item) => item.category === categoryName)
      : data;

  return (
    <Container>
      <h3>{props.text}</h3>
      <br />
      {list ? (
        <ItemList items={list} />
      ) : (
        <Spinner animation="border" variant="success" />
      )}
    </Container>
  );
};

export default ItemListContainer;
