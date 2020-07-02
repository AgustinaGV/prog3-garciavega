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
      empleadoDelMes: null,
      employeeName: ''
    }
    this.handleEmpleadoMes = this.handleEmpleadoMes.bind(this) //Linea mounstrosa
    this.handleEmployeeChange = this.handleEmployeeChange.bind(this) //Linea mounstrosa
    this.handleAddEmployeeSubmit = this.handleAddEmployeeSubmit.bind(this) //Linea mounstrosa
  }

  // funcion input para agregar empleado;
  handleEmployeeChange = event => {
    const { value } = event.target
    this.setState({ employeeName: value })
  }

  // funcion para agregar nuevo empleado al array de empleados;
  handleAddEmployeeSubmit = event => {
    console.log(event);
    event.preventDefault();
    const { employees, employeeName } = this.state

    const newEmployee = {
      name: employeeName,
      sector: faker.name.jobArea(),
      avatar: faker.image.avatar(),
      id: faker.random.uuid()
    }

    const newList = [newEmployee, ...employees]
    this.setState({ 
      employees: newList 
    })
  }

  // function empleado del mes;
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
        <Main 
          employeeData={this.state.employees}
          handleEmpleadoMes={this.handleEmpleadoMes} 
          handleEmployeeChange={this.handleEmployeeChange}
          handleAddEmployeeSubmit={this.handleAddEmployeeSubmit}
          employeeName={this.state.employeeName}
        />
        <Footer texto="Footer" fecha={this.state.date} />
      </div>
    )
  }
}


export default App;
