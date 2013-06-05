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

require(['backbone','router/app-router','collection/navs','view/navigation'],
function (Backbone,AppRouter,NavCollection,NavigationView) {
  var links = new NavCollection([
    {href: '#lists', text: 'Lists'},
    {href: '#stores', text: 'Stores'}
  ]);
  var navView = new NavigationView({
    collection: links
  });
  var router = new AppRouter();
  Backbone.history.start();

  navView.render();
});
