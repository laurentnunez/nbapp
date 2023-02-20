
//menu burger

const burgerSelector = document.querySelector('.burger');
const navbarSelector = document.querySelector('.navbar');

function handleBurger() {
    burgerSelector.classList.toggle('active');
    navbarSelector.classList.toggle('mobile');
}

burgerSelector.addEventListener('click', handleBurger);


//ici on récupère le classement des équipes

//===================================================================
//QUERY SELECTOR
//===================================================================

//bouton CLASSEMENTS de la navbar
const standingsButton = document.querySelector('.standingsButton');

// MATCHS de la navbar
const gamesButton = document.querySelector('.gamesButton');

//bouton "Conf. Est"
const eastButtonSelector = document.querySelector(".eastButton");

//bouton "Conf. Ouest"
const westButtonSelector = document.querySelector(".westButton");

const cardTeamSelector = document.querySelectorAll(".cardName");

const gamesElementSelector = document.querySelector('.games');

const sectionSelector = document.querySelector('.first-section');

const secondSectionSelector = document.querySelector('.second-section');

const dateWrapperSelector = document.querySelector('.dateWrapper');

const todayButtonSelector = document.querySelector ('.todayButton');
const yesterdayButtonSelector = document.querySelector ('.oneLessButton');
const twoDaysBeforeButtonSelector = document.querySelector ('.twoLessButton');
const threeDaysBeforeButtonSelector = document.querySelector ('.threeLessButton');
const tomorowButtonSelector = document.querySelector('.oneMoreButton');
const twoDaysAfterButtonSelector = document.querySelector('.twoMoreButton');
const threeDaysAfterButtonSelector = document.querySelector('.threeMoreButton');


const standingsTableSelector = document.querySelector('.standingsTable');



//===================================================================
//FONCTIONS
//===================================================================



