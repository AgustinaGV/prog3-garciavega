import React from 'react'
import '../Listado/index.css'
import Card from '../Card'
import BtnEmpleadoDelMes from '../BtnEmpleadoDelMes'

const Listado = props => {

    const {
        employeeData,
        handleEmployeeOTM,
        handleAddEmployee,
        handleEmployeeModify,
        employeeName
    } = props

    console.log(employeeData);
    return (
        <div>
            <section>
                
                <h1 id="App-listTitle">Lista de Empleados</h1>

                <form id="App-searcher" onSubmit={handleAddEmployee}>
                    <input type="text" onChange={handleEmployeeModify} value={employeeName}></input>
                    <button type="submit">Agregar empleado</button>
                </form>

                <select id="App-sectionFilter">
                    <option disabled="disabled">Elegir sección</option>
                    <option value=""></option>
                </select>

            </section>

            <section id="App-list"> 
            {
                employeeData.map((employee) => 
                    <Card 
                        employeeData={employee} 
                        key={employee.id} 
                        handleEmployeeOTM={handleEmployeeOTM}
                    />
                )
            }
            </section>
        </div>
    )
}

export default Listado;