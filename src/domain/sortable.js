function initSortable() {
  $('#listItems').dragsort({
      dragSelector: 'li',
      dragEnd: function() {
          let current_list  = document.querySelectorAll('#listItems');

          if(current_list.length !== 0)
            console.log(current_list[0].children);

          console.log('Drag End');
      }, 
      dragBetween: false,
      placeHolderTemplate: '<li></li>'
  }); 
};

export default initSortable;