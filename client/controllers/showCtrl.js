App.controller('ShowController', function($scope, UserFactory, ListFactory, $location, $routeParams){
  $scope.user = UserFactory.getUser();
  $scope.users = [];
  $scope.lists = [];

  function getLists(){
    ListFactory.getLists()
    .then( function(serverResponse){
      $scope.lists = serverResponse.data;
    })
  }
  getLists();

  function getUsers(){
    UserFactory.getUsers()
    .then( function(serverResponse){
      $scope.users = serverResponse.data;
    })
  }
  getUsers();

  function getUserById(){
    UserFactory.getUserById($routeParams.id)
    .then( function(serverResponse){
      $scope.user = serverResponse.data;
      console.log(serverResponse.data);
    })
  }
  getUserById($routeParams.id);

})
