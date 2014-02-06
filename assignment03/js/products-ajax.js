$(document).ready(function() {
 doPager();
});

function doPager() {
 $('.pager a').click(function(e) {
  e.preventDefault();
  loadProducts($(this).attr('href'));
 });
}

function loadProducts(url) {
 $('#outer').empty().addClass('loading').load(url + ' #inner', function() {
  $('#outer').removeClass();
  doPager();
 });
}