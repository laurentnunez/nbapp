
//fonction qui permet de sélectionner un match parmi la liste

function selectTheGame () {

const gameCardSelector = document.querySelectorAll(".gameCardButton");

//on lance une boucle permettant de faire apparaître la section 'third-section' en cliquant sur un des match de la liste
for (const game of gameCardSelector) {

    game.addEventListener('click', ()=> {
        thirdSectionSelector.classList.remove('off');

    });
    
};

}
