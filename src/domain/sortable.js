function initSortable(updateListOrder) {
  $('#listItems').dragsort({
      dragSelector: 'li',
      dragEnd: updateListOrder, 
      dragBetween: false,
      placeHolderTemplate: '<li></li>'
  });
};

export default initSortable;