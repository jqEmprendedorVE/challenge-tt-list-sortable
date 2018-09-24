import initSortable from './sortable.js';
import initFormEvents from './ListImagesSortable/FormEvents.js';
import fb from '../services/ApiClient.js';

function initEventHandler() {
  initSortable();
  initFormEvents(fb);
}

export default initEventHandler;