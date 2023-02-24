
//fonction qui permet de sélectionner un match parmi la liste

function selectTheGame () {

const gameCardSelector = document.querySelectorAll('.gameCardButton');


//on lance une boucle permettant de faire apparaître la section 'third-section' en cliquant sur un des match de la liste
for (const game of gameCardSelector) {

    game.addEventListener('click', ()=> {
        thirdSectionSelector.classList.remove('off');

    //on lance la requête nous permettant de récupérer les stats d'un match

        //on efface les anciennes données
    const oldGameElements = document.querySelector('.bodyGameTable');
    oldGameElements.remove();


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };
        
        fetch('https://api-nba-v1.p.rapidapi.com/players/statistics?game=11935', options)
            .then( function (data) {return data.json()})
            .then (handleOneGame);



        
    });
    
};

}


function handleOneGame (json) {

    console.log(json.response);

    //==TABLE HOME

    //on sélectionne la table home
    const tableGameSelector = document.querySelector('.gameTable');
    //on sélectionne l'en-tête de la table home
    const headGameTableSelector = document.querySelector('.headGameTable');

    //on crée un body
    const newBodyGameTable = document.createElement('tbody');
    newBodyGameTable.classList.add('bodyGameTable');

    const bodyGameTableSelector = document.querySelector('.bodyGameTable');

    //on affiche le body dans la table home et aprés l'en-tête
    tableGameSelector.append(newBodyGameTable);
    headGameTableSelector.after(newBodyGameTable);


        //on lance la boucle de création des éléments pour chaque joueur
        for ( const playerData of json.response) {

            //on crée l'élément gameElements
            const newGameElements=document.createElement("tr");
            newGameElements.classList.add("gameElements");

            //on crée les éléments th pour chaque donnée
            const newPlayerName = document.createElement("th");
            newPlayerName.classList.add("playerName");

            const newPlayerPoints = document.createElement("th");
            newPlayerPoints.classList.add("playerPoints");

            const newPlayerRbd = document.createElement("th");
            newPlayerRbd.classList.add("playerRbd");

            const newPlayerAst = document.createElement("th");
            newPlayerAst.classList.add("playerAst");

            //on affecte les données à chaque élément créé

            newPlayerName.textContent = playerData.player.firstname+" "+playerData.player.lastname;
            newPlayerPoints.textContent = playerData.points;
            newPlayerRbd.textContent = playerData.totReb;
            newPlayerAst.textContent= playerData.assists;

            //on organise les éléments dans le tableau
            bodyGameTableSelector.append(newGameElements);
            newGameElements.append(newPlayerName);
            newGameElements.append(newPlayerPoints);
            newGameElements.append(newPlayerRbd);
            newGameElements.append(newPlayerAst);

        }

};