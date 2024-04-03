const socket = io();

socket.emit('adminConnected');


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
  const elem = document.createElement('tr');
  elem.className = 'show';
  elem.id = `show-${show._id}`;
  elem.appendChild(buildTD(show.description, 'description'));
  elem.appendChild(buildTD(show.places, 'seats'));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Supprimer';
  deleteButton.className = 'delete-button';
  deleteButton.addEventListener('click', () => {
    socket.emit('deleteShow', show.description);
    deleteShow(show._id); 
  } );

  elem.appendChild(deleteButton);

  return elem;
}

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
      console.log(response.description);
    } else {
      const errorData = await response.json();
      displayMessage(`Erreur : ${errorData.message}`);
    }
  } catch (error) {
    console.error(`Erreur : ${error.message}`);
  }

  
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