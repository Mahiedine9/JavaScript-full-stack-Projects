const socket = io();


socket.emit('identify', 'auctioneer'); 
socket.on('identify', () => {
    console.log('Identified as a auctioneer');
});


const errorMessage = document.getElementById('error-message');
const auctionControls = document.querySelector('.auction-controls');
const returnLink = document.querySelector('.return-link');
socket.on('alreadyAuctioneer', () => {
    errorMessage.style.display = 'block';
    auctionControls.style.display = 'none';
    returnLink.style.display = 'none';
});
const validMessage = document.getElementById('valid-message');
socket.on('youAreAuctioneer', () => {
    validMessage.style.display = 'block';
});


document.addEventListener("DOMContentLoaded", () => {
    const startAuctionButton = document.querySelector(".start-auction");
    const auctionItemInput = document.getElementById("auction-item");
    const startPriceInput = document.getElementById("start-price");
    const stopAuctionButton = document.querySelector(".stop-auction");
    startAuctionButton.disabled = true;

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



function stopAuction(){   
    socket.emit('stop');
}



 






