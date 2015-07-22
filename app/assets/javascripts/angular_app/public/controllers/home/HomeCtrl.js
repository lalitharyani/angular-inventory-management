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
  
  //get all products for db
  $scope.products = Product.query();

 /* $scope.isUserAuthenticated = function(){
    Auth.isAuthenticated();     
  };*/
  
  //Add new Product
  $scope.addProduct = function(){
    
    var new_product = {};
  	//Create the product object to send to the back-end
  	new_product = new Product($scope.product);
  	new_product.$save($scope.product, function (productResponse) {

  		if(productResponse['status'] == "success"){
        $window.alert(productResponse['msg']);
  			$location.path("/admin");

  		}else if(productResponse['status'] == "error"){
        $window.alert(productResponse['msg']);
  		}      
      
    });
 

  };


}]);
