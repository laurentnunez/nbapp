function showLoader () {
    document.querySelector('.loader-container').classList.add('hidden');

    handleGamesButton();
}

setTimeout(showLoader, 2000);