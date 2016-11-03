App.factory('ListFactory', function($http){
  var factory = {};

  factory.getLists = function(){
    return $http.get('/lists')
  }
  factory.createList = function(newList){
    return $http.post('/lists', newList)
  }
  // factory.updateList = function(updateList){
  //   return $http.post('/lists', updateList)
  // }
  return factory;
})
