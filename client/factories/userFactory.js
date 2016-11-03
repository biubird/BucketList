App.factory('UserFactory', function($http){
  var factory = {};
  var loggedInUser;

  factory.getUser = function(){
    return loggedInUser;
  }
  factory.getUserById = function(id){
    return $http.get(`/users/${id}`)
  }
  factory.getUsers = function(){
    return $http.get('/users')
  }
  factory.createUser = function(newUser){
    return $http.post('/users', newUser)
      .then( function(serverResponse){
        loggedInUser = serverResponse.data;
        console.log(loggedInUser);
      })
  }
  return factory;
})
