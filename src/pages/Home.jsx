import React from "react";
import NavBar from "../components/NavBar";
import CarouselBanner from "../components/CarouselBanner";
import ItemListContainer from "../components/ItemListContainer";
import Footer from "../components/Footer";

const Home = () => (
  <div>
    <NavBar />
    <CarouselBanner />
    <br />
    <ItemListContainer text="Listado de Productos" />
    <Footer />
  </div>
);

export default Home;
