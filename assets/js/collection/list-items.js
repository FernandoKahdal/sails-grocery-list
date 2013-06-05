define(['backbone', 'model/list-item'],
function(Backbone, ListItem) {
  return Backbone.Collection.extend({
    model: ListItem,
    url: function() {
      return this.id ? '/list-item/' + this.id : '/list-item';
    }
  });
});
