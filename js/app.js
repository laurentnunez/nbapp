

// MATCHS de la navbar
const gamesButton = document.querySelector('.gamesButton');

//bouton CLASSEMENTS de la navbar
const standingsButton = document.querySelector('.standingsButton');

//menu burger

function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger =document.querySelector('.burger');

    burger.addEventListener('click', ()=> {
        navbar.classList.toggle('show-nav');
    })

    gamesButton.addEventListener('click',()=> {
        navbar.classList.remove('show-nav'); 
    })

    standingsButton.addEventListener('click',()=> {
        navbar.classList.remove('show-nav'); 
    })

}
toggleMenu();



//===================================================================
//QUERY SELECTOR
//===================================================================



//bouton "Conf. Est"
const eastButtonSelector = document.querySelector(".eastButton");

//bouton "Conf. Ouest"
const westButtonSelector = document.querySelector(".westButton");

const cardTeamSelector = document.querySelectorAll(".cardName");

const gamesElementSelector = document.querySelector('.games');

const sectionSelector = document.querySelector('.first-section');

const secondSectionSelector = document.querySelector('.second-section');

const thirdSectionSelector = document.querySelector('.third-section');

const fourthSectionSelector = document.querySelector('.fourth-section');

const dateWrapperSelector = document.querySelector('.dateWrapper');

const dateButtonSelector = document.querySelectorAll(".dateButton");

const todayButtonSelector = document.querySelector ('#todayButton');
const yesterdayButtonSelector = document.querySelector ('#oneLessButton');

const tomorowButtonSelector = document.querySelector('#oneMoreButton');


const standingsTableSelector = document.querySelector('.standingsTable');

const matchsTitleSelector = document.querySelector(".matchsTitle");
const standingsTitleSelector = document.querySelector(".standingsTitle");

//===================================================================
//FONCTIONS
//===================================================================



//fonction d'appel à la requête pour la Conf Est
function handleEastButton () {
    
    //on efface les anciennes données
    deleteElements ();

    standingsTitleSelector.classList.remove("off");
    matchsTitleSelector.classList.remove("off");
    matchsTitleSelector.classList.add("off");

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
    const standingsRequest = fetch ('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023&conference=east', options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la fonction handleJson
    .then( handleJson );
};

//fonction d'appel à la requête pour la Conf Ouest
function handleWestButton () {

    //on efface les anciennes données
    deleteElements ();

    standingsTitleSelector.classList.remove("off");
    matchsTitleSelector.classList.add("off");
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
    const standingsRequest = fetch ('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023&conference=west', options)
    //on récupère la réponse de la requete au format json
    .then( function (data) {return data.json()})
    //on lance la
    .then( handleJson );
};

//fonction qui récupère les infos du classement dont on a besoin et on les affiche sur la page
function handleJson (json){
    

    //on trie les équipes dans l'ordre du classement                
    json.response.sort((a,b)=> a.conference.rank - b.conference.rank)
    //console.log(json.response);


    const gamesMonthAndYearSelector = document.querySelector(".gamesMonthAndYear");
    gamesMonthAndYearSelector.classList.add("off");

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

            const logoTeam= dataTeam.team.code;
            newImageTh.classList.add(`${logoTeam}`);

            //on affecte les données aux éléments créés précédemment
            newRank.textContent = dataTeam.conference.rank;
            newName.textContent = dataTeam.team.nickname;
            //newImage.src = dataTeam.team.logo;
            newPercentage.textContent = dataTeam.win.percentage;
            newWin.textContent = dataTeam.win.total;
            newLost.textContent = dataTeam.loss.total;

            const idTeam = dataTeam.team.id;
            newName.setAttribute("id",`${idTeam}`);
    
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
  

    

//fonction pour effacer les anciennes données des joueurs    
function deletePlayersElements () {
        const oldPlayers = document.querySelector(".teamPlayers");
        oldPlayers.remove();
}

//fonction sur le bouton "CLASSEMENTS" de la navbar
function handleStandingsButton () {
    //console.log("afficher classements");

    showLoader ();
    

    
    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove("select");
    });

    todayButtonSelector.classList.add("off");
    oneLessButtonSelector.classList.add("off");
    //twoLessButtonSelector.classList.add("off");
    //threeLessButtonSelector.classList.add("off");
    oneMoreButtonSelector.classList.add("off");
    //twoMoreButtonSelector.classList.add("off");
    //threeMoreButtonSelector.classList.add("off");

    secondSectionSelector.classList.toggle('off');
    thirdSectionSelector.classList.toggle('off');
    fourthSectionSelector.classList.add('off');
    eastButtonSelector.classList.add("select");

    handleEastButton ();

    selectTeam ();


}



