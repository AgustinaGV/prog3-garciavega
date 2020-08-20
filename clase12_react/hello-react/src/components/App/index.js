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
    console.log('Se ejecutó el constructor');
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
    const sectorsArray = [ ...sectorsUnrepeated];

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
    this.handleEmployeeOTM = this.handleEmployeeOTM.bind(this); //Linea mounstrosa
    this.handleEmployeeModify = this.handleEmployeeModify.bind(this); //Linea mounstrosa
    this.handleAddEmployee = this.handleAddEmployee.bind(this); //Linea mounstrosa
    this.handleDeleteEmployee = this.handleDeleteEmployee.bind(this);
    this.handleEditEmployee = this.handleEditEmployee.bind(this);
    this.handleModal = this.handleModal.bind(this); //Linea monstruosa
    
    
  }

  // funcion empleado del mes;
  handleEmployeeOTM(employeeId) {
    //¿hay empleado del mes? lo seteo;
    this.setState({
      empleadoDelMes: employeeId
    })
    setTimeout(() => {
      console.log('state', this.state.empleadoDelMes)
    }, 1);
  }

  // funcion input para agregar empleado. Va guardando cada una de las letras nuevas que voy poniendo y modificando el estado;
  handleEmployeeModify = event => {
    const { value } = event.target
    this.setState({ employeeName: value })
  }

  // funcion para agregar nuevo empleado al array de empleados;
  handleAddEmployee = event => {
    event.preventDefault();
    const { employees, employeeName } = this.state // Lee el estado

    const newEmployee = {
      name: employeeName,
      sector: faker.name.jobArea(), // Creo el nuevo empleado al que yo le asigno nombre, el resto de las cosas las traigo de faker;
      avatar: faker.image.avatar(),
      id: faker.random.uuid()
    }

    const newList = [newEmployee, ...employees] // Linea importante!
    this.setState({ 
      employees: newList,
      listBackup: newList
    })
  }

  // funcion delete employee;
  handleDeleteEmployee = (id) => {
    // creo un objeto con la lista de empleados actual (actual state);
    const { employees } = this.state
    // creo una nueva lista con todos los empleados menos el que voy a borrar, identificado por su id;
    const listWithoutEmployee = employees.filter(employee => employee.id !== id)
    // le pido al state que actualice, y pase la lista de employees borrando el seleccionado;
    this.setState({ 
      employees: listWithoutEmployee,
      listBackup: listWithoutEmployee
    })
  }

  // funcion para modificar empleado;
  // busca por id al empleado a editar, lo busca en la lista de empleados, guarda los datos del empleado a editar en un nuevo objeto y lo setea al estado;
  handleEditEmployee = id => {
    console.log(typeof id)
    this.handleModal();
    const {employees} = this.state;
    console.log(employees)
    const selectedEmployee = employees.find(employee => employee.id === id)
    console.log(selectedEmployee )
    this.setState({
      employeeToEdit: selectedEmployee,
      employeeToEditName: selectedEmployee.name
    })
  }
  
  // hace destructuring del estado y saca el employeeToEdit de handleEditEmployee, y hace un destructuring de la lista entera de empleados. Con eso hace una nueva lista de empleados SIN el empleado que iba a editar. Y setea el estado con el array que empieza con el empleado EDITADO y atrás pone los demas empleados;
  handleEmployeeEdit = (event) => {
    event.preventDefault();
    this.handleModal();
    const { employeeToEdit, employees } = this.state
    const listWithoutEmployee = employees.filter (employee => employee.id !== employeeToEdit.id)
    this.setState({
      employees: [employeeToEdit, ...listWithoutEmployee],
      listBackup: [employeeToEdit, ...listWithoutEmployee]
    })

  }

  // funcion para cambiar nombre de empleado;
  handleEditEmployeeName = (event) => {
    const { value } = event.target
    this.setState(prevState => ( 
      {
        employeeToEditName: value,
        employeeToEdit: { ...prevState.employeeToEdit, name: value}
      })
    )
  }

  // funcion form options sectores;
  handleSelectSector = sector => {
    this.handleModal();
    const { listBackup } = this.state

    const listFilteredBySector = listBackup.filter(employee => employee.sector === sector)

    this.setState ({
      selectedSector: sector,
      employees: listFilteredBySector
    })
  }

  // funcion vuelvo a ver lista de empleados sin filtro;
  handleRemoveSelectedSector = () => {
    this.setState (prevState => ({ 
      employees: prevState.listBackup,
      selectedSector: ''
    }))
  }

  // funcion que muestra o esconde el modal que permite editar/agregar empleados. Funciona con un if que chequea si la visibilidad es distinta a hiddel (osea, visible), cierra con el click en el boton. Si la visibilidad es hidden (es decir, cuando se necesite mostrar el modal), modifica el valor;
  handleModal = () => {

    const modal = document.getElementById('modal');

    if (modal.style.visibility !== 'visible') {
      modal.style.visibility = "visible";
      console.log("muestra modal");
    } else {
      modal.style.visibility = "hidden";
      console.log("esconde modal");
    }

  }

  // CICLOS. Se ejecuta segundo;
  // Se ejecuta al inicio y cada vez que cambiael state;
  render() {
    console.log('Se ejecutó el Render');

    const {
      newEmployee,
      employees,
      empledaoDelMes,
      sectors,
      selectedSector,
      employeeToEdit
    } = this.state


    return (
      <div className="App">
        <Header />
        <Dropdown
         sectors={sectors}
         selectedSector={selectedSector}
         onSelectSector={this.handleSelectSector}
         onRemoveSelectedSector={this.handleRemoveSelectedSector}
         optionState={this.state.optionState}>
        </Dropdown>
        <Listado 
          //para las cards de empleados;
          employeeData={this.state.employees}
          //key={employee.id}
          handleEmployeeOTM={this.handleEmployeeOTM}
          empleadoDelMesID={this.state.empleadoDelMes}
          handleDeleteEmployee={this.handleDeleteEmployee}
          handleEditEmployee={this.handleEditEmployee}
          //para el form;
          employeeName={this.state.employeeName}
          handleEmployeeModify={this.handleEmployeeModify}
          handleAddEmployee={this.handleAddEmployee}
          //para el modal;
          handleModal={this.handleModal}
          sectors={sectors}
          selectedSector={selectedSector}
          onSelectSector={this.handleSelectSector}
          onSelectedSector={this.handleSelectSector}
          onRemoveSelectedSector={this.handleRemoveSelectedSector}
          optionState={this.state.optionState}
        />
        <Footer texto="Footer"/>
      </div>
    )
  }
}

const Dropdown = props => {
  const {
    sectors,
    selectedSector,
    onSelectSector,
    onRemoveSelectedSector,
    optionState
  } = props;
  return (
    <div className='App-Dropdown'>
      <h2>Elegir sector</h2>
      <div className='filter'>
        <select name='sectors' onChange={event => onSelectSector(event.target.value)}>
          <option selected={optionState} disabled>Elegí un sector</option>
          {
            sectors.map((sector) =>
              <option
                key={sector}
                value={sector}
              >
                {sector}

              </option>
            )
          }
        </select>

        {
          selectedSector && (
            <button
              className='button'
              aria-haspopup='true'
              aria-controls='dropdown-menu'
              onClick={onRemoveSelectedSector}
              style={{ marginLeft: '15px' }}
            >
              <span>{selectedSector}</span>
              <span className='icon is-small'>
                <i className='fas fa-trash-alt' aria-hidden='true' />
              </span>
            </button>
          )
        }
      </div>
    </div>
  )
}


export default App;
