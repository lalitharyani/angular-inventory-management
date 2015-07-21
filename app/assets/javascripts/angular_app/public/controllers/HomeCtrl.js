var app = angular.module('InventoryManagement');
app.controller('HomeCtrl', ['Auth', '$scope', '$window', function(Auth, $scope, $window){

   console.log(user.isAuthenticated());   


  $scope.getCurrentUser = function(){
    Auth.currentUser().then(function(user) {
        
       $scope.user = user

    }, function(error) {
        // unauthenticated error
    });  

  };

  $scope.isUserAuthenticated = function(){
    Auth.isAuthenticated();     
  };




}]);
