import React from 'react'
import '../Footer/index.css'
import Fecha from '../Fecha'
import Boton from '../Boton'

const Footer = ({ texto, fecha }) => {

    return (
        <footer className="App-footer">
            <h2>{ texto }</h2>
            <Boton caption="Suscribite" />
            < Fecha fecha={fecha} />
        </footer>
    )
}

export default Footer;