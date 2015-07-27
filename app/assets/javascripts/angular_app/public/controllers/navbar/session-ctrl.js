( function() {
  'use strict';

  angular.module('public.ctrl.sessions', []).controller('sessionCtrl', ['Auth', '$scope', '$location', '$window',
    function(Auth, $scope, $location, $window) {
      // Check on load if user signed in
      Auth.currentUser().then(function(user) {
        $scope.isAuthenticated = true;
      }, function(error) {
        // Log on console to check out what the error is.
      });

      $scope.$on('devise:login', function(event, currentUser) {
        $scope.isAuthenticated = true;
        $scope.isAdmin = currentUser.admin;
        // You can get data of current user (getting user's name and etc.)
        
        //alert(currentUser.name);
      });

      $scope.$on('devise:new-session', function(event, currentUser) {
        $scope.isAuthenticated = true;
        $scope.isAdmin = currentUser.admin;
      });

      $scope.$on('devise:logout', function(event, oldCurrentUser) {
        $scope.isAuthenticated = false;
      });

      $scope.$on('devise:new-registration', function(event, user) {
        $scope.isAuthenticated = true;
      });

      this.getCurrentUser = function(){
        Auth.currentUser().then(function(user) {
           
            $scope.user = user
        }, function(error) {
            // unauthenticated error
        });     
    };

      this.logout = function() {
        Auth.logout().then(function(oldUser) {
          alert("Successfully logged out!");
          $window.location.href = "/";
        }, function(error) {
          // An error occurred logging out.
        });
      }
    }
  ]);
})();