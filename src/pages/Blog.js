import React , { useEffect, useState} from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Article from '../components/Article';
import axios from 'axios';


const Blog = () => {
    //variable pour stocker les data du blog
    const [blogData, setBlogData] = useState([]);
    // on se crée une variable pour vider les input du form
    const [author, setAuthor] = useState("");
    //const en react,penser a importer le useState
    const [content, setContent] = useState("");
    //on se crée une variable error pour sécurité du form (de base sur false)
    const [error , setError] = useState("false");

    // pour récuperer la db.json    
        const getData = () => {
            axios
            .get("http://localhost:3004/articles")
            .then((res) => setBlogData(res.data));
        };
        useEffect(() => getData(),[]);
    
//on fait une variable pour éviter que la page du form se recharge par default
    const handleSubmit= (e) =>{
        e.preventDefault();
// console.log({ author, content, date: Date.now() });

      //sécurité formulaire pour nb de caracteres
      if(content.length < 140){
        setError(true);
      }  else{
        // pour ajouter un article
        axios
        .post("http://localhost:3004/articles", {
            author,
            content,
            date: Date.now(),
            
        })
        .then(() => {
            setError(false);
        // pour vider les champs apres la soumission de l'article
        setAuthor("");
        setContent("");
        getData();  //son role est actualiser le message en instantanée,recharger les données
      })
    //    .catch((err) => {
    //     console.error("Erreur lors de l'ajout de l'article :", err);
    //     setError(true);
    //   });
    }
};
    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                {/* on se crée une variable pour recupere les input pour vider le form pour auteur */}
                {/* je t'ajoute un evenement onchange */}
                <input 
                type="text" 
                placeholder="Nom" 
                onChange = {(e) => setAuthor(e.target.value)} 
                // pour vider le champ apres soumission
                value={author}/>
                <textarea 
                //mettre une condition sur une bordure
                style={{ border:error ? "1px solid red" : "1px solid #61dafb"}}
                placeholder="Message"
                //on lui ajoute un évenement pour récuperer la valeur de l'input(on recupere dans le state sur console)
                onChange = {(e) => setContent(e.target.value)}
                 // pour vider le champ apres soumission
                 
                 defaultValue={content}
                ></textarea>
                {/* veut dire que des que error passe sur true ,il y a erreur de maniere conditionnel puis on complete le if */}
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
                <input type="submit" value="Envoyer" />
            </form>

            <ul>
                {blogData
                 // trier les messages par ordre du plus recent au plus ancien
                 .sort((a, b) => b.date - a.date)

                .map((article) => {
                   
                   
                    // on se crée un composent article pour éviter de répéter le code
                    // on appelle le composent article
                    <Article  key={article.id}  article={article}/>
                    
                })}
            </ul>

        </div>
    );
};

export default Blog;