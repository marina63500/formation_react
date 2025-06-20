
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from './pages/Blog';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/blog" element={<Blog />}/>
    {/* path = "*" fonctionne qd l'url ne correspond à rien de déclarer au dessus,il fait comme une redirection */}
      <Route path="*" element={<Home />}/>
    </Routes>
  
  </BrowserRouter>
 
  );
};

export default App;


// un component est une fonction que l'on peut importer n'importe ou dans le projet(avec les plugins plus besoin de faire les fonctions)
// const App = () => {
//   return (
// <h1>Hello React</h1>
//)
  
// };

// export default App;


