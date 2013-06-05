define(['backbone', 'collection/stores', 'collection/lists', 'view/stores', 'view/lists'],
function (Backbone, Stores, Lists, StoresView, ListsView) {
  var collections = {
    stores: new Stores([
      {id: 1, name: 'Giant'},
      {id: 2, name: 'Safeway'},
      {id: 3, name: 'Target'}
    ]),
    lists: new Lists([
      {id: 1, name: 'Giant List', storeId: 1},
      {id: 2, name: 'Safeway List', storeId: 2},
      {id: 3, name: 'Alternate List', storeId: 2},
      {id: 4, name: 'Party Favors', storeId: 3}
    ])
  }
  var $content = $('#content');
  return Backbone.Router.extend({
    routes: {
      '': '',
      'lists(/:id)': 'lists',
      'stores(/:id)': 'stores'
    },
    '': function() {
      $content.empty();
    },
    lists: function(id) {
      $content.empty();
      if( id === null ) {
        var view = new ListsView({collection: collections.lists});
        $content.html(view.render().el);
      } else {
      }
    },
    stores: function(id) {
      $content.empty();
      if( id === null ) {
        var view = new StoresView({collection: collections.stores});
        $content.html(view.render().el);
      } else {
      }
    }
  });
});
