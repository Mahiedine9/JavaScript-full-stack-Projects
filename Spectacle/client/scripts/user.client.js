const socket = io();

const setup = async () => {
  const userData = await getUser();
  socket.emit('identify', userData);
  socket.on('userData', (user) => {
    document.querySelector('#user h1').textContent = `Bonjour ${user.name} !`;
    displayTickets(user.id);
  });
  getShows();

  document.getElementById('logout').addEventListener('click', logout);

}



window.addEventListener('DOMContentLoaded', setup);

const getUser2 = async () => {
  try {
    if (userData) {
      // Si les données de l'utilisateur existent déjà, retournez-les directement
      return userData;
    } else {
      // Sinon, effectuez une requête pour récupérer les données de l'utilisateur
      const requestOptions = {
        method: 'GET',
      };
      const response = await fetch(`/user/me`, requestOptions);
      if (response.ok) {
        userData = await response.json();
        return userData;
      } else {
        throw new Error('Erreur lors de la récupération des informations de lutilisateur');
      }
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
};



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


const removeTicket = async (ticketId) => {
  try {
    console.log('Ticket ID:', ticketId);
    const userData = await getUser();
    const userId = userData.id;
    const requestOptions = {
      method: 'DELETE',
    };
    const response = await fetch(`/user/removeTicket/${ticketId}/${userId}`, requestOptions);
    if (response.ok) {
      return true;
    } else {
      throw new Error('Erreur lors de la suppression du ticket');
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
    return false;
  }
};



const displayTickets = async (userId) => {
  const ticketList = document.getElementById('ticket-list');
  ticketList.textContent = '';

  try {
    const tickets = await getTickets(userId);

    tickets.forEach((ticket) => {
      const ticketElem = document.createElement('li');
      ticketElem.textContent = ticket.description;
      ticketList.appendChild(ticketElem);
      const delButton = document.createElement('button');
      delButton.textContent = 'buy -1';
      delButton.className = 'del-button';
      delButton.addEventListener('click', () => {
        removeTicket(ticket._id);
        displayTickets(userId);
      });
      ticketElem.appendChild(delButton);

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
  buyButton.addEventListener('click', () => {
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
    method: 'GET',
  };
  const response = await fetch(`/access/logout`, requestOptions);
  if (response.ok) {
    window.location.href = '/';
  }
}

const handleError = error => {
  if (error.redirectTo)
    window.location.href = error.redirectTo;
  else
    console.log(`erreur : ${error.message}`);
}

















