( function() {
  'use strict';

  angular.module('public.ctrl.signIn', [])
  .controller('signInCtrl', ['Auth','$scope', '$location',
    function(Auth, $scope, $location) {
      this.credentials = { email: '', password: '' };

      this.signIn = function() {
        // Code to use 'angular-devise' component
        Auth.login(this.credentials).then(function(user) {

          if(user.admin){
            $location.path("/admin");
          }else{
            $location.path("/");
          }

          //alert(Auth.isAuthenticated());
        }, function(error) {
          console.info('Error in authenticating user!');
          alert('Error in signing in user!');
        });
      }
    }
    
  ]);

})();