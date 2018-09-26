import _ from 'lodash';
import initSortable from '../sortable.js';
import fb from '../../services/ApiClient.js';
import { List } from '../../components/ListImagesSortable/List.js';
import { scrollToTop } from '../../util/index.js';


/**
 *
 * this function is for update order of list after make it 
 * some sort with drag and drop
 */


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

/* load inicial data for app and in case reload */

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

/* function for edit Item */

export function editItem(id, downloadURL, description) {
  descriptionImg.value = description;
  getImageFromPc.value = '';
  idItem.value = id;
  prevImgForm.setAttribute('src', downloadURL);
  setDescription.setAttribute('style', 'display:block');
  setImage.setAttribute('style', 'display:none');

  scrollToTop(1000);

}

/* function for delete item */
export function deleteItem(id) {
  fb.db().ref(`items/${id}`).remove().then(()=>{
    rowMain.removeChild(document.getElementById('listColumn'));
    loadItemsforList(rowMain, List, fb);
  });
}

export const initListEvents = (fb) => {
  // is mantain in case of add new listener of elements
}

export default {
  updateListOrder,
  initListEvents,
  loadItemsforList,
  editItem,
  deleteItem
};