const socket = io();

socket.emit('identify', 'bidder');

socket.on('identify', () => {
    console.log('Identified as a bidder');
});

socket.on('startData', (item, price) => auctionStarted(item, price));

socket.on('stopAuction', () => {
    console.log(`Fin de l'enchère, merci pour votre participation.`);
    updateState("Enchère en attente de démarrage.");
    disableBidButtons(true); 
});

socket.on('alreadyAuction', () => {
    console.log(`Une enchère est déjà en cours, veuillez patienter ou revenir plus tard.`);
    updateState("Une enchère est déjà en cours.");
    disableBidButtons(true); 
});

function auctionStarted(item, price) {
    const nameItem = document.getElementById("object-name");
    const currentPrice = document.getElementById("current-price");
    updateState("Une enchère vient de commencer.");
    console.log(`Démarrage de l'enchère : ${item}, prix initial : ${price}`);
    disableBidButtons(false);
    nameItem.textContent = item;
    currentPrice.textContent = price;
}

function updatePrice(price) {
    const currentPrice = document.getElementById("current-price");
    let currentPriceValue = parseInt(currentPrice.textContent);
    currentPriceValue += parseInt(price);
    currentPrice.textContent = currentPriceValue;
}



function updateState(message) {
    const state = document.getElementById("state");
    state.textContent = message;
}

function disableBidButtons(disabled) {
    const bidButtons = document.querySelectorAll(".bid-option");
    bidButtons.forEach(button => {
        button.disabled = disabled;
    });
}

function offerReceived(price){
    console.log("je suis dans la methode offer du 2eme encherisseur");
    updateState(`nouvelle enchére de ${price}` );
    updatePrice(price);
} 


const bidButtons = document.querySelectorAll(".bid-option");
bidButtons.forEach(button => {
    button.addEventListener("click", () => {
        const bidPrice = button.dataset.bid; 
        console.log(`Prix d'enchère sélectionné : ${bidPrice}`);
        socket.emit('placeBid', bidPrice); 
        updateState(`Vous avez fait une offre de ${bidPrice} !`);
        updatePrice(bidPrice);
    });
});

socket.on('offerReceived', (socketId, price) => offerReceived(price));
