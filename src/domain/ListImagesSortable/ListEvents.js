import initSortable from '../sortable.js';

export const updateListOrder = (db) => {
  let current_list  = document.querySelectorAll('#listItems');

  if(current_list.length !== 0)
    console.log(current_list[0].children);

  console.log('Drag End');
}

export const loadItemsforList = (element, List, fb) => {
  fb.db().ref('items').once('value',snapshot=>{
    let res = snapshot.val();
    let _items = [];

    if(!res) return [];

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

export const initListEvents = (fb) => {
}

export default {
  updateListOrder,
  initListEvents,
  loadItemsforList
};