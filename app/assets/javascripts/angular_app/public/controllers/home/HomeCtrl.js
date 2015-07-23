'use strict';

var app = angular.module('InventoryManagement');
app.controller('HomeCtrl', ['Auth', '$scope', '$window', 'Product', '$location', function(Auth, $scope, $window, Product, $location){
  
  //fetch current logged in user on page init
  $scope.init = function () {
  	Auth.currentUser().then(function(user) {
       $scope.user = user
    }, function(error) {
        // unauthenticated error
    });  
   }

  $scope.init();
  
  /*//get all products for db
  $scope.products = Product.query();*/


}]);
