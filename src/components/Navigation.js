import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <div className="navigation">
        <ul>
          {/* pour injecter une class dans scss,on ajoute une className,et on lui dit que qd elle est active il m'injecte la class nav-active */}
            <NavLink to="/" className = {(nav) => (nav.isActive  ? "nav-active" : "")}>
                <li>Accueil</li>
            </NavLink>
            
            <NavLink to="/about" className = {(nav) => (nav.isActive  ? "nav-active" : "")}>
                <li>À propos</li>
            </NavLink>
        </ul>
      </div>
    );
};

export default Navigation;