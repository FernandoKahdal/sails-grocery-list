define(['backbone', 'model/list'],
function(Backbone, List) {
  return Backbone.Collection.extend({
    model: List,
    url: function() {
      return this.id ? '/list/' + this.id : '/list';
    }
  });
});
