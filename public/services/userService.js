angular.module('sogetiDevs').service('userService', ['$http','ENV', function ($http,ENV){

  return {
    getUsers: function(){
      return $http.get(ENV.apiUrl+'/users');
    },
    addUser : function(user){
      return $http.post(ENV.apiUrl+'/user',user);
    },
    removeUser : function(id){
      return $http.delete(ENV.apiUrl+'/user/' + id);
    },
    getUser : function(id){
      return $http.get(ENV.apiUrl+'/user/' + id);
    },
    updateUser : function(user){
      return $http.put(ENV.apiUrl+'/user/' + user.id,user);
    }
  };
}]);
