var app = angular.module('InventoryManagement');
app.controller('HomeCtrl', ['Auth', '$scope', '$window', function(Auth, $scope, $window){


 $scope.getCurrentUser = function(){
    Auth.currentUser().then(function(user) {
        
      $scope.user = user
    }, function(error) {
        // unauthenticated error
    });     
};



}]);
