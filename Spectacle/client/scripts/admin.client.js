const socket = io();


const setup = () => {
  
  socket.on('showBought', (showId) => {
    updateShowAvailability(showId);
  });
  getShows();
}


const getShows = async () => {
  const response = await fetch('/shows/');
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des spectacles');
  }
  const shows = await response.json();
  const list = document.getElementById('spectacles');
  list.textContent = '';
  shows.forEach(show => list.appendChild(buildShow(show)));
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
  const seatsData = buildTD(show.places, 'seats');
  seats.appendChild(seatsData);
  description.appendChild(seats);

  const buyButton = document.createElement('button');
  buyButton.textContent = 'buy +1';
  buyButton.className = 'buy-button';
  buyButton.addEventListener('click', async () => {
      try {
          await addTicket(show._id);
          const updatedShow = await getShow(show._id);
          seatsData.textContent = updatedShow.places.toString();
      } catch (error) {
          console.error(error);
      }
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

const createShow = async () => {
  try {
    const description = document.getElementById('description').value;
    const places = document.getElementById('seats').value;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description, places })
    };

    const response = await fetch('/shows/', requestOptions);

    if (response.ok) {
      getShows();
    } else {
      const errorData = await response.json();
      displayMessage(`Erreur : ${errorData.message}`);
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
};


const deleteShow = async (showId) => {
  try {
    const requestOptions = {
      method: 'DELETE'
    };
    const response = await fetch(`/shows/${showId}`, requestOptions);

    if (response.ok) {
      getShows();
    } else {
      const errorData = await response.json();
      displayMessage(`Erreur : ${errorData.message}`);
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }

  socket.emit('deleteShow', showId);
};


const logout = async () => {
  try {
    const response = await fetch(`/access/logout`, { method: 'GET' });
    if (response.ok) {
      window.location.href = '/';
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }
};

const createButton = document.getElementById('submit-spectacle');
createButton.addEventListener('click', createShow);
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', logout);





const updateShowAvailability = (showId) => {
  const showElement = document.getElementById(show-showId);
  if (showElement) {
    fetch(`/shows/${showId}`)
      .then(response => response.json())
      .then(show => {
        const seatsElement = showElement.querySelector('.seats');
        seatsElement.textContent = show.places;
      })
      
      .catch(error => console.error(`Erreur : ${error.message}`));
  }
};




setup();