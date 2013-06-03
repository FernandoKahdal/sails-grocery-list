define(['backbone', 'view/nav-view'],
function(Backbone, NavView) {
  return Backbone.View.extend({
    el: $('#navigation'),
    render: function render() {
      var view = new NavView({collection: this.collection});
      this.$el.append(view.render().el);
      return this;
    }
  });
});
