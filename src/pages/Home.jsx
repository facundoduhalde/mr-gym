import React from "react";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => (
  <div>
    <NavBar />
    <ItemListContainer text="Listado de Productos" />
  </div>
);

export default Home;
