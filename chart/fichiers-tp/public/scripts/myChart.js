
const nbValues = 12;
const defaultValue = 1;
const MIN_VALUE = 0;
const MAX_VALUE = 10;


const allLabels = new Array(nbValues).fill(defaultValue).map( (_,i) => String.fromCharCode('A'.charCodeAt(0)+i));
//const allLabels = ['J','F','M','A','M','J','J','A','S','O','N','D'];


const ctxt = document.getElementById('myChart').getContext('2d');

// l'objet Chart
const myChart = new Chart(ctxt, {
    type: 'bar',
    data: {
        labels: allLabels,
        datasets: [{
            label : `mes ${nbValues} dernières données`,
            data :  new Array(nbValues).fill(defaultValue),
            backgroundColor: 'rgba(128,255,128,0.5)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
              min: MIN_VALUE,
              max: MAX_VALUE
            }
      }
    }
  });


const socket = io();
socket.emit('connection',socket);
socket.on('ping', (usr) => {
  console.log(`ping received from ${usr.id}`); 
  //socket.emit('pong', socket.id);
  console.log(`je suis le user avec l'ID suivant : ${socket.id}`);
});



socket.on('donnee', (newData) => handleData(myChart, newData))

function handleData(chart, newData) {
  console.log(`received data : ${newData}`)
  //removeData(chart);
  addData(chart, newData);
}

function addData(chart, newData) {
  const lastLabel = chart.data.labels[chart.data.labels.length - 1];
  for (let i = chart.data.labels.length - 1; i > 0; i--) {
    chart.data.labels[i] = chart.data.labels[i - 1];
  }
  chart.data.labels[0] = lastLabel;

  chart.data.datasets.forEach((dataset) => {
    for (let i = dataset.data.length - 1; i > 0; i--) {
      dataset.data[i] = dataset.data[i - 1];
    }
    dataset.data[0] = newData;
  });

  chart.update();
}



function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
    dataset.data.shift();
  });
  chart.update();
}