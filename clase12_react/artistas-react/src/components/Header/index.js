import React, { useEffect, useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import axios from 'axios'

const Header = (props) => {

    const sayHi = 'Holis';
    const name = 'Agustina';

    const [categories, setCategories] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            // try catch: cumpli con la promesa de axios, si responde setea la data, si por X motivo falla tira el error;
           try {
               const response = await axios.get('https://artists-api.vercel.app/artists');
               const data = response.data;
               // busco solamente el que tiene el id igual, el parametro ID es el que me llega a mi por URL.
               const cats = data.map(category => category.genre);
               const catsUnrepeated = new Set(cats);
                const catsArray = [...catsUnrepeated];
               setCategories(catsArray);
           } catch (error) {
                console.log (error)
           }
        }
        fetchData()
    }, [])

    const handleCategorySelect = (event) => {
        console.log(event.target.value)
        props.history.push(`/category/${event.target.value}`)

    }

    return (
        
        <header className="App-header">
            <div>{`${sayHi} ${name}!`} </div>
            <div>
                <Link to="/">Home</Link>
                <select name="" id=""
                onChange={handleCategorySelect}
                >
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                    
                </select>
            </div>
        </header>

    )

}

export default withRouter(Header)