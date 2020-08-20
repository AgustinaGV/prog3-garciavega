import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {

    const sayHi = 'Holis';
    const name = 'Agustina';

    return (
        
        <header className="App-header">
            <div>{`${sayHi} ${name}!`} </div>
            <div>
                <Link to="/">Home</Link>
            </div>
        </header>

    )

}

export default Header