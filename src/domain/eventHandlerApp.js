// import initSortable from './sortable.js';
import initFormEvents from './ListImagesSortable/FormEvents.js';
import { initListEvents } from './ListImagesSortable/ListEvents.js';
import fb from '../services/ApiClient.js';


/**
 *
 * Load the principal events from modules, created to set diferent events from app
 *
 */

function initEventHandler() {
  // initSortable();
  initFormEvents(fb);
  initListEvents(fb);
}

export default initEventHandler;