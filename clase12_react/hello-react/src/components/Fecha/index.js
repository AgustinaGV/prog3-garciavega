import React from 'react'
import 'dayjs/locale/es' //load date

const Fecha = ( { props } ) => {
    const diaDeHoy = Date()
    return (
        <p>{diaDeHoy}</p>
    )
}

export default Fecha;