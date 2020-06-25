import React from 'react';
import '../App/index.css';
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import faker from 'faker'

class App extends React.Component {
  // CICLOS. Es lo primero que se va a ejecutar;
  constructor(props) {
    console.log('Se ejecutó el Constructor');
    super(props)
    //data segun localizacion;
    //faker.locale="vi";

    const employees = Array.from({ length: 30 }, () => ({
      name: faker.name.findName(),
      sector: faker.name.jobArea(),
      avatar: faker.image.avatar(),
      id: faker.random.uuid(),
    }))

    // acá inicializamos state;
    this.state = {
      date: new Date(),
      employees: employees,
      listBackup: employees,
      empleadoDelMes: null
    }
    this.handleEmpleadoMes = this.handleEmpleadoMes.bind(this) //Linea mounstrosa
  }

  handleEmpleadoMes(employeeId) {
    // setear el estado diciendo cual es el id del empleado del mes;
    this.setState({
      empleadoDelMes: employeeId
    });
    setTimeout (() => {
      console.log('Empleadx del mes: ', this.state.empleadoDelMes);
    }, 1);
  }

  // CICLOS. Se ejecuta tercero;
  componentDidMount() {
    console.log('Se ejecutó el ComponentDidMount');
    // acá se hace fetch de data;
  }

  // CICLOS. Se ejecuta segundo;
  // Se ejecuta al inicio y cada vez que cambiael state;
  render() {
    console.log('Se ejecutó el Render');
    // acá mostramos data en HTML;
    return (
      <div className="App">
        <Header />
        <Main employeeData={this.state.employees} handleEmpleadoMes={this.handleEmpleadoMes} />
        <Footer texto="Footer" fecha={this.state.date} />
      </div>
    )
  }
}


export default App;
