import React from 'react';


const Article = ({ article }) => {

// pour le edit crud
  const [isEditing, setIsEditing] = useState(false);
  // variable pour le nouveau contenu du textarea p
  const [editContent, setEditContent] = useState("")

    // pour se parametrer la date comme il faut
    const dateFormater = (date) => {
        // pour mettre date en francais
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        return newDate;
    };

    // fonction pour gérer l'édition
    const handleEdit = () =>{
      const data = {
        author: article.author,
        // on fait une ternaire pour savoir si qqun a modifie le content ou pas
        content: editContent ? editContent : article.content,
        date: article.date,
        // on affiche la modif en base de données mais on ne l'as pas afficher sur site
        updatedDate:Date.now()
      }

      axios.put("http://localhost:3004/articles" + article.id, data).then(() =>{
        setIsEditing(false);
      });
      
    };
//fonction pour supprimer les articles
    const handleDelete = () => {
      axios.delete("http://localhost:3004/articles" + article.id);
      // pour remettre a jour la page,la recharger sans l'article supprimer
      window.location.reload();
    }

    return (
      // on ajoute du style conditionel sur le edit
      <div className="article" style={ {background: isEditing ? "#f3feff" : "white"}}>
        <div className="card-header">
               <h3>{article.author}</h3>
               {/* em pour mettre en italique directement */}
               {/* <em>Posté le {article.date}</em> */}
               {/* faire cela apres avoir créer variable pour formater date */}
               <em>Posté le {dateFormater(article.date)}</em>
        </div>
        {isEditing ? (
          <textarea 
          defaultValue={editContent ? editContent : article.content}          
          autofocus
          onChange={(e)=> setEditContent(e.target.value)}
          ></textarea>
        ):( 
        <p>{editContent ? editContent : article.content}</p>
        )}
       
        <div className="btn-container">
          {isEditing ? (<button onClick={() => handleEdit()}>Valider</button>
          ):(
             <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
           
            <button 
            onClick={(){
              if (window.confirm("Voulez-vous vraiment supprimer cet article?")
              ) {
                handleDelete()
              }
            }}
            >Supprimer</button>
        </div>
      </div>
    );
};

export default Article;
