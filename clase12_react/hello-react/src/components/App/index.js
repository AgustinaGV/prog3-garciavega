// importo los componentes para poder usarlos en este js;
import React from 'react';
import '../App/index.css';
import Header from '../Header'
import Listado from '../Listado'
import Footer from '../Footer'
import faker from 'faker'

class App extends React.Component {
  // CICLOS. Es lo primero que se va a ejecutar;
  constructor(props) {
    console.log('Se ejecutó el Constructor');
    super(props)
    //data segun localizacion;
    //faker.locale="vi";

    // traigo y genero lista de empleados desde faker;
    const employees = Array.from({ length: 30 }, () => ({
      name: faker.name.findName(),
      sector: faker.name.jobArea(),
      avatar: faker.image.avatar(),
      id: faker.random.uuid(),
    }))

    // genero los sectores de trabajo;
    // recorro employees, separando solamente el sector de cada uno
    const sectors = employees.map(({ sector }) => sector);
    // Set almacena valores unicos, es decir no repite los sectores en este caso. La sintaxis es new Set (elemento iterable), para que pueda recorrerlo y depurarlo. Entonces al array sectorsUnrepeated le asigno todos los valores que traje en sectors, pero sin repetir valores con este metodo;
    const sectorsUnrepeated = new Set(sectors);
    // copio en mi nuevo array todos los elementos de sectorsUnrepeated, uno a uno;
    const sectorsArray = [ ... sectorsUnrepeated];

    // inicializo state;
    this.state = {
      employees: employees,
      listBackup : employees,
      empleadoDelMes: null,
      employeeName: '',
      sectors: sectorsArray,
      selectedSector: '',
      employeeToEdit: {}
    }
    this.handleEmployeeOTM = this.handleEmployeeOTM.bind(this) //Linea mounstrosa
    this.handleEmployeeModify = this.handleEmployeeModify.bind(this) //Linea mounstrosa
    this.handleAddEmployee = this.handleAddEmployee.bind(this) //Linea mounstrosa
  
  }

  // funcion empleado del mes;
  handleEmployeeOTM(employeeId) {
    //¿hay empleado del mes? lo seteo;
    this.setState({
      empledaoDelMes: employeeId
    })
    setTimeout(() => {
      console.log('state', this.state.empleadoDelMes)
    }, 1);
  }

  // funcion input para agregar empleado;
  handleEmployeeModify = event => {
    const { value } = event.target
    this.setState({ employeeName: value })
  }

  // funcion para agregar nuevo empleado al array de empleados;
  handleAddEmployee = event => {
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

  // delete employee;
  handleDeleteEmployee = (id) => {
    // creo un objeto con la lista de empleados actual (actual state);
    const { employees } = this.state
    // creo una nueva lista con todos los empleados menos el que voy a borrar, identificado por su id;
    const listWithoutEmployee = employees.filter(employee => employee.id !== id)
    // le pido al state que actualice, y pase la lista de employees borrando el seleccionado;
    this.setState({ employees: listWithoutEmployee})
  }

  // form options secciones;
  handleSelectChange = event => {
    console.log(event.target.value)
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
    return (
      <div className="App">
        <Header />
        <Listado 
          employeeData={this.state.employees}
          handleEmployeeOTM={this.handleEmployeeOTM} 
          handleEmployeeModify={this.handleEmployeeModify}
          handleAddEmployee={this.handleAddEmployee}
          employeeName={this.state.employeeName}
        />
        <Footer texto="Footer"/>
      </div>
    )
  }
}


export default App;
