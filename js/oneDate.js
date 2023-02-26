//===================================================================
//QUERY SELECTOR
//===================================================================


//const todayButtonSelector = document.querySelector('#todayButton');








//fonction qui permet de récupérer les matchs d'hier
function handleYesterdayButtonGames () {
 
    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove('selected');
        element.classList.remove('no-selected');
    });
    
    eastButtonSelector.classList.add("off");
    westButtonSelector.classList.add("off");

    sectionSelector.classList.toggle('off');
    thirdSectionSelector.classList.toggle('off');

    oneLessButtonSelector.classList.add('selected');
    twoLessButtonSelector.classList.add('no-selected');
    threeLessButtonSelector.classList.add('no-selected');
    todayButtonSelector.classList.add('no-selected');
    oneMoreButtonSelector.classList.add('no-selected');
    twoMoreButtonSelector.classList.add('no-selected');
    threeMoreButtonSelector.classList.add('no-selected');

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
    

    handleDateButton (theDate);



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



}

//fonction qui permet de récupérer les matchs d'avant-hier
function handleTwoDaysBeforeButtonGames () {


    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove('selected');
        element.classList.remove('no-selected');
    });
    
    eastButtonSelector.classList.add("off");
    westButtonSelector.classList.add("off");

    sectionSelector.classList.toggle('off');
    thirdSectionSelector.classList.toggle('off');

    oneLessButtonSelector.classList.add('no-selected');
    twoLessButtonSelector.classList.add('selected');
    threeLessButtonSelector.classList.add('no-selected');
    todayButtonSelector.classList.add('no-selected');
    oneMoreButtonSelector.classList.add('no-selected');
    twoMoreButtonSelector.classList.add('no-selected');
    threeMoreButtonSelector.classList.add('no-selected');


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

    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove('selected');
        element.classList.remove('no-selected');
    });
    
    eastButtonSelector.classList.add("off");
    westButtonSelector.classList.add("off");

    sectionSelector.classList.toggle('off');
    thirdSectionSelector.classList.toggle('off');

    oneLessButtonSelector.classList.add('no-selected');
    twoLessButtonSelector.classList.add('no-selected');
    threeLessButtonSelector.classList.add('selected');
    todayButtonSelector.classList.add('no-selected');
    oneMoreButtonSelector.classList.add('no-selected');
    twoMoreButtonSelector.classList.add('no-selected');
    threeMoreButtonSelector.classList.add('no-selected');

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

    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove('selected');
        element.classList.remove('no-selected');
    });
    
    eastButtonSelector.classList.add("off");
    westButtonSelector.classList.add("off");

    sectionSelector.classList.toggle('off');
    thirdSectionSelector.classList.toggle('off');

    oneLessButtonSelector.classList.add('no-selected');
    twoLessButtonSelector.classList.add('no-selected');
    threeLessButtonSelector.classList.add('no-selected');
    todayButtonSelector.classList.add('no-selected');
    oneMoreButtonSelector.classList.add('selected');
    twoMoreButtonSelector.classList.add('no-selected');
    threeMoreButtonSelector.classList.add('no-selected');




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

    
    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove('selected');
        element.classList.remove('no-selected');
    });
    
    eastButtonSelector.classList.add("off");
    westButtonSelector.classList.add("off");

    sectionSelector.classList.toggle('off');
    thirdSectionSelector.classList.toggle('off');

    oneLessButtonSelector.classList.add('no-selected');
    twoLessButtonSelector.classList.add('no-selected');
    threeLessButtonSelector.classList.add('no-selected');
    todayButtonSelector.classList.add('no-selected');
    oneMoreButtonSelector.classList.add('no-selected');
    twoMoreButtonSelector.classList.add('selected');
    threeMoreButtonSelector.classList.add('no-selected');


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
  
    const elements = document.querySelectorAll('*');
    elements.forEach((element)=> {
        element.classList.remove("off");
        element.classList.remove('selected');
        element.classList.remove('no-selected');
    });
    
    eastButtonSelector.classList.add("off");
    westButtonSelector.classList.add("off");
    sectionSelector.classList.toggle('off');
    thirdSectionSelector.classList.toggle('off');

    oneLessButtonSelector.classList.add('no-selected');
    twoLessButtonSelector.classList.add('no-selected');
    threeLessButtonSelector.classList.add('no-selected');
    todayButtonSelector.classList.add('no-selected');
    oneMoreButtonSelector.classList.add('no-selected');
    twoMoreButtonSelector.classList.add('no-selected');
    threeMoreButtonSelector.classList.add('selected');

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

