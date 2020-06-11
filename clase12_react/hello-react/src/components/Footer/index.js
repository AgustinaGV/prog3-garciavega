import React from 'react'
import '../Footer/index.css'
import Fecha from '../Fecha'

const Footer = ({ texto, fecha }) => {

    return (
        <footer className="App-footer">
            <h2>{ texto }</h2>
            < Fecha fecha={fecha} />
        </footer>
    )
}

export default Footer;