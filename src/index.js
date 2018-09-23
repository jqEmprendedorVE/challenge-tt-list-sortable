import dragsort from 'dragsort';

import App from './components/App.js';
import initSortable from './domain/sortable.js';
import './styles/index.css';

let loadComponents = new Promise((resolve, reject) => {
  try {
    document.body.appendChild(App());
    return resolve();
  }
  catch(e) {
    throw 'Fallo la carga de la UI';
    return reject();
  }
});

loadComponents.then(() => {
  initSortable();
});