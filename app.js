const lodePlayer = (playerName) => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerName}`)
        .then(res => res.json())
        .then(data => displayPlayer(data.player[0]))
};
const displayPlayer = (player) => {
    console.log(player);
    const playerContainer = document.getElementById('playerContainer');
    playerContainer.innerHTML = "";
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('row');
    playerDiv.innerHTML = `
        <div class="col-md-4">
            <img src="${player.strFanart3}" class="img-fluid h-100 rounded-start" alt="...">
            </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h3 class="card-title">${player.strPlayer}</h3>
                    <h5 class="card-title">Facebook: ${player.strFacebook}</h5 >
                    <h5 class="card-title">Instagram: ${player.strInstagram}</h5 >
                    <h5 class="card-title">Location: ${player.strBirthLocation}</h5 >
        <p class="card-text">${player.strDescriptionEN.slice(0, 240)}</p>
                </div >
            </div >
        </div >
    `;
    playerContainer.appendChild(playerDiv);
    console.log(playerDiv)
};
const search = () => {
    const searchFled = document.getElementById('searchFled');
    const searchFledValue = searchFled.value;
    lodePlayer(searchFledValue);
    searchFled.value = "";
};
lodePlayer('messi');


