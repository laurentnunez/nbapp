
//fonction qui envoie la requête au server au moment du click
function handleButtonClick (evt) {
     
    //on indique que le bouton fonctionne
    console.log("bouton clické !");


    //on génère un chiffre aléatoire
    let teamId = Math.ceil(Math.random() * 30)+1 ;

   const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e2457b816msh7b4f76d57eb1fd9p1b092ajsnee5aa756253f',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    

    let nbaRequest = fetch(`https://api-nba-v1.p.rapidapi.com/teams?id=${teamId}`, options)
    nbaRequest.then(handleResponse); 

};


function handleResponse(data) {
    data.json().then(handleJson);
}

function handleJson (json) {

    let teamName = document.querySelector("#teamName");
    teamName.textContent = json.response[0].name;

    let teamImg = document.querySelector("#teamImg");
    teamImg.src = json.response[0].logo;


    console.log(json);
}


//on sélectionne le button et on lui ajoute un écoute d'évènement au click
let goButton = document.querySelector("#goButton");
goButton.addEventListener('click',handleButtonClick);

