'use strict';

var app = angular.module('InventoryManagement');
app.controller('HomeCtrl', ['Auth', '$scope', 'Product', '$location', '$http', 'SearchProduct', function(Auth, $scope, Product, $location, $http, SearchProduct){
  
   $scope.products = [];
   $scope.lastSearched = [];
   var prod = {};

   //fetch products those are in stock
   $scope.products = Product.query({ out_of_stock: false });

   // for last searched items
    for( prod in localStorage ) {
      $scope.lastSearched.push( angular.fromJson( localStorage[prod] ) );
    }
   

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

    var existing_product = {};
    var new_product = {};
    $scope.lastSearched = [];

    SearchProduct.getData(q, 'search').success(function(data){
      
      //clear previous search from local storage
      localStorage.clear();
      
      //add new search data in local storage
      angular.forEach(data, function(new_product) {
        localStorage.setItem( "product" +new_product.id, JSON.stringify(new_product) );
     });

      $scope.products = data;

      // for last searched items
      for( prod in localStorage ) {
        $scope.lastSearched.push( angular.fromJson( localStorage[prod] ) );
      }
            
   });


  };
  
  //add product in local storage
  $scope.addCart = function(productID){
    $scope.productID = productID
    $scope.status = "added";
    localStorage.setItem( 'addProduct' +productID, JSON.stringify(productID) );

    button_label = "Remove from Cart"

  };

  //remove product in local storage
  $scope.removeCart = function(productID){

  };




}]);
