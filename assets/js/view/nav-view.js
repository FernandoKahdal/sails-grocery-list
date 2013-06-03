define(['backbone', 'view/nav-item-view'],
function(Backbone, NavItemView) {
  return Backbone.View.extend({
    className: 'navbar',
    tagName: 'ul',
    initialize: function initialize() {
      this.listenTo(this.collection, 'change', this.render);
    },
    render: function render() {
      this.$el.empty();
      this.collection.each(function(model) {
        this.$el.append(new NavItemView({model: model}).render().el);
      }, this);
      return this;
    }
  });
});