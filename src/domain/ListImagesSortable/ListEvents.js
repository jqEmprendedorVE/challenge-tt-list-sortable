import _ from 'lodash';
import initSortable from '../sortable.js';
import fb from '../../services/ApiClient.js';
import { List } from '../../components/ListImagesSortable/List.js';

export const updateListOrder = () => {
  let current_list  = document.querySelectorAll('#listItems');

  if(current_list.length !== 0){
    let items = {};
    let _items = {};
    let count = 0;

    current_list.forEach(e => {
      var list = e.getElementsByTagName("li");
      Object.keys(list).forEach(i => {
        var item = JSON.parse(list[i].dataset.item)
        items[item.id] = {
          downloadURL: item.downloadURL,
          description: item.description,
          order: count++
        };
      });
    });

    fb.db().ref('items').set(items);
  }
}

export const loadItemsforList = (element, List, fb) => {
  fb.db().ref('items').orderByChild('order').once('value',snapshot=>{
    if(!snapshot.val()) return;

    let _items = [];
    let res = snapshot.val();

    Object.keys(res).forEach(i=>{
      _items.push({
        id: i,
        order: res[i].order,
        downloadURL: res[i].downloadURL,
        description: res[i].description
      });
    });
    _items.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0));

    element.appendChild(List(_items));

    if(_items.length === 0) return;

    initSortable(updateListOrder);

  });

  return [];
}

export function deleteItem(id) {
  fb.db().ref(`items/${id}`).remove().then(()=>{
    rowMain.removeChild(document.getElementById('listColumn'));
    loadItemsforList(rowMain, List, fb);
  });
}

export const initListEvents = (fb) => {

}

export default {
  updateListOrder,
  initListEvents,
  loadItemsforList,
  deleteItem
};