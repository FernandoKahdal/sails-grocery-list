define(['backbone', 'helper/template'],
function(Backbone, template) {
  return Backbone.View.extend({
    template: template('#list-template'),
    className: 'list',
    tagName: 'li',
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
});
