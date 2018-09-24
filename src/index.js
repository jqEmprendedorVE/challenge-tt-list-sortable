import dragsort from 'dragsort';
import App from './containers/App.js';
import initEventHandler from './domain/eventHandlerApp.js';
import './styles/index.css';

let loadComponents = new Promise((resolve, reject) => {
  try {
    document.body.appendChild(App.init());
    return resolve();
  }
  catch(e) {
    throw 'Fallo la carga de la UI';
    return reject();
  }
});

loadComponents.then(() => {
  initEventHandler();
});