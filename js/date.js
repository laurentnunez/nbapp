//===================================================================
//QUERY SELECTOR
//===================================================================

const oneLessButtonSelector = document.querySelector('#oneLessButton');
const twoLessButtonSelector = document.querySelector('#twoLessButton');
//const threeLessButtonSelector = document.querySelector('#threeLessButton');
const oneMoreButtonSelector = document.querySelector('#oneMoreButton');
const twoMoreButtonSelector = document.querySelector('#twoMoreButton');
//const threeMoreButtonSelector = document.querySelector('#threeMoreButton');
const gamesMonthAndYear = document.querySelector('.gamesMonthAndYear');



function getTheDate () {

   const todayDate = new Date();

    const theYear = todayDate.getFullYear();
    const theMonth = todayDate.getMonth() + 1;
   
    const theDay = todayDate.getDate();
       
  
    //On inscrit les jours sur les boutons de haut de page
    todayButtonSelector.textContent=theDay;
    
    
    //on définit la date des autres jours
    //la date d'hier
    const millisecYesterday = new Date ()- (1000*60*60*24);
    const yesterday = new Date(millisecYesterday);
    const yesterdayNumber = yesterday.getDate();
    oneLessButtonSelector.textContent=yesterdayNumber;

    //la date d'avant-hier
    const millisecDaybefore = new Date ()- (1000*60*60*48);
    const dayBefore = new Date(millisecDaybefore);
    const dayBeforeNumber = dayBefore.getDate();
    twoLessButtonSelector.textContent=dayBeforeNumber;

   //la date d'avant-avant-hier
    //threeLessButtonSelector.textContent=dayBeforeNumber-1;
    
    const theOneMoreDay = todayDate.getDate()+1;
    const theTwoMoreDay = todayDate.getDate()+2;
    //const theThreeMoreDay = todayDate.getDate()+3;

    oneMoreButtonSelector.textContent=theOneMoreDay;
    twoMoreButtonSelector.textContent=theTwoMoreDay;
    //threeMoreButtonSelector.textContent=theThreeMoreDay;



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




