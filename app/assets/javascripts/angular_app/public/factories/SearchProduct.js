//Factory for Search Products from DB
app.factory('SearchProduct', function($http) {
 return{
    getData : function(q, url) {
      return $http({
	      method: "post",
	      url: "home/"+url,
	      data: { query: q }
      });
    }
  }
});