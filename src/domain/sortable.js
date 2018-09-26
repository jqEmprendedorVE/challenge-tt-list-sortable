/**
 *
 * function util sort list items to enable drag and drop
 *
 */

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