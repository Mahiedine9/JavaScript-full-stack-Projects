const socket = io();

socket.emit('identify', 'bidder'); 

socket.on('identify', () => {
    console.log('Identified as a bidder');
});

socket.on('startOk', () => {console.log(`start ok`)} );


