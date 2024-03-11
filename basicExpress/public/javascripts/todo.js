const displayMessage = msg => document.getElementById('content').textContent = msg;

const setup = () => {
  displayMessage('prêt');
}

const getTasks = async () => {
  const list = document.getElementById('list');
  list.textContent = '';
  const requestOptions = {
     method: 'GET'
  };
  const response = await fetch('/task/', requestOptions);
  const tasks = await response.json();

  tasks.forEach(task => list.appendChild(buildTask(task)) );
}

const buildTask = task => {
  const taskElement = document.createElement('tr');
  taskElement.className = 'task';
  taskElement.appendChild(buildTD(task.description, 'description'));
  taskElement.appendChild(buildTD(task.urgency, 'urgency'));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Supprimer';
  deleteButton.className = 'delete-button';
  deleteButton.addEventListener('click', () => deleteTask(task._id)); // Appel à la fonction deleteTask
  taskElement.appendChild(deleteButton);


  return taskElement;
}


const buildTD = (content, className) => {
  const TDelement = document.createElement('td');
  TDelement.textContent = content;
  TDelement.className = className;
  return TDelement;
}




const deleteTask = async taskId => {
  const requestOptions = {
    method: 'DELETE'
  };

  const response = await fetch(`/task/${taskId}`, requestOptions);

  if (response.ok) {
    const result = await response.json();
    displayMessage(`La tâche avec l'ID ${taskId} a été supprimée.`);
    getTasks();
  } else {
    displayMessage('Erreur lors de la suppression de la tâche.');
  }
}


const createTask = async () => {

  const description = document.getElementById('desc').value;
  const urgency = document.getElementById('urgency').value;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description, urgency })
  };

  const response = await fetch('/task/', requestOptions);

  if (response.ok) {
    const result = await response.json();
    displayMessage(`Tâche créée avec succès. ID de la tâche : ${result._id}`);
    getTasks(); 
  } else {
    const errorData = await response.json();
    displayMessage(`Erreur : ${errorData.message}`);
  }
}

const createButton = document.getElementById('create');
createButton.addEventListener('click', createTask);



getTasks();

// go !
setup();
