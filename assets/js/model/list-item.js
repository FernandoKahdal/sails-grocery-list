define(['backbone'],
function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      name: '',
      count: 0,
      ailse: null
    }
  });
});
