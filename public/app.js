/**
 * Created by Joe on 14/4/16.
 */
var myApp = angular.module('sogetiDevs', ['ngRoute','config']);

myApp.config(function($routeProvider) {
    $routeProvider
    
        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'dashboardController'
        })

        .when('/about', {
            templateUrl : 'templates/about.html',
            controller  : 'aboutController'
        })

        .when('/tech', {
            templateUrl : 'templates/tech.html',
            controller  : 'techController'
        })

        .when('/projects', {
            templateUrl : 'templates/projects.html',
            controller  : 'projectController'
        })

        // route for the contact page
        .when('/users', {
            templateUrl : 'templates/users.html',
            controller  : 'userController'
        });
});
