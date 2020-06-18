import React from 'react'
import '../Wrapper/index.css'
import Boton from '../Boton'

const Wrapper = props => {

    return (
        <div className="App-wrapper">
            <p>
                Esto es un wrapper que funciona
        </p>
        <Boton caption="Ver más" />
        </div>
    )
}

export default Wrapper;