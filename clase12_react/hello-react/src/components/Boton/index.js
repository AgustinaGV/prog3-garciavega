import React from 'react'
import '../Boton/index.css'

const Boton = props => {
    const { caption } = props;
    const handleClick = (event) => console.log('Hiciste click');

    return (
        <button className="App-button" 
        onClick = {handleClick}
        >
            {caption || 'Click'}
        </button>
    )
}

export default Boton;