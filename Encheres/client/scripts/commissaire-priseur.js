const socket = io();

socket.emit('identify', 'auctioneer');

socket.on('identify', () => {
    console.log('Identified as an auctioneer');
});

socket.on('offerReceived', (socketId, price) => {
    console.log("je suis dans la on du commissaire priseur");
    const message = `Offre reçue de ${socketId}, prix : ${price}`;
    displayOfferMessage(message);
    updateCurrentBid(price);
    socket.emit('currentBid', getCurrentBid());   
});



socket.on('alreadyAuctioneer', () => {
    console.log('Another auctioneer is already connected');
    errorMessage();
});


socket.on('bidderDisconnected', () => {
    updateState(`Un encherisseur d'id a quitté l'enchére !`);
});

socket.on('noBidder', () => {
    stopAuctionButton.disabled = true;
    alert("Impossible de démarrer l'enchére, aucun encherisseur connecté");
    updateButton(false);
});


let startAuctionButton;
let auctionItemInput;
let startPriceInput;
let stopAuctionButton;

document.addEventListener("DOMContentLoaded", () => {
    startAuctionButton = document.querySelector(".start-auction");
    auctionItemInput = document.getElementById("auction-item");
    startPriceInput = document.getElementById("start-price");
    stopAuctionButton = document.querySelector(".stop-auction");
    stopAuctionButton.disabled = true;
    startAuctionButton.disabled = true;
    const currentPrice = document.getElementById("current-bid");
    currentPrice.textContent = startPriceInput.value.trim(); 

    function checkInputs() {
        if (auctionItemInput.value.trim() !== "" && startPriceInput.value.trim() !== "") {
            startAuctionButton.disabled = false;
        } else {
            startAuctionButton.disabled = true;
        }
    }

    auctionItemInput.addEventListener("input", checkInputs);
    startPriceInput.addEventListener("input", checkInputs);

    startAuctionButton.addEventListener("click", () => {
        updateButton(true);
        startAuction(auctionItemInput, startPriceInput);
    });

    stopAuctionButton.addEventListener("click", () => {
        updateButton(false);
        stopAuction();
    });
});

function startAuction(item, price) {
    socket.emit('auctionStarted', item.value.trim(), price.value.trim());
}

function stopAuction() {
    const auctionItemInput = document.getElementById("auction-item");
    const currentBid = document.getElementById('current-bid');
    displayOfferMessage(`Fin de lenchére. un ${auctionItemInput.value} conclus a ${currentBid.textContent}$` );
    socket.emit('stop');
}

function displayOfferMessage(message) {
    const offerMessage = document.getElementById('offer-message');
    offerMessage.textContent = message;
}

function getCurrentBid(){
    const currentBid = document.getElementById('current-bid');
    return (parseInt(currentBid.textContent));
}

function updateCurrentBid(price) {
    const currentBid = document.getElementById('current-bid');
    currentBid.textContent = parseInt(currentBid.textContent) + parseInt(price);
}

function updateButton(Bool){
    auctionStarted = Bool;
    startAuctionButton.disabled = Bool;
    auctionItemInput.disabled = Bool;
    startPriceInput.disabled = Bool;
} 

function errorMessage(){
    const errorMessage = document.getElementById("error-message");
    const auctionControls = document.querySelector(".auction-controls");
    const returnLink = document.querySelector(".return-link");
    errorMessage.style.display = 'block';
    auctionControls.style.display = 'none';
    returnLink.style.display = 'none';
}

