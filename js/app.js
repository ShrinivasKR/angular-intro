/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

angular.module('AngularDemo', [])
    .controller('HelloController', function($scope){
       $scope.person = {
           firstName:null,
           lastName:null
       };
    })
    .controller('MoviesController', function($scope){
        $scope.movies = movies;
    });
