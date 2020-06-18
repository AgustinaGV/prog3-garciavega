import React from 'react'
import '../Listado/index.css'
import Boton from '../Boton'
import Card from '../Card'

const Listado = () => {

    return (
        <div>
            <section>
                <h1>Lista de Empleados</h1>
                <div>
                    <input type="text"></input>
                    <Boton caption="Agregar empleado"/>
                </div>
                <select>
                    <option disabled="disabled">Elegir categoría</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </section>
            <section>
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    )
}

export default Listado;