

function showLoader () {
    document.querySelector('.loader-container').classList.add('hidden');

    getTheDate ();
    handleStandingsButton();
}

setTimeout(showLoader, 2500);

