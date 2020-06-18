import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/es' //load date

const Fecha = ( { fecha } ) => {
    const diaDeHoy = dayjs(fecha).locale('es').format('DD/MM/YYYY');
    return (
        <p  className="App-fecha">{diaDeHoy}</p>
    )
}

export default Fecha;