for (const date of dateButtonSelector) {
    date.addEventListener('click', ()=> {

        const dateButtons = document.querySelectorAll('.dateButton');
        dateButtons.forEach((dateButton)=> {
            dateButton.classList.remove('selected');
            dateButton.classList.add('no-selected');
        });



    const day = date.textContent;

    const today = new Date ();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;


    function dayConvert () {
        return (day<10 ? "0" : "")+day;
    };
    const dayConverted = dayConvert();


    function monthConvert () {
        return (month<10 ? "0" : "")+month;
    };
    const monthConverted = monthConvert();
        


    todayButtonSelector.classList.remove('no-selected');
    
    date.classList.remove('no-selected');
    date.classList.add('selected');


    const theDate = year+"-"+monthConverted+"-"+dayConverted;
    

    //console.log(day);
    handleGames (theDate);
    });

    
}





//fonction pour lancer l'application
function handleGames (theDate) {

    //console.log ("handleGames");

    showLoader ();

    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
    });
    
    standingsTitleSelector.classList.add ("off");
    matchsTitleSelector.classList.remove("off");

    eastButtonSelector.classList.add("off");
    westButtonSelector.classList.add("off");

    sectionSelector.classList.toggle('off');
    thirdSectionSelector.classList.toggle('off');
    fourthSectionSelector.classList.toggle('off');

    secondSectionSelector.classList.remove('off');
    todayButtonSelector.classList.remove('selected');
    todayButtonSelector.classList.add('no-selected');

    getTheDate ();


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

            //on lance la requête
            const gamesRequest = fetch (`https://api-nba-v1.p.rapidapi.com/games?date=${theDate}`, options)
            //on récupère la réponse de la requete au format json
            .then( function (data) {return data.json()})
            //on lance la fonction handleGamesJson
            .then( handleGamesJson );

        
    

};


//fonction qui permet de récupérer les matchs d'aujourd'hui
function handleGamesButton () {
    
    showLoader ();

    //console.log ("handleGamesButton");

    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove('selected');
    });
    
    eastButtonSelector.classList.add("off");
    westButtonSelector.classList.add("off");

    sectionSelector.classList.toggle('off');
    thirdSectionSelector.classList.toggle('off');
    fourthSectionSelector.classList.toggle('off');
    
    todayButtonSelector.classList.add('selected');

    standingsTitleSelector.classList.add ("off");
    matchsTitleSelector.classList.remove("off");

     
    getTheDate ();


   
            const dayNumber = todayButtonSelector.textContent;

            const todayDate = new Date();

            const theYear = todayDate.getFullYear();
            const theMonth = todayDate.getMonth() + 1;


            function dayConvert () {
                return (dayNumber<10 ? "0" : "")+dayNumber;
            };
            const day = dayConvert();


            function monthConvert () {
                return (theMonth<10 ? "0" : "")+theMonth;
            };
            const month = monthConvert();

           

            const today = theYear+"-"+month+"-"+day;
        

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

