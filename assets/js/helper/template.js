define(['underscore', 'jquery'],
function(_, $) {
  return function template(selector) {
    var html = ($(selector).html() || '').trim();
    var tpl = _(html).unescape();
    return _(tpl).template();
  };
});
