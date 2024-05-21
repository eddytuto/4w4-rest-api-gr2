(function () {
    // URL de l'API REST de WordPress
    console.log("Rest API");
/*
    let bouton_categorie = document.querySelectorAll('.bouton_categorie')
    for (const elm of bouton_categorie){
      elm.addEventListener('mousedown', function(e){

      })
    }
*/

    let categories = 3;
    let url = `https://gftnth00.mywhc.ca/tim50/wp-json/wp/v2/posts?categories=${categories}`;

    fetch(url)
      .then(function (response) {
        // Vérifier si la réponse est OK (statut HTTP 200)
        if (!response.ok) {
          throw new Error(
            "La requête a échoué avec le statut " + response.status
          );
        }
  
        // Analyser la réponse JSON
        return response.json();
        console.log(response.json());
      })
      .then(function (data) {
        // La variable "data" contient la réponse JSON
        console.log(data);
  
        // Maintenant, vous pouvez traiter les données comme vous le souhaitez
        // Par exemple, extraire les titres des articles comme dans l'exemple précédent
        let restapi = document.querySelector(".contenu__restapi");
        restapi.innerHTML = "";
        console.log(restapi.innerHTML);
       // console.log(data.meta)
        data.forEach(function (article) {
          let titre = article.title.rendered;
          if (article.meta && article.meta.ville_avoisinate) {
            // Afficher la valeur du champ personnalisé "ville"
            console.log('Ville :', article.meta.ville_avoisinante);
          }
          else{
            // console.log(meta)
          }
          let contenu = article.excerpt.rendered;
          contenu = contenu.substr(0,75) + " ...";
          console.log(titre);
          let carte = document.createElement("div");
          carte.classList.add("restapi__carte");
          carte.innerHTML = `<h4>${titre}</h4><p>${contenu}</p>`;
          carte.innerHTML = carte.innerHTML.replace(/<p><\/p>/g, "");
          restapi.appendChild(carte);
        });
      })
      .catch(function (error) {
        // Gérer les erreurs
        console.error("Erreur lors de la récupération des données :", error);
      });
  })();



        