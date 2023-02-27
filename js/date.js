//===================================================================
//QUERY SELECTOR
//===================================================================

const oneLessButtonSelector = document.querySelector('#oneLessButton');
const twoLessButtonSelector = document.querySelector('#twoLessButton');
const threeLessButtonSelector = document.querySelector('#threeLessButton');
const oneMoreButtonSelector = document.querySelector('#oneMoreButton');
const twoMoreButtonSelector = document.querySelector('#twoMoreButton');
const threeMoreButtonSelector = document.querySelector('#threeMoreButton');
const gamesMonthAndYear = document.querySelector('.gamesMonthAndYear');

const dateButtonSelector = document.querySelectorAll("#dateButton");

function getTheDate () {

   const todayDate = new Date();

    const theYear = todayDate.getFullYear();
    const theMonth = todayDate.getMonth() + 1;

    const theOneMoreDay = todayDate.getDate()+1;
    const theTwoMoreDay = todayDate.getDate()+2;
    const theThreeMoreDay = todayDate.getDate()+3;
    const theDay = todayDate.getDate();
    const theOneLessDay = todayDate.getDate()-1;
    const theTwoLessDay = todayDate.getDate()-2;
    const theThreeLessDay = todayDate.getDate()-3;

  
    //On inscrit les jours sur les boutons de haut de page
    todayButtonSelector.textContent=theDay;
    oneLessButtonSelector.textContent=theOneLessDay;
    twoLessButtonSelector.textContent=theTwoLessDay;
    threeLessButtonSelector.textContent=theThreeLessDay;
    oneMoreButtonSelector.textContent=theOneMoreDay;
    twoMoreButtonSelector.textContent=theTwoMoreDay;
    threeMoreButtonSelector.textContent=theThreeMoreDay;

    //On inscrit le mois et l'année actuels sur la page
    const tabMonth = new Array ("JANVIER","FEVRIER","MARS","AVRIL","MAI","JUIN","JUILLET","AOUT","SEPTEMBRE","OCTOBRE","NOVEMBRE","DECEMBRE");
    gamesMonthAndYear.textContent=tabMonth[todayDate.getMonth()]+" "+theYear;
    
    //On indique le mois et l'année au format numérique
        //On convertit le mois au bon format 
        function monthConvert () {
            return (theMonth<10 ? "0" : "")+theMonth;
        };
        const month = monthConvert();

    const monthAndYear = month+"-"+theYear;
    //On affiche le mois et l'année au format : mm-yyyy
    //console.log(monthAndYear);


    

}




