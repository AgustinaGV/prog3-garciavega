import React from 'react'
import '../Card/index.css'
import bob from './bob.jpeg'

const Card = () => {

    return (
        <div className="App-card">
            <div className="App-cardDiv">
                <img src={bob} alt="Bob" className="App-avatar" />
            </div>
            <div className="App-cardDiv">
                <h1 className="App-itemName">
                    hola
                </h1>
                <h2 className="App-itemCategory">
                    chau
                </h2>
            </div>
            <div className="App-cardDiv App-cardButtons">
                <button>Editar</button>
                <button>Eliminar</button>
                <button>Empleadx del mes</button>
            </div>
        </div>
    )
}

export default Card;