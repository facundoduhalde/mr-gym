import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <React.Fragment className="App">
      <NavBar />
      <ItemListContainer text="Listado de Productos"></ItemListContainer>
    </React.Fragment>
  );
}

export default App;
