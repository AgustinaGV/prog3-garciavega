import React from 'react'

const BtnEmpleadoDelMes = props => {

    const {
        employeeId,
        handleEmpleadoMes
    } = props


    return(
        <button 
            onClick={()=>handleEmpleadoMes(employeeId)}
        >
            Empleadx del mes
        </button>
    )
}

export default BtnEmpleadoDelMes