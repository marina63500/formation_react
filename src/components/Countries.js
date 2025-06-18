import React, { useEffect ,useState} from 'react';
import axios from "axios";
import Card from "../components/Card"

const Countries = () => {
    //apres avoir récuperer les données ,on se les stocke
    const[data, setData] = useState([])
    // comme il ne connait pas rangeValue ,on se fait une variable
    // et on lui met un multiple de 12 plus facile pour l'affichage
    const[rangeValue, setRangeValue] = useState(36)
// pour ajouter les noms de continent dans barr de tri
    const radios = ["Africa", "America", "Asia", "Europa" , "Oceania"]

    // pour se stocker le bouton radio selectionner
    const [selectedRadio, setSelectedValue] = useState("")
    // axios = fetch pour appeler les données
//useEffect se joue qd le composent est monté
//les [] s' appellent un callback
//qd on veut jouer un composent ,on fait un useEffect
    useEffect(() => {}, [])
        axios
        .get("https://restcountries.com/v3.1/all?fields=name,flags")
        // .get("https://restcountries.com/v3.1/all")
        

        .then((res) => setData(res.data))
//le then nous dit si resultat et bien affiche le moi
    return (
        <div className='countries'>
            {/* <h1>Countries</h1> */}
            {/* on enleve le h1 que l'on remplace  par un ul pour faire la barre  de tri*/}
            {/* pour trier les choses */}
            <ul className="radio-container">
                <input 
                type="range" 
                min="1"  
                max="250" 
                defaultValue={rangeValue}  
                // pour recuperer la valeur de l'input
                // maintenant que l'on a la valeur ,on remplace console.log par setRangeValue
                //  onChange={(e) => console.log(e.target.value)}
                onChange ={(e) => setRangeValue(e.target.value)}
                
                 />
                 {/* pour afficher tous les continents */}
                   {radios.map((continent) => (
                <li>
                    <input 
                    type="radio" 
                    id={continent} 
                    name="continentRadio" 
                    // pour enlever la sélection du radio si on appuie sur annuler recherche
                    checked = {continent === selectedRadio}
                    onChange={(e) => setSelectedValue(e.target.id)}/>

                    <label htmlFor ={continent}>{continent}</label>
                </li>
            ))}
            </ul>
            {/* cela veut dire ;est ce que qqun a clique sur un continent */}
            {selectedRadio && <button onClick={() => setSelectedValue("")}>Annuler la recherche</button>}
            {/* qd selection  continent cliquer le bouton annuler recherche apparait  */}
            <ul>
                {/* pour récuperer nos données et les afficher en react */}
                {/* {
                    data.map((country) => <li>{country.name.common}</li>)
                    
                    on remplace le li par Cards voir ci dessous
                } */}
                {data
                // pour filtrer par continent cocher en radio (moi je n 'ai pas de continents avec mon api)
                // .filter((country) => country.continents[0].includes(selectedRadio))

                // pour trier du plus au moins peuplési j'avais la population avec mon api
                    .sort((a,b) => b.population -a.population)

                /* pour limiter ,on utilise la méthode slice */
                // debut 0 et jusqu'a 5 élément du tableau : .slice(0,5)
               .slice(0, rangeValue)
                .map((country,index) =>(
                    // le map parcours le tableau
                    // card est le composent enfant de countries
                    // pour passer les données de parent a enfant on fait une props
                    <Card  key= {index} country= {country}/>
                ))}

            </ul>
        </div>
    );
};

export default Countries;