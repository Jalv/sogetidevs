/**
 * Created by Joe on 14/4/16.
 */
angular.module('sogetiDevs').controller('dashboardController',['$scope','$http','userService',function($scope,$http,userService){

userService.getUsers().then(function(res){
    $('#example').DataTable({
      data : res.data,
      columns : [
      { "data": "username"},
      { "data": "name"}
    ]
    });
});

}]);
