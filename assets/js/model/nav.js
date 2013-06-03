define(['backbone'],
function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      href: '',
      text: ''
    }
  });
});
