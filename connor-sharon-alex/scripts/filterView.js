'use strict';

let filterView = {}

filterView.handleFilter = () => {
  $('#filters').on('change', 'select', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-${$(this).attr('id')}="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
    }
    $(this).parent().siblings().children().val('');
  });
};

$(document).ready(() => {
  filterView.handleFilter();

})