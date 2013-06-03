define(['backbone', 'model/nav'],
function(Backbone, Nav) {
  return Backbone.Collection.extend({
    model: Nav
  });
});
