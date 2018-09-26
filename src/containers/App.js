import fb from '../services/ApiClient.js';
import { updateListOrder } from '../domain/ListImagesSortable/ListEvents.js';
import { loadItemsforList } from '../domain/ListImagesSortable/ListEvents.js';
import initSortable from '../domain/sortable.js';
import Form from '../components/ListImagesSortable/Form.js';
import { List } from '../components/ListImagesSortable/List.js';

/**
 *
 * this class is for export load basics of components
 * the components is store on ~/src/components
 */

class App {
  init() {
    let element = document.createElement('div');

    element.setAttribute('class', 'row');
    element.setAttribute('id', 'rowMain');

    element.appendChild(Form());

    this.loadItems(element);

    return element;
  }

  loadItems(element) {
    let items = [];
    loadItemsforList(element, List, fb);
  }
}

export default new App();