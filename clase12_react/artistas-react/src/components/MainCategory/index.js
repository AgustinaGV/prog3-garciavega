import React, {useState, useEffect} from 'react'
import Card from '../Card'
import axios from 'axios'

const MainCategory = ({catId}) => {

    console.log("estoy en una categoria")

   const [artists, setArtist] = useState([])
   useEffect(() => {

    const fetchData = async () => {
       try {
           const response = await axios.get('https://artists-api.vercel.app/artists');
           const data = response.data;
           
           const dataFiltered = data.filter(artist => artist.genre === catId)
           setArtist(dataFiltered);
       } catch (error) {
            console.log (error)
       }
    }

    fetchData();
   }, [catId]) // este es el useEffect. Vacío solo se ejecuta una vez cuando se monta el componente. Pero este array permite ejecutar el useEffect cuando queramos dependiendo de una variable. Si depende de un parametro (como catId), se ejecuta de nuevo sólo cuando se modifica el parametro, es decir cuando cambio el option;
    
    return (
        <div className="App-main">
            <h1>Artistas de {catId}</h1>
            {artists.map(artist => <Card key={artist._id} data={artist} />)}
        </div>
    )
}

export default MainCategory