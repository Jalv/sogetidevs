/**
 * Created by Joe on 14/4/16.
 */

angular.module('sogetiDevs').controller('userController',['$scope','$http','userService',function($scope,$http,userService){

    console.log("userController");

    var refresh = function() {
        console.log("GetUsers");
        userService.getUsers().then(function(response){
          $scope.userlist = response.data;
          $scope.user="";
        });

    };

    refresh();

    $scope.addUser = function() {
        console.log("add User");
        userService.addUser($scope.user).then(function(response){
          console.log(response.data);
          refresh();
        });
    };

    $scope.remove = function(id) {
        console.log("removeUser");
        userService.removeUser(id).then(function(response){
          console.log(response);
          refresh();
        });

    };

    $scope.edit = function(id){
        console.log("editUser");
        userService.getUser(id).then(function(response){
          console.log(response.data);
          $scope.user = response.data;
        });
    };

    $scope.update = function(){
        console.log("updateUser");
        userService.updateUser($scope.user).then(function(response){
          console.log(response);
          refresh();
        });

    };

    $scope.deselect = function(){
        $scope.user= "";
    }








}]);
