
const options = {
    method: 'GET',
        };

const apiGames = fetch (`https://www.balldontlie.io/api/v1/games?seasons[]=2023`, options)
console.log(apiGames);