//fonction d'appel à la requête pour la Conf Est
function handleEastButton () {
    
    //on efface les anciennes données
    deleteElements ();

    eastButtonSelector.classList.remove("no-selected");
    westButtonSelector.classList.remove("no-selected");
    eastButtonSelector.classList.add("selected");
    westButtonSelector.classList.add("no-selected");
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    //on lance la requête
    const standingsRequest = fetch ('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&conference=east', options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la fonction handleJson
    .then( handleJson );
};

//fonction d'appel à la requête pour la Conf Ouest
function handleWestButton () {

    //on efface les anciennes données
    deleteElements ();

    eastButtonSelector.classList.remove("no-selected");
    westButtonSelector.classList.remove("no-selected");
    westButtonSelector.classList.add("selected");
    eastButtonSelector.classList.add("no-selected");

        //d'abord, on crée un objet de configuration
        //on indique la clé id pour pouvoir accéder à l'API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };
    
    //on lance la requête
    const standingsRequest = fetch ('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022&conference=west', options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la
    .then( handleJson );
};

//fonction qui les infos du classement dont on a besoin et on les affiche sur la page
function handleJson (json){
    

    //on trie les équipes dans l'ordre du classement                
    json.response.sort((a,b)=> a.conference.rank - b.conference.rank)
    console.log(json.response);


    const gamesMonthAndYearSelector = document.querySelector(".gamesMonthAndYear");
    gamesMonthAndYear.classList.add("off");

   const standingsTableSelector = document.querySelector('.standingsTable');
    const headTableSelector = document.querySelector('.headTable');

   const newBodyTable = document.createElement("tbody");
   newBodyTable.classList.add("bodyTable");

   standingsTableSelector.append(newBodyTable);
   headTableSelector.after(newBodyTable);


   const bodyTableSelector = document.querySelector('.bodyTable');

    //on execute une boucle sur le tableau json.response
        for( const dataTeam of json.response) 
        {           

            //on crée les éléments qui voint recevoir les données
            
            const newCardElements=document.createElement("tr");
            newCardElements.classList.add("cardElements");
            
            const newRank = document.createElement("th");
            newRank.classList.add("cardRank");

            const newImageTh = document.createElement("th");
            newImageTh.classList.add("cardImageTh");
            
            const newImage = document.createElement("img");
            newImage.classList.add("cardImage");

            const newName = document.createElement("th");
            newName.classList.add("cardName");

            const newWin = document.createElement("td");
            newWin.classList.add("cardWin");

            const newLost = document.createElement("td");
            newLost.classList.add("cardLost");

            const newPercentage = document.createElement("td");
            newPercentage.classList.add("cardPercentage");


            //on affecte les données aux éléments créés précédemment
            newRank.textContent = dataTeam.conference.rank;
            newName.textContent = dataTeam.team.name;
            newImage.src = dataTeam.team.logo;
            newPercentage.textContent = dataTeam.win.percentage;
            newWin.textContent = dataTeam.win.total;
            newLost.textContent = dataTeam.loss.total;
    
            //on organise les éléments créés dans le tableau

            bodyTableSelector.append(newCardElements);
            newCardElements.append(newRank);
            newCardElements.append(newImageTh);
            newImageTh.append(newImage);
            newCardElements.append(newName);
            newCardElements.append(newWin);
            newCardElements.append(newLost);
            newCardElements.append(newPercentage);
        }
        

}

//fonction qui efface les anciennes données de classement
function deleteElements () {

        const oldCardElements = document.querySelector('.bodyTable');
        oldCardElements.remove();
}
  

//Boucle qui pose un écouteur d'évènement sur chaque équipe du classement
for ( const team of cardTeamSelector){
    team.addEventListener('click', handleTeam);
    teamName = team.textContent;
    //console.log(teamName);
}

//fonction pour sélectionner une équipe dans le classement
function handleTeam (teamName) {

        const teamNameSelected = teamName.target.id;
        console.log(teamNameSelected);


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };      

        const teamSelect = fetch(`https://api-nba-v1.p.rapidapi.com/players?team=${teamNameSelected}&season=2022`, options)
        .then( function (data) {return data.json()})
        .then (handleTeamJson);
    
};
    
//fonction qui récupère la liste des joueurs d'une équipe sélectionnée
function handleTeamJson (json){

        deletePlayersElements();

        const standingdsSelectElement = document.querySelector('.standings');
        const newPlayersList = document.createElement("div");
        newPlayersList.classList.add("teamPlayers");
        standingdsSelectElement.append(newPlayersList);

        //console.log(json.response)

        for( const teamPlayer of json.response)
        {
            const cardSelectElement = document.querySelector('.teamPlayers');

            const playerCard = document.createElement("div");
            playerCard.classList.add("playersCard");

            const playerFirstName = document.createElement("p");
            playerFirstName.classList.add("player-firstname");

            const playerLastName = document.createElement("p");
            playerLastName.classList.add("player-lastname");

            const playerBirth = document.createElement("p");
            playerBirth.classList.add("player-birth");

            const playerHeight = document.createElement("p");
            playerHeight.classList.add("player-height");

            const playerCountry = document.createElement("p");
            playerCountry.classList.add("player-country");

            playerFirstName.textContent = teamPlayer.firstname;
            playerLastName.textContent = teamPlayer.lastname;
            playerBirth.textContent = teamPlayer.birth.date;
            playerHeight.textContent = teamPlayer.height.meters;
            playerCountry.textContent = teamPlayer.birth.country;

            cardSelectElement.append(playerCard);
            playerCard.append(playerFirstName);
            playerCard.append(playerLastName);
            playerCard.append(playerBirth);
            playerCard.append(playerHeight);
            playerCard.append(playerCountry);
        }


}
 
//fonction pour effacer les anciennes données des joueurs    
function deletePlayersElements () {
        const oldPlayers = document.querySelector(".teamPlayers");
        oldPlayers.remove();
}

//fonction sur le bouton "CLASSEMENTS" de la navbar
function handleStandingsButton () {
    console.log("afficher classements");
    
    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove("select");
    });

    todayButtonSelector.classList.add("off");
    oneLessButtonSelector.classList.add("off");
    twoLessButtonSelector.classList.add("off");
    threeLessButtonSelector.classList.add("off");
    oneMoreButtonSelector.classList.add("off");
    twoMoreButtonSelector.classList.add("off");
    threeMoreButtonSelector.classList.add("off");
    gamesMonthAndYear.classList.add("off");
    eastButtonSelector.classList.add("select");

    handleEastButton ();

    console.log("classement EST affiché");

}



//fonction qui permet de récupérer les matchs d'aujourdhui
function handleGamesButton () {
    
    
    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove("select");
    });
    //console.log("off effacé");
    
    //console.log("afficher les matchs");
    eastButtonSelector.classList.add("off");
    westButtonSelector.classList.add("off");
    sectionSelector.classList.add("off");

    getTheDate ();

    todayButtonSelector.classList.remove('no-selected');
    todayButtonSelector.classList.add('selected');

    const todayDate = new Date();
    const theDay = todayDate.getDate();
    const theMonth = todayDate.getMonth() + 1;
    const theYear = todayDate.getFullYear();

    function dayConvert () {
        return (theDay<10 ? "0" : "")+theDay;
    };
    const day = dayConvert();

    function monthConvert () {
        return (theMonth<10 ? "0" : "")+theMonth;
    };
    const month = monthConvert();
    
    const today = theYear+"-"+month+"-"+day ;
    
    

    //console.log(befortoday);

  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    //on lance la requête
    const gamesRequest = fetch (`https://api-nba-v1.p.rapidapi.com/games?date=${today}`, options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la fonction handleGamesJson
    .then( handleGamesJson );
};

