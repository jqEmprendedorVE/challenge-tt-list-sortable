import fb from '../services/ApiClient.js';
import { updateListOrder } from '../domain/ListImagesSortable/ListEvents.js';
import initSortable from '../domain/sortable.js';

import Form from '../components/ListImagesSortable/Form.js';
import List from '../components/ListImagesSortable/List.js';

class App {
  init() {
    let element = document.createElement('div');

    element.setAttribute('class', 'row');

    element.appendChild(Form());

    this.loadItems(element);

    return element;
  }

  loadItems(element) {
    let items = [];

    fb.db().ref('items').once('value',snapshot=>{
      let res = snapshot.val();
      let _items = [];

      if(!res) return;

      Object.keys(res).forEach(i=>{
        _items.push({
          id: i,
          downloadURL: res[i].downloadURL,
          description: res[i].description
        });
      });

      element.appendChild(List(_items));

      if(_items.length === 0) return;

      initSortable(updateListOrder);

    });

    return [];

  }
}

export default new App();