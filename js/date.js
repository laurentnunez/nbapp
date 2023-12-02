//===================================================================
//QUERY SELECTOR
//===================================================================

const oneLessButtonSelector = document.querySelector('#oneLessButton');

const oneMoreButtonSelector = document.querySelector('#oneMoreButton');

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
        
    const theOneMoreDay = todayDate.getDate()+1;
    
    oneMoreButtonSelector.textContent=theOneMoreDay;
 
    //On inscrit le mois et l'année actuels sur la page
    const tabMonth = new Array ("JAN","FEV","MARS","AVR","MAI","JUI","JUIL","AOUT","SEP","OCT","NOV","DEC");
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




