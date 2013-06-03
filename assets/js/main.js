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
    jquery: '../../lib/jquery',
  }
});

require(['backbone','router/app-router'],
function (Backbone,AppRouter){
  var router = new AppRouter();
  Backbone.history.start({pushState: true});
});
