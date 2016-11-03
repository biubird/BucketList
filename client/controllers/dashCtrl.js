App.controller('DashController', function($scope, UserFactory, ListFactory, $location, $routeParams){
  $scope.user = UserFactory.getUser();
  $scope.users = [];
  $scope.lists = [];

  function getUsers(){
    UserFactory.getUsers()
    .then( function(serverResponse){
      $scope.users = serverResponse.data;
    })
  }
  getUsers();

  function getLists(){
    ListFactory.getLists()
    .then( function(serverResponse){
      $scope.lists = serverResponse.data;
    })
  }
  getLists();

  $scope.createList = function(){
    ListFactory.createList($scope.newList)
    .then( function(serverResponse){
      console.log(serverResponse.data)
      $scope.newList = {};
      getLists();
      $location.path('/dashboard');
    })
    .catch( function(error){
      console.log(error)
    })
  }
  // $scope.updateList = function(){
  //   ListFactory.updateList($scope.updateList)
  //   .then( function(serverResponse){
  //     console.log(serverResponse.data)
  //     $scope.updateList = {};
  //     getLists();
  //     $location.path('/dashboard');
  //   })
  //   .catch( function(error){
  //     console.log(error)
  //   })
  // }
})
