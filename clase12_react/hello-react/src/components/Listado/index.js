import React from 'react'
import '../Listado/index.css'
import Boton from '../Boton'
import Card from '../Card'
import BtnEmpleadoDelMes from '../BtnEmpleadoDelMes'

const Listado = props => {

    const {
        employeeData,
        handleEmpleadoMes
    } = props

    return (
        <div>
            <section>
                <h1 id="App-listTitle">Lista de Empleados</h1>
                <div id="App-searcher">
                    <input type="text"></input>
                    <Boton caption="Agregar empleado" />
                </div>
                <select id="App-categoryFilter">
                    <option disabled="disabled">Elegir categoría</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </section>

            <section id="App-list"> 
            
            {
                employeeData.map((employee) => 
                    <Card employeeData={employee} key={employee.id} handleEmpleadoMes={handleEmpleadoMes}/>
                )
            }
            </section>
        </div>
    )
}

export default Listado;