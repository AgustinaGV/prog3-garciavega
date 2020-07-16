import React from 'react'
import '../Footer/index.css'

const Footer = ({ texto}) => {

    return (
        <footer className="App-footer">
            <h2>{ texto }</h2>
        </footer>
    )
}

export default Footer;