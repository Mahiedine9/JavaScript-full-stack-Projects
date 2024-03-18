


const getShows = async () => {
    const list = document.getElementById('spectacles-list');
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
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => deleteShow(show._id)); 
    elem.appendChild(deleteButton);
  
  
    return elem;
}
  
  
const buildTD = (content, className) => {
    const TDelement = document.createElement('td');
    TDelement.textContent = content;
    TDelement.className = className;
    return TDelement;
}


const createShow = async () => {

    const description = document.getElementById('description').value;
    const places = document.getElementById('seats').value;
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description, places })
    };
  
    const response = await fetch('/shows/', requestOptions);
  
    if (response.ok) {
      const result = await response.json();
      
      getShows(); 
    } else {
      const errorData = await response.json();
      displayMessage(`Erreur : ${errorData.message}`);
    }
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
  
const createButton = document.getElementById('submit-spectacle');
createButton.addEventListener('click', createShow);
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', logout);


getShows();
