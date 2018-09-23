function initSortable() {
  $('ul').dragsort({
      dragSelector: 'li',
      dragEnd: function() {
          console.log('Drag End');
      }, 
      dragBetween: false,
      placeHolderTemplate: '<li></li>'
  }); 
};

export default initSortable;