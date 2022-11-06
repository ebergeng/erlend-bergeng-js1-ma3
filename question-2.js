const apiKey = "2b89071a3f1a4e169b1dd2d509ed6913";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const gameWrap = document.querySelector(".gameWrap");

async function apiCall() {
    try {
        const respons = await fetch(url);
        const json = await respons.json();
        const facts = json.results;
        gameWrap.innerHTML = "";

        for(let i = 0; i < facts.length; i++) {
            if(i >= 8) {
                break;
            }     
            gameWrap.innerHTML += `<div class="game">
                <h2>${facts[i].name}</h2>
                <p>Ratings: ${facts[i].rating}</p>
                <p>Tags: ${facts[i].tags.length}</p>
                </div>`;
        }
    }
    
    catch(error) {
        gameWrap.innerHTML = newError("There was an error calling the api..");
    }

}

apiCall();