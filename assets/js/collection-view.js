define(['backbone'],
function(Backbone) {
  var emptyView = Backbone.View.extend({});
  return Backbone.View.extend({
    initialize: function initialize() {
      this.itemView = this.itemView || emptyView;
      this.listenTo(this.collection, 'change', this.render);
    },
    render: function render() {
      this.$el.empty();
      this.collection.each(function(model) {
        this.$el.append(new this.itemView({model: model}).render().el);
      }, this);
      return this;
    }
  });
});