const socket = io();

socket.emit('identify', 'bidder'); 

socket.on('identify', () => {
    console.log('Identified as a bidder');
});

socket.on('startData', (item, price) => auctionStarted(item, price) );

socket.on('stopAuction', () => {console.log(`fin de lenchere, merci pour la participation`)})
socket.on('alreadyAuction', () => {console.log(`une enchere est deja lancé, attend ou casse toi`)});

const state = document.getElementById("state");

function auctionStarted(item, price){
    state.value = "Une enchére vient de commencer";
    console.log(`start ok ${item} prix ${price}`);
}






























