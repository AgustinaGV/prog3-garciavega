import React from 'react'

const Header = () => {

    const sayHi = 'Holis';
    const name = 'Agustina';

    return (
        
        <header className="App-header">
            <div>{`${sayHi} ${name}!`} </div>
            <div>Menu</div>
        </header>

    )

}

export default Header