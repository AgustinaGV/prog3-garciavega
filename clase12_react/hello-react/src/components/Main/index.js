import React from 'react'
import '../Main/index.css'
import Listado from '../Listado'

const Main = props => {

    const {
        employeeData,
        handleEmpleadoMes,
        handleEmployeeChange,
        handleAddEmployeeSubmit,
        employeeName
    } = props;

    return (
        <div className="App-main">
            <Listado 
                employeeData = {employeeData} 
                handleEmpleadoMes={handleEmpleadoMes} 
                handleEmployeeChange={handleEmployeeChange} 
                handleAddEmployeeSubmit={handleAddEmployeeSubmit}
                employeeName={employeeName}
            />
        </div>
    )
}

export default Main;