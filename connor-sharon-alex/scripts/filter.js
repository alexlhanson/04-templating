'use strict';

let filters = [];

function Filter(filterDataObj) {

  for (let key in filterDataObj) {
    this[key] = filterDataObj[key];
  }

}

Filter.prototype.toHtml = function() {
  let template = $('#filter-template').html();
  let templateRender = Handlebars.compile(template);

  return templateRender(this);
}

filterData.forEach(filterObj => {
  filters.push(new Filter(filterObj));
});

filters.forEach(filter => {
  $('#filters').append(filter.toHtml());
});