'use strict';

let articleView = {};

// TODO: Where possible, refactor methods into arrow functions, including the document.ready() method at the bottom.

// COMMENT: How do arrow functions affect the context of "this"? How did you determine if a function could be refactored? 
// Arrow functions inherits the context of the 'this' in which it is being called.  A new function call reassigns the 'this' context. Also, in prototype methods it is better to use function so you do not lose contextual this. 

articleView.populateFilters = () => {
  $('article').each(function () {
    if (!$(this).hasClass('template')) {

      for (let key in $(this).data()) {
        let val = $(this).attr(`data-${key}`);
        let optionTag = `<option value="${val}">${val}</option>`;

        if ($(`${key} option[value="${val}"]`).length === 0) {
          $(`#${key}`).append(optionTag);
        }
      }
    }
  });
};

articleView.handleMainNav = () => {
  $('nav').on('click', '.tab', function (e) {
    e.preventDefault();
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('nav .tab:first').click();
};

articleView.setTeasers = () => {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function (e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      }, 200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};

$(document).ready(() => {
  articleView.populateFilters();
  articleView.handleMainNav();
  articleView.setTeasers();
})
