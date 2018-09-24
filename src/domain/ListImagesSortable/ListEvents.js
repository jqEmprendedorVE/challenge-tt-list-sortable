export const updateListOrder = (db) => {
  let current_list  = document.querySelectorAll('#listItems');

  if(current_list.length !== 0)
    console.log(current_list[0].children);

  console.log('Drag End');
}

export const initListEvents = (fb) => {
  console.log('List Events');
}

export default {
  updateListOrder,
  initListEvents
};