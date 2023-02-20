
function selectTheGame () {

const gameCardSelector = document.querySelectorAll(".gameCard");

for (const game of gameCardSelector) {

    game.addEventListener('click', handleGameCard);
    gameCardId = game.id;
    //console.log(gameCardId)
}


function handleGameCard(gameCardId) {
    console.log(gameCardId);
}

}
