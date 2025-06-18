import React from 'react';

const Card = ({ country }) => {
   
    
    return (
                
            <li className="card">
                <img src={country.flags.svg} alt={"drapeau " + country.name.common} />
                {/* //infos des pays */}
            <div className="infos">
                {/* <h2>Nom du pays</h2> */}
                {/* on remplace le h2 par ci dessous pour afficher le nom du pays en dynamique */}
                <h2>{country.name.common}</h2>
                {/* <h4>{country.capital}</h4> */}
                {/* pour pouvoir mettre en milliers la population toLocaleString */}
                {/* <p>Pop. {country.population.toLocaleString()}</p> */}
            </div>
            </li>
        
    );
};

export default Card;