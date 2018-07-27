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

// filterView.handleAuthorFilter = () => {
//   $('#author-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $(`article[data-author="${$(this).val()}"]`).fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $(this).siblings().val('');
//   });
// };

// filterView.handleCategoryFilter = () => {
//   $('#category-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $(`article[data-category="${$(this).val()}"]`).fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $('#author-filter').val('');
//   });
// };

$(document).ready(() => {
  filterView.handleFilter();

})