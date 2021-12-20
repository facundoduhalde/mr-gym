import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <React.Fragment className="App">
      <NavBar />
      <ItemListContainer text="Listado de Productos"></ItemListContainer>
      <ItemDetailContainer />
    </React.Fragment>
  );
}

export default App;
