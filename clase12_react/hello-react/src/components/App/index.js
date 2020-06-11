import React from 'react';
import '../App/index.css';
import Header from '../Header'
import Wrapper from '../Wrapper'
import Footer from '../Footer'

function App() {
  //funciones propias
  //variables
  //lo que quiera
  return (
    <div className="App">
      <Header />
      <Wrapper />
      <Footer texto="Este es mi footer horrible" fecha ="11/06/2020"/>
    </div>
  );
}

export default App;
