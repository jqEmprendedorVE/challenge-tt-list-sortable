import dragsort from 'dragsort';
import App from './containers/App.js';
import initEventHandler from './domain/eventHandlerApp.js';
import './styles/index.css';

/*
  This section is the main app for load components in the DOM
*/

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

/*
 Is load components is Ok, proceed to load eventHandler
*/

loadComponents.then(() => {
  initEventHandler();
});