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
    errorMessage.style.display = 'block';
    auctionControls.style.display = 'none';
    returnLink.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    const startAuctionButton = document.querySelector(".start-auction");
    const auctionItemInput = document.getElementById("auction-item");
    const startPriceInput = document.getElementById("start-price");
    const stopAuctionButton = document.querySelector(".stop-auction");
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
        auctionStarted = true;
        startAuctionButton.disabled = true;
        auctionItemInput.disabled = true;
        startPriceInput.disabled = true;
        startAuction(auctionItemInput, startPriceInput);
    });

    stopAuctionButton.addEventListener("click", () => {
        auctionStarted = false;
        startAuctionButton.disabled = false;
        auctionItemInput.disabled = false;
        startPriceInput.disabled = false;
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
