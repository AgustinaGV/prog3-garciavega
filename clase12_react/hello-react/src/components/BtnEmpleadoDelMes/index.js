import React from 'react'

const BtnEmpleadoDelMes = props => {

    const {
        employeeId,
        handleEmployeeOTM
    } = props


    return(
        <button 
            onClick={()=>handleEmployeeOTM(employeeId)}
        >
            Empleade del mes
        </button>
    )
}

export default BtnEmpleadoDelMes