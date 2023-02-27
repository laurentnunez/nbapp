

function showLoader () {
    document.querySelector('.loader-container').classList.add('hidden');

    getTheDate ();
    lunchGames();
}

setTimeout(showLoader, 2500);

