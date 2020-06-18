import React from 'react';
import '../App/index.css';
import Header from '../Header'
import Wrapper from '../Wrapper'
import Footer from '../Footer'
import Boton from '../Boton'
import Listado from '../Listado'
import Card from '../Card'


/*function App() {
  //funciones propias
  //variables
  //lo que quiera
  return (
    <div className="App">
      <Header />
      <Wrapper />
      <Footer texto="Footer" fecha ="11/06/2020"/>
    </div>
  );
}*/


class App extends React.Component {
  // CICLOS. Es lo primero que se va a ejecutar;
  constructor(props) {
    console.log('Se ejecutó el Constructor');
    super(props)
    // acá inicializamos state;
    this.state = {
      date: new Date(),
      nameAlumno: ""
    };
  }


  // CICLOS. Se ejecuta tercero;
  componentDidMount() {
    console.log('Se ejecutó el ComponentDidMount');
    // acá se hace fetch de data;
    this.setState({ nameAlumno: "Robert" })
  }


  // CICLOS. Se ejecuta segundo;
  // Se ejecuta al inicio y cada vez que cambiael state;
  render() {
    console.log('Se ejecutó el Render');
    console.log('ola');
    // acá mostramos data en HTML;
    return (
      <div className="App">
        <Header />
        <Wrapper />
        <Footer texto="Footer" fecha={this.state.date} />
      </div>
    )
  }
}


export default App;
