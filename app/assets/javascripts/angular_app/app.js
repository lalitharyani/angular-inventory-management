var app = angular.module('InventoryManagement', ['templates', 'ngResource', 'ngRoute', 'Devise', 'public.ctrl.signIn',
  'public.ctrl.sessions']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/angular_views/landing/landing.html',
      controller: 'HomeCtrl'

    }).when('/admin', {
      templateUrl: '/angular_views/admin/index.html',
      controller: 'AdminCtrl'
      
    }).when('/new', {
      templateUrl: '/angular_views/admin/new.html',
      controller: 'AdminCtrl'
      
    }).when('/edit/:id', {
      templateUrl: '/angular_views/admin/edit.html',
      controller: 'AdminCtrl'
      
    })
    .when('/sign_in', {
      templateUrl: '/angular_views/sign_in/sign_in.html'
    });

}]);