
const setup = () => {
  getShows();
  displayTickets();
  document.getElementById('logout').addEventListener('click', logout);
}



window.addEventListener('DOMContentLoaded', setup);


const getUser = async () => {
  try {
    const requestOptions = {
      method: 'GET', 
    };
    const response = await fetch(`/user/me`, requestOptions);
    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      throw new Error('Erreur lors de la récupération des informations de lutilisateur');
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
};

const getTickets = async (userId) => {
  try {
    const response = await fetch(`/user/tickets/${userId}`, { method: 'GET' }); 
    if (response.ok) {
      const tickets = await response.json();
      return tickets;
    } else {
      throw new Error('Erreur lors de la récupération des tickets de lutilisateur');
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
};


const addTicket = async (showId) => {
  try {
    const userData = await getUser();
    const userId = userData.id; 
    const ticketResponse = await fetch(`/user/takeTicket/${showId}/${userId}`, { method: 'POST' }); 
    if (ticketResponse.ok) {
      return true; 
    } else {
      throw new Error('Erreur lors de la prise de ticket');
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
    return false; 
  }
};

const displayTickets = async () => {
  const ticketList = document.getElementById('ticket-list');
  ticketList.textContent = ''; 

  try {
    const userData = await getUser(); 
    const userId = userData.id; 
    const tickets = await getTickets(userId); 

    tickets.forEach((ticket) => {
      const ticketElem = document.createElement('li');
      ticketElem.textContent = ticket.description;
      ticketList.appendChild(ticketElem);
    });
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
};




const getShows = async () => {
  const list = document.getElementById('spectacle-list');
  list.textContent = '';
  const requestOptions = {
     method: 'GET'
  };
  const response = await fetch('/shows/', requestOptions);
  const shows = await response.json();

  shows.forEach(show => list.appendChild(buildShow(show)));
}


const buildShow = show => {
  const elem = document.createElement('tr');
  elem.className = 'show';
  elem.appendChild(buildTD(show.description, 'description'));
  elem.appendChild(buildTD(show.places, 'seats'));

  const buyButton = document.createElement('button');
  buyButton.textContent = 'buy +1';
  buyButton.className = 'buy-button';
  buyButton.addEventListener('click', () =>{
    addTicket(show._id);
    displayTickets();
  }); 
  
  elem.appendChild(buyButton);

  return elem;
}


const buildTD = (content, className) => {
  const TDelement = document.createElement('td');
  TDelement.textContent = content;
  TDelement.className = className;
  return TDelement;
}


const logout = async () => {
  const requestOptions = {
                         method :'GET',
                       };
  const response = await fetch(`/access/logout`, requestOptions);
  if (response.ok) {
    window.location.href= '/';
  }
}

const handleError = error => {
  if (error.redirectTo)
    window.location.href= error.redirectTo;
  else
    console.log(`erreur : ${error.message}`);
}

















