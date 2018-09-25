function initSortable(updateListOrder) {
  $('#listItems').dragsort({
      dragSelector: 'li',
      dragSelectorExclude: 'a',
      dragEnd: updateListOrder, 
      dragBetween: false,
      placeHolderTemplate: '<li></li>'
  });
};

export default initSortable;