import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Layout = ({children}) => {

    return (
        <div className="App">
            <Header />
                {children} {/*layout es el componente "padre" que engloba a header, footer, y en el medio de estos a los hijos. Entonces sirve para siempre tener una misma estructura de documento, a la que se le pueden agregar elementos en el medio*/}
            <Footer />
        </div>

    )
}

export default Layout