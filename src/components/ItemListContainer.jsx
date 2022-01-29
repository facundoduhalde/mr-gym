import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ItemList from "./ItemList";
import { ItemContext } from "../context/ItemContext";
import { FirebaseConfig } from "../firebase/firebaseConfig";


const ItemListContainer = (props) => {
  const { items, setItems, load, setLoad } = useContext(ItemContext);
  const { name: categoryName } = useParams();
  const firebase = new FirebaseConfig();

  useEffect(() => getItemsFromDb(), [categoryName]);

  const getItemsFromDb = async () => {
    try {
      setLoad(true);
      const value = (categoryName)
        ? await firebase.getItemsByCategory(categoryName)
        : await firebase.getItems();
      console.log(categoryName);
      setItems(value);
      setLoad(false);
      console.log(items);
    } catch (error) {
      console.error("getItemsFromDb", error);
    }
  };

  return (
    <Container>
      <h5>{props.text}</h5>
      <br />
      {load ? (
        <div align="center" style={{ margin: "150px" }}><h5>Cargando...</h5><Spinner animation="border" variant="success" /></div>
      ) : (
        <ItemList items={items} />
      )}
    </Container>
  );
};

export default ItemListContainer;
