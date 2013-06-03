define(['backbone'],
function (Backbone) {
  return Backbone.Router.extend({
    routes: {
      '': '',
      'lists': 'lists',
      'profile': 'profile'
    },
    '': function() {
      console.log('root route');
    },
    lists: function() {
      console.log('lists');
    },
    profile: function() {
      console.log('profile');
    }
  });
});
