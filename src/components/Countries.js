import React, { useEffect ,useState} from 'react';
import axios from "axios";
import Cards from "../components/Cards"

const Countries = () => {
    //apres avoir récuperer les données ,on se les stocke
    const[data, setData] = useState([])
    // axios = fetch pour appeler les données
//useEffect se joue qd le composent est monté
//les [] s' appellent un callback
//qd on veut jouer un composent ,on fait un useEffect
    useEffect(() => {}, [])
        axios.get("https://restcountries.com/v3.1/all?fields=name,flags").then((res) => setData(res.data))
//le then nous dit si resultat et bien affiche le moi
    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul>
                {/* pour récuperer nos données et les afficher en react */}
                {/* {
                    data.map((country) => <li>{country.name.common}</li>)
                    
                    on remplace le li par Cards voir ci dessous
                } */}

                {data.map((country,index) =>(
                    // 
                    <Cards />
                ))}

            </ul>
        </div>
    );
};

export default Countries;