//fonction qui récupère la liste des matchs
function handleGamesJson (json) {
  
    //console.log(json.response);

    

    const oldElements = document.querySelectorAll('.gameCardButton');
    const oldElementsP = document.querySelectorAll('.no-game');

    oldElements.forEach((oldElement)=> {
        oldElement.classList.add('off');
    });

    oldElementsP.forEach((oldElementP)=> {
        oldElementP.classList.add('off');
    });


    
    const allGames = json.response; 
    //on trie les matchs dans l'ordre de la date                
    allGames.sort((a,b)=> a.date.start - b.date.start );


    if (allGames.length === 0) {

        //console.log("le tableau est vide");

        const noGameCardP = document.createElement('p');
        noGameCardP.classList.add('no-game');
        noGameCardP.textContent="Pas de matchs ce jour-là...";

        gamesElementSelector.append(noGameCardP);

    
    
    }

   
    else {

   
        //on lance la boucle sur le tb json.reponse pour récupérer les infos des matchs
        for (const dataGames of allGames)
        {
            //on crée une card pour chaque matchs
            const newGameCard = document.createElement("div");
            newGameCard.classList.add("gameCardButton");
            
            //on crée la div englobant les données des équipes
            const newGameCardTeams = document.createElement("div");
            newGameCardTeams.classList.add("gameCardTeams");
            const newBoxScore = document.createElement("div");
            newBoxScore.classList.add("boxScore");
            const newBoxScoreP = document.createElement("p");
            newBoxScoreP.classList.add("boxScoreP");

            //on crée l'élément pour l'équipe "Home"
            const newHomeTeamElement = document.createElement("div");
            newHomeTeamElement.classList.add("homeTeam");

            const newGameData = document.createElement("div");
            newGameData.classList.add("gameData");

            const newHomeTeamScore = document.createElement("p");
            newHomeTeamScore.classList.add("homeTeamScore");

            const newHomeTeamName = document.createElement("p");
            newHomeTeamName.classList.add("homeTeamNickname");
                   
            
            //on crée l'élément pour l'équipe "Visitor"
            const newVisitorTeamElement = document.createElement("div");
            newVisitorTeamElement.classList.add("visitorTeam");

            const newVisitorGameData = document.createElement("div");
            newVisitorGameData.classList.add("gameData");

            const newVisitorTeamScore = document.createElement("p");
            newVisitorTeamScore.classList.add("visitorTeamScore");

            const newVisitorTeamName = document.createElement("p");
            newVisitorTeamName.classList.add("visitorTeamNickname");
           

            //on affecte les données aux éléments de chaque équipe du match
            newHomeTeamName.textContent = dataGames.teams.home.nickname;
            newHomeTeamScore.textContent= dataGames.scores.home.points;
            const colorHomeTeam= dataGames.teams.home.code;
            const colorVisitorTeam = dataGames.teams.visitors.code;

            //on affecte l'id à chaque match
            const idGame = dataGames.id;
            newGameCard.setAttribute("id",`${idGame}`);

            //on affecte le logo de chaque équipe
            newHomeTeamElement.classList.add(`${colorHomeTeam}`);
            newVisitorTeamElement.classList.add(`${colorVisitorTeam}`);
            newVisitorTeamName.textContent = dataGames.teams.visitors.nickname;
            newVisitorTeamScore.textContent= dataGames.scores.visitors.points;

            //on affiche tous les éléments sur la page

            gamesElementSelector.append(newGameCard);
            newGameCard.append(newGameCardTeams);
            newGameCardTeams.append(newVisitorTeamElement)
            newVisitorTeamElement.append(newVisitorGameData);
            newVisitorGameData.append(newVisitorTeamScore);
            newVisitorGameData.append(newVisitorTeamName);

            newGameCardTeams.append(newHomeTeamElement);
            newHomeTeamElement.append(newGameData);
            newGameData.append(newHomeTeamScore);
            newGameData.append(newHomeTeamName);

            newGameCardTeams.append(newBoxScore);
            newBoxScore.append(newBoxScoreP);
            newBoxScoreP.textContent="Box Score";
            const status = dataGames.status.long;
            const hour = dataGames.date.start;
           

            if (status === "Scheduled") {
                //console.log(hour);


            //const gameHour = document.createElement('div');
           //gameHour.classList.add('gameHour');
            //const gameHourP=document.createElement('p');
   
            const hourToConvert = new Date (hour);  
            const theMinutes = hourToConvert.getMinutes();
             
            function mminutesConvert () {
                return (theMinutes<10 ? "0" : "")+theMinutes;
            };
            const minutes = mminutesConvert();
            const justHour = hourToConvert.getHours()+":"+minutes;
            newBoxScoreP.textContent=justHour;

            //newVisitorTeamElement.after(gameHour);
            //gameHour.append(gameHourP);   

            }
           


        }

    
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
