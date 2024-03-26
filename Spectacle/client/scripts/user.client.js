const socket = io();



const setup = async () => {
  try {
    const userData = await getUser();
    displayUser(userData);
    await Promise.all([getShows(), displayTickets()]);
    document.getElementById('logout').addEventListener('click', logout);
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }

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
    throw new Error('Erreur lors de la prise de ticket');
  }
  displayTickets();
};

const removeTicket = async (ticketId) => {
  const user = await getUser();
  const response = await fetch(`/user/removeTicket/${ticketId}/${user.id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Erreur lors de la suppression du ticket');
  }
  displayTickets();
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
        const ticketId = tickets.find(ticket => ticket.description === description)._id;
        await removeTicket(ticketId);
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
};

const buildShow =  show => {
  const elem = document.createElement('tr');
  elem.className = 'show';
  elem.appendChild(buildTD(show.description, 'description'));
  elem.appendChild(buildTD(show.places, 'seats'));

  const buyButton = document.createElement('button');
  buyButton.textContent = 'buy +1';
  buyButton.className = 'buy-button';
  buyButton.addEventListener('click', () => {
    addTicket(show._id);
  });

  elem.appendChild(buyButton);

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

setup();
