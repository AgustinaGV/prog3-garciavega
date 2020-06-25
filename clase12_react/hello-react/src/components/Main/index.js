import React from 'react'
import '../Main/index.css'
import Listado from '../Listado'

const Main = props => {

    const {
        employeeData,
        handleEmpleadoMes
    } = props;

    return (
        <div className="App-main">
            <Listado employeeData = {employeeData} handleEmpleadoMes={handleEmpleadoMes}/>
        </div>
    )
}

export default Main;