//fonction qui permet de récupérer les matchs d'hier
function handleYesterdayButtonGames () {

 
    

    const todayDate = new Date();
    const theDay = todayDate.getDate()-1;
    const theMonth = todayDate.getMonth() + 1;
    const theYear = todayDate.getFullYear();

    function dayConvert () {
        return (theDay<10 ? "0" : "")+theDay;
    };
    const day = dayConvert();

    function monthConvert () {
        return (theMonth<10 ? "0" : "")+theMonth;
    };
    const month = monthConvert();
    
    const yesterday = theYear+"-"+month+"-"+day ;
    

  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    //on lance la requête
    const gamesRequest = fetch (`https://api-nba-v1.p.rapidapi.com/games?date=${yesterday}`, options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la fonction handleGamesJson
    .then( handleGamesJson );



}


//fonction qui permet de récupérer les matchs d'avant-hier
function handleTwoDaysBeforeButtonGames () {




    const todayDate = new Date();
    const theDay = todayDate.getDate()-2;
    const theMonth = todayDate.getMonth() + 1;
    const theYear = todayDate.getFullYear();

    function dayConvert () {
        return (theDay<10 ? "0" : "")+theDay;
    };
    const day = dayConvert();

    function monthConvert () {
        return (theMonth<10 ? "0" : "")+theMonth;
    };
    const month = monthConvert();
    
    const twodaysbefore = theYear+"-"+month+"-"+day ;
    

  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    //on lance la requête
    const gamesRequest = fetch (`https://api-nba-v1.p.rapidapi.com/games?date=${twodaysbefore}`, options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la fonction handleGamesJson
    .then( handleGamesJson );



}

//fonction qui permet de récupérer les matchs d'avant-avant-hier
function handleThreeDaysBeforeButtonGames () {

    

    const todayDate = new Date();
    const theDay = todayDate.getDate()-3;
    const theMonth = todayDate.getMonth() + 1;
    const theYear = todayDate.getFullYear();

    function dayConvert () {
        return (theDay<10 ? "0" : "")+theDay;
    };
    const day = dayConvert();

    function monthConvert () {
        return (theMonth<10 ? "0" : "")+theMonth;
    };
    const month = monthConvert();
    
    const threedaysbefore = theYear+"-"+month+"-"+day ;
    

  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    //on lance la requête
    const gamesRequest = fetch (`https://api-nba-v1.p.rapidapi.com/games?date=${threedaysbefore}`, options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la fonction handleGamesJson
    .then( handleGamesJson );



}


//fonction qui permet de récupérer les matchs de demain
function handleTomorowButtonGames () {


    const todayDate = new Date();
    const theDay = todayDate.getDate()+1;
    const theMonth = todayDate.getMonth() + 1;
    const theYear = todayDate.getFullYear();

    function dayConvert () {
        return (theDay<10 ? "0" : "")+theDay;
    };
    const day = dayConvert();

    function monthConvert () {
        return (theMonth<10 ? "0" : "")+theMonth;
    };
    const month = monthConvert();
    
    const tomorow = theYear+"-"+month+"-"+day ;
    

  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    //on lance la requête
    const gamesRequest = fetch (`https://api-nba-v1.p.rapidapi.com/games?date=${tomorow}`, options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la fonction handleGamesJson
    .then( handleGamesJson );



}

//fonction qui permet de récupérer les matchs dans 2 jours
function handleTwoDaysAfterButtonGames () {

    
    todayButtonSelector.classList.remove('selected');
    todayButtonSelector.classList.add('no-selected');
    yesterdayButtonSelector.classList.remove('no-selected');
    yesterdayButtonSelector.classList.add('selected');


    const todayDate = new Date();
    const theDay = todayDate.getDate()+2;
    const theMonth = todayDate.getMonth() + 1;
    const theYear = todayDate.getFullYear();

    function dayConvert () {
        return (theDay<10 ? "0" : "")+theDay;
    };
    const day = dayConvert();

    function monthConvert () {
        return (theMonth<10 ? "0" : "")+theMonth;
    };
    const month = monthConvert();
    
    const twodaysafter = theYear+"-"+month+"-"+day ;
    

  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    //on lance la requête
    const gamesRequest = fetch (`https://api-nba-v1.p.rapidapi.com/games?date=${twodaysafter}`, options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la fonction handleGamesJson
    .then( handleGamesJson );



}

//fonction qui permet de récupérer les matchs dans 3 jours
function handleThreeDaysAfterButtonGames () {

    const todayDate = new Date();
    const theDay = todayDate.getDate()+3;
    const theMonth = todayDate.getMonth() + 1;
    const theYear = todayDate.getFullYear();

    function dayConvert () {
        return (theDay<10 ? "0" : "")+theDay;
    };
    const day = dayConvert();

    function monthConvert () {
        return (theMonth<10 ? "0" : "")+theMonth;
    };
    const month = monthConvert();
    
    const threedaysafter = theYear+"-"+month+"-"+day ;
    

  const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    //on lance la requête
    const gamesRequest = fetch (`https://api-nba-v1.p.rapidapi.com/games?date=${threedaysafter}`, options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la fonction handleGamesJson
    .then( handleGamesJson );



}


//fonction qui récupère la liste des matchs
function handleGamesJson (json) {



    console.log(json.response);

        const oldGamesCardSelector = document.querySelector(".gameCardButton");
        //oldGamesCardSelector.remove();


    //on lance la boucle sur le tb json.reponse pour récupérer les infos des matchs
    for (const dataGames of json.response)
    {
        //on crée une card pour chaque matchs
        const newGameCard = document.createElement("button");
        newGameCard.classList.add("gameCardButton");
          

        //on crée l'élément pour l'équipe "Home"
        const newHomeTeamElement = document.createElement("div");
        newHomeTeamElement.classList.add("homeTeam");

        const newImageCard = document.createElement("img");
        newImageCard.classList.add("gameCardImage");

        const newGameData = document.createElement("div");
        newGameData.classList.add("gameData");

        const newHomeTeamName = document.createElement("p");
        newHomeTeamName.classList.add("homeTeamName");

        const newHomeTeamScore = document.createElement("p");
        newHomeTeamScore.classList.add("homeTeamScore");

       
        
         //on crée l'élément pour l'équipe "Visitor"
        const newVisitorTeamElement = document.createElement("div");
        newVisitorTeamElement.classList.add("visitorTeam");

        const newVisitorImageCard = document.createElement("img");
        newVisitorImageCard.classList.add("gameCardImage");

        const newVisitorGameData = document.createElement("div");
        newVisitorGameData.classList.add("gameData");

        const newVisitorTeamName = document.createElement("p");
        newVisitorTeamName.classList.add("visitorTeamName");

        const newVisitorTeamScore = document.createElement("p");
        newVisitorTeamScore.classList.add("visitorTeamScore");

        //on affecte les données aux éléments de chaque équipe du match
        newImageCard.src = dataGames.teams.home.logo;
        newHomeTeamName.textContent = dataGames.teams.home.name;
        newHomeTeamScore.textContent= dataGames.scores.home.points;
        const colorHomeTeam= dataGames.teams.home.code;
        const colorVisitorTeam = dataGames.teams.visitors.code;

        //on affecte l'id à chaque match
        const idGame = dataGames.id;
        newGameCard.setAttribute("id",`${idGame}`);

        //on affecte une couleur différente pour chaque équipe
        newHomeTeamElement.classList.add(`${colorHomeTeam}`);
        newVisitorTeamElement.classList.add(`${colorVisitorTeam}`);
        
        newVisitorImageCard.src = dataGames.teams.visitors.logo;
        //newVisitorImageCard.style.backgroundImage=dataGames.teams.visitors.logo;
        newVisitorTeamName.textContent = dataGames.teams.visitors.name;
        newVisitorTeamScore.textContent= dataGames.scores.visitors.points;

        //on affiche tous les éléments sur la page

        gamesElementSelector.append(newGameCard);
        newGameCard.append(newHomeTeamElement);
        newHomeTeamElement.append(newImageCard);
        newHomeTeamElement.append(newGameData);
        //newGameData.append(newHomeTeamName);
        newGameData.append(newHomeTeamScore);


        newGameCard.append(newVisitorTeamElement);
        newVisitorTeamElement.append(newVisitorImageCard);
        newVisitorTeamElement.append(newVisitorGameData);
        //newVisitorGameData.append(newVisitorTeamName);
        newVisitorGameData.append(newVisitorTeamScore);



    }


    selectTheGame();

}





//===================================================================
//ECOUTEURS D'EVENEMENTS
//===================================================================
eastButtonSelector.addEventListener('click', handleEastButton);
westButtonSelector.addEventListener('click', handleWestButton);
standingsButton.addEventListener('click', handleStandingsButton);
gamesButton.addEventListener('click', handleGamesButton);
todayButtonSelector.addEventListener('click', handleGamesButton )
yesterdayButtonSelector.addEventListener('click',handleYesterdayButtonGames );
twoDaysBeforeButtonSelector.addEventListener('click',handleTwoDaysBeforeButtonGames);
threeDaysBeforeButtonSelector.addEventListener('click',handleThreeDaysBeforeButtonGames);

tomorowButtonSelector.addEventListener('click',handleTomorowButtonGames );
twoDaysAfterButtonSelector.addEventListener('click',handleTwoDaysAfterButtonGames);
threeDaysAfterButtonSelector.addEventListener('click',handleThreeDaysAfterButtonGames);