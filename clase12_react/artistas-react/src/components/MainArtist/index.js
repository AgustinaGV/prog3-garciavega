import React, {useState, useEffect} from 'react'
import Card from '../Card'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const MainArtist = () => {

    //traigo el hook 'useState', variable que toma los valores del useState, funcion que setea la variable;
    /*const [contador, setContador] = useState(0)
     ES LO MISMO QUE:
    this.state = {contador, setContador}
    this.setState ({contador:1})
    */

   const [artist, setArtist] = useState([])
    // acá traigo el id de <Link>;
   const { id } = useParams();

   useEffect(() => {

    const fetchData = async () => {
        // try catch: cumpli con la promesa de axios, si responde setea la data, si por X motivo falla tira el error;
       try {
           const response = await axios.get('https://artists-api.vercel.app/artists');
           const data = response.data;
           // busco solamente el que tiene el id igual, el parametro ID es el que me llega a mi por URL.
           const artistFiltered = data.find(artist => artist._id === id);
           setArtist(artistFiltered);
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
            <h2>{artist.name}</h2>
            <img src={artist.avatar} alt={artist.name}/>
            <p>{artist.genre}</p>
            <Link to="/">Volver</Link>
        </div>
    )
}

export default MainArtist