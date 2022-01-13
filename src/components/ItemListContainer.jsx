import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ItemList from "./ItemList";
import { ItemContext } from "../context/ItemContext";
import { FirebaseConfig } from "../firebase/firebaseConfig";
//import { Items } from "../mocks/items";


const ItemListContainer = (props) => {
  const { items, setItems, load, setLoad } = useContext(ItemContext);
  const { name: categoryName } = useParams();
  const firebase = new FirebaseConfig();
  //const [list, setList] = useState(null);

  //useEffect(() => setReturnListAsyncAwait(), [categoryName]);
  useEffect(() => getItemsFromDb(), [categoryName]);

  /*   let order = {
    buyer:{name: "Facundo", phone:1133124488, email: "test@hotmail.com"},
    items:[{id:1, title:"Item 1", price:50},{id:2, title:"Item 2", price:100}],
    total:150
  } */



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
        <Spinner animation="border" variant="success" />
      ) : (
        <ItemList items={items} />
      )}
    </Container>
  );
};

export default ItemListContainer;
