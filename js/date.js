//===================================================================
//QUERY SELECTOR
//===================================================================

const oneLessButtonSelector = document.querySelector('.oneLessButton');
const twoLessButtonSelector = document.querySelector('.twoLessButton');
const threeLessButtonSelector = document.querySelector('.threeLessButton');
const oneMoreButtonSelector = document.querySelector('.oneMoreButton');
const twoMoreButtonSelector = document.querySelector('.twoMoreButton');
const threeMoreButtonSelector = document.querySelector('.threeMoreButton');

const gamesMonthAndYear = document.querySelector('.gamesMonthAndYear');


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

   
    const tabMonth = new Array ("JANVIER","FEVRIER","MARS","AVRIL","MAI","JUIN","JUILLET","AOUT","SEPTEMBRE","OCTOBRE","NOVEMBRE","DECEMBRE");


    todayButtonSelector.textContent=theDay;
    oneLessButtonSelector.textContent=theOneLessDay;
    twoLessButtonSelector.textContent=theTwoLessDay;
    threeLessButtonSelector.textContent=theThreeLessDay;
    oneMoreButtonSelector.textContent=theOneMoreDay;
    twoMoreButtonSelector.textContent=theTwoMoreDay;
    threeMoreButtonSelector.textContent=theThreeMoreDay;

    gamesMonthAndYear.textContent=tabMonth[todayDate.getMonth()]+" "+theYear;
    

}

gamesMonthAndYear.addEventListener('click', getTheDate)
oneLessButtonSelector.addEventListener('click', getTheDate);
twoLessButtonSelector.addEventListener('click', getTheDate);
threeLessButtonSelector.addEventListener('click', getTheDate);
oneMoreButtonSelector.addEventListener('click', getTheDate);
twoMoreButtonSelector.addEventListener('click', getTheDate);
threeMoreButtonSelector.addEventListener('click', getTheDate);