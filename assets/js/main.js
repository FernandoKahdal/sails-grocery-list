requirejs.config({
  baseUrl: 'assets/js',
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  },
  paths: {
    backbone: '../../lib/backbone',
    underscore: '../../lib/underscore',
    jquery: '../../lib/jquery'
  }
});

require(['backbone','router/app-router','collection/nav-collection','view/navigation-view'],
function (Backbone,AppRouter,NavCollection,NavigationView) {
  var links = new NavCollection([
    {href: '#lists', text: 'Lists'},
    {href: '#profile', text: 'Profile'}
  ]);
  var navView = new NavigationView({
    collection: links
  });
  var router = new AppRouter();
  Backbone.history.start();

  navView.render();
});
