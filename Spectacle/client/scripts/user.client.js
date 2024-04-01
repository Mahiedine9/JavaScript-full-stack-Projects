const socket = io();



const setup = async () => {
  socket.on('showDeleted', (desc) => deleteTicketByDescription(desc));
  try {
    const userData = await getUser();
    displayUser(userData);
    await Promise.all([getShows(), displayTickets()]);
    document.getElementById('logout').addEventListener('click', logout);
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
};

const displayMessage = (message) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.className = 'error-message'; 

  const messageContainer = document.getElementById('message-container');
  messageContainer.appendChild(messageElement);

  setTimeout(() => {
    messageContainer.removeChild(messageElement);
  }, 5000); 
};




const getUser = async () => {
  const response = await fetch(`/user/me`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des informations de lutilisateur');
  }
  return await response.json();
};

const getTickets = async () => {
  const user = await getUser();
  const response = await fetch(`/user/tickets/${user.id}`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des tickets de lutilisateur');
  }
  return await response.json();
};

const addTicket = async (showId) => {
  const user = await getUser();
  const ticketResponse = await fetch(`/user/takeTicket/${showId}/${user.id}`, { method: 'POST' });
  if (!ticketResponse.ok) {
    displayMessage('il reste plus de place pour ce spectacle');
    
  } else{
    BuyTicket(showId);
    updateShow(showId);
    displayTickets();
  }  
};

const updateShow = async (showId) => {
  const show = await getShow(showId);
  const showElem = document.getElementById(`show-${showId}`);
  const seatsElem = showElem.querySelector('.seats');
  seatsElem.textContent = show.places.toString();
}; 

  


const getShow = async (showId) => {
  const response = await fetch(`/shows/${showId}`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération du spectacle');
  }
  return await response.json();
}; 


  
  


const removeTicket = async (ticket) => {
  const user = await getUser();
  const shows = await getShows();
  const showId = shows.find(show => show.description === ticket.description)._id;
  const response = await fetch(`/user/removeTicket/${ticket._id}/${user.id}/${showId}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Erreur lors de la suppression du ticket');
  }
  updateShow(showId);
  displayTickets();
};

const getShowIdByDescription = async (description) => {
  const shows = await getShows();
  for (const show of shows) {
    if (show.description === description) {
      return show._id;
    }
  }
  return null;
};



const displayTickets = async () => {
  const ticketList = document.getElementById('ticket-list');
  ticketList.textContent = '';

  try {
    const tickets = await getTickets();
    const ticketCounts = {};

    tickets.forEach((ticket) => {
      ticketCounts[ticket.description] = (ticketCounts[ticket.description] || 0) + 1;
    });

    for (const [description, count] of Object.entries(ticketCounts)) {
      const ticketElem = document.createElement('li');
      ticketElem.textContent = `${description} (${count})`;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Supprimer';
      deleteButton.addEventListener('click', async () => {
        const ticket = tickets.find(ticket => ticket.description === description);
        await removeTicket(ticket);
      });

      ticketElem.appendChild(deleteButton);
      ticketList.appendChild(ticketElem);
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
};

const getShows = async () => {
  const response = await fetch('/shows/');
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des spectacles');
  }
  const shows = await response.json();
  const list = document.getElementById('spectacle-list');
  list.textContent = '';
  shows.forEach(show => list.appendChild(buildShow(show)));

  return shows;
};

const buildShow = show => {
  const elem = document.createElement('div');
  elem.className = 'show';
  elem.id = `show-${show._id}`; 

  const description = document.createElement('div');
  description.className = 'description';
  description.appendChild(buildTD(show.description, 'description'));
  elem.appendChild(description);

  const seats = document.createElement('div');
  seats.className = 'seats';
  seats.appendChild(buildTD(show.places, 'seats'));
  description.appendChild(seats);

  const buyButton = document.createElement('button');
  buyButton.textContent = 'buy +1';
  buyButton.className = 'buy-button';
  buyButton.addEventListener('click', () => {
      addTicket(show._id);
  });

  description.appendChild(buyButton);

  return elem;
};



const buildTD = (content, className) => {
  const TDelement = document.createElement('td');
  TDelement.textContent = content;
  TDelement.className = className;
  return TDelement;
};

const displayUser = (userData) => {
  document.querySelector('#user h1').textContent = `Bonjour ${userData.name} !`;
};

const logout = async () => {
  const response = await fetch(`/access/logout`, { method: 'GET' });
  if (response.ok) {
    window.location.href = '/';
  }
};

const handleError = error => {
  if (error.redirectTo) {
    window.location.href = error.redirectTo;
  } else {
    console.log(`erreur : ${error.message}`);
  }
};


function BuyTicket(showId){
  socket.emit('buy', showId);
}


const deleteTicketByDescription = async (description) => {
  try {
    const user = await getUser();
    const allTickets = await getTickets();
    const tickets = allTickets.filter(ticket => ticket.description === description);
    for (const ticket of tickets) {
      await removeTicket(ticket._id);
    }
    await displayTickets();
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
};










setup();
