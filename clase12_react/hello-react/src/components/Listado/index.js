import React from 'react'
import '../Listado/index.css'
import Boton from '../Boton'
import Card from '../Card'
import BtnEmpleadoDelMes from '../BtnEmpleadoDelMes'

const Listado = props => {

    const {
        employeeData,
        handleEmpleadoMes,
        handleAddEmployeeSubmit,
        handleEmployeeChange,
        employeeName
    } = props

    console.log(employeeData);
    return (
        <div>
            <section>
                
                <h1 id="App-listTitle">Lista de Empleados</h1>

                <form id="App-searcher" onSubmit={handleAddEmployeeSubmit}>
                    <input type="text" onChange={handleEmployeeChange} value={employeeName}></input>
                    <button type="submit">Agregar empleado</button>
                </form>

                <select id="App-categoryFilter">
                    <option disabled="disabled">Elegir categoría</option>
                    <option value=""></option>
                </select>

            </section>

            <section id="App-list"> 
            {
                employeeData.map((employee) => 
                    <Card 
                        employeeData={employee} 
                        key={employee.id} 
                        handleEmpleadoMes={handleEmpleadoMes}
                    />
                )
            }
            </section>
        </div>
    )
}

export default Listado;