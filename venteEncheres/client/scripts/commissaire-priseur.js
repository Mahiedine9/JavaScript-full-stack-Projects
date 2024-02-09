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




