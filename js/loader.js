

    function closeLoader () {
        document.querySelector('.loader-container').classList.add('hidden');

        handleGamesButton();
        
    }

    setTimeout(closeLoader, 1500); 




function showLoader () {
    function closeLoader () {
        document.querySelector('.loader-container').classList.add('hidden');

    }

    setTimeout(closeLoader, 1500);

    document.querySelector('.loader-container').classList.remove('hidden');
}

