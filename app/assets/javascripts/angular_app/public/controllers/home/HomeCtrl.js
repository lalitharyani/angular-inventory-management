'use strict';

var app = angular.module('InventoryManagement');
app.controller('HomeCtrl', ['Auth', '$scope', 'Product', '$location', '$http', 'SearchProduct', function(Auth, $scope, Product, $location, $http, SearchProduct){
  
   $scope.products = [];
  //fetch current logged in user on page init
  $scope.init = function () {
  	Auth.currentUser().then(function(user) {
       $scope.user = user
    }, function(error) {
        // unauthenticated error
    });  
   }

  $scope.init();
  
  
  //search products for user input
  $scope.search = function(q){

    SearchProduct.getData(q, 'search').success(function(data){
      $scope.products = data;
    });

  };


}]);
