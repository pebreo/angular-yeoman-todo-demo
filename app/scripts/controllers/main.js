'use strict';

// angular.module('ang2App')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });

angular.module('ang2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];   

  })
  .controller('MyCtrl', function($scope) {
    $scope.todos = [
    {text:'eat more veggies', done:true},
    {text:'build an angular app', done:false}];  
    
    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.todoText, done:false});
        $scope.todoText = '';
    }; 
  });
