define(['backbone', 'model/store'],
function(Backbone, Store) {
  return Backbone.Collection.extend({
    model: Store,
    url: function() {
      return this.id ? '/store/' + this.id : '/store';
    }
  });
});
