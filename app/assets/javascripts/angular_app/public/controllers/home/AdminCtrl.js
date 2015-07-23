'use strict';

var app = angular.module('InventoryManagement');
app.controller('AdminCtrl', ['Auth', '$scope', '$window', 'Product', '$location', '$routeParams', 
  function(Auth, $scope, $window, Product, $location, $routeParams){
  
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
  
  //if admin comes from edit product
  if($routeParams.id){
    var product = Product.get({ id: $routeParams.id }, function() {
      $scope.product = product
    }); // get() returns a single entry
  }



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
  
  //Delete product from DB
  $scope.deleteProduct = function(product){

    if (confirm("Are you sure want to delete this product ?")) {

      product.$delete($scope.product.id, function(productResponse) {

        if(productResponse['status'] == "success"){
          $window.alert(productResponse['msg']);
          $location.path("/admin");

        }else if(productResponse['status'] == "error"){
          $window.alert(productResponse['msg']);
        } 
     
      });
      
    }

  };

  //update Existing Product
  $scope.updateProduct = function(product){

    product.$update($scope.product, function (productResponse) {

      if(productResponse['status'] == "success"){
        $window.alert(productResponse['msg']);
        $location.path("/admin");

      }else if(productResponse['status'] == "error"){
        $window.alert(productResponse['msg']);
      }      
      
    });

  };




}]);
