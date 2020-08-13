import React, {useState, useEffect} from 'react'
import Card from '../Card'
import axios from 'axios'

const Main = () => {

    //traigo el hook 'useState', variable que toma los valores del useState, funcion que setea la variable;
    /*const [contador, setContador] = useState(0)
     ES LO MISMO QUE:
    this.state = {contador, setContador}
    this.setState ({contador:1})
    */
   const [artists, setArtists] = useState([])

   useEffect(() => {

    const fetchData = async () => {

        // try catch: cumpli con la promesa de axios, si responde setea la data, si por X motivo falla tira el error;
       try {
           const response = await axios.get('https://artists-api.vercel.app/artists');
           console.log(response.data);
           const data = response.data;
           setArtists(data);

       } catch (error) {

            console.log (error)
       }
    }

    fetchData();
    console.log('Se ejecutó mi effect')
       

   }, /*cuándo se ejecuta la funcion. Si queda vacío sólo lo hace una vez*/[])
    
    return (
        
        <div className="App-main">

            <h1>Listado de artistas</h1>

            {artists.map(artists => <Card ket={artists._id} data={artists}/>)}

            
        </div>

    )
}

export default Main