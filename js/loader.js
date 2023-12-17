

    function closeLoader () {
        document.querySelector('.loader-container').classList.add('hidden');

        handleGamesButton();
        deleteElements();
        handleEastButton ();
        handleWestButton ();
        
    }

    setTimeout(closeLoader, 1500); 




function showLoader () {
    function closeLoader () {
        document.querySelector('.loader-container').classList.add('hidden');
        
        document.querySelector('.navbar').classList.remove('hidden');
    }

    setTimeout(closeLoader, 1500);

    document.querySelector('.loader-container').classList.remove('hidden');
    document.querySelector('.navbar').classList.add('hidden');
}

