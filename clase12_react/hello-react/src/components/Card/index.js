import React from 'react'
import '../Card/index.css'
import Boton from '../Boton'
import BtnEmpleadoDelMes from '../BtnEmpleadoDelMes'

const Card = props => {

    const {
        employeeData,
        handleEmpleadoMes
    } = props

    const {name, sector, id, avatar} = employeeData;

    return (
        <div className="App-card">
            <div className="App-cardDiv">
                <img src={employeeData.avatar} alt="img" className="App-avatar" />
            </div>
            <div className="App-cardDiv">
                <h1 className="App-itemName">
                    {employeeData.name}
                </h1>
                <h2 className="App-itemCategory">
                    {employeeData.sector}
                </h2>
            </div>
            <div className="App-cardDiv App-cardButtons">
                {/*<Boton caption="Editar" />
                <Boton caption="Eliminar" /> */}
                <button>Editar</button>
                <button>Eliminar</button>
                <BtnEmpleadoDelMes employeeId={id} handleEmpleadoMes={handleEmpleadoMes}/>
            </div>
        </div>
    )
}

export default Card;