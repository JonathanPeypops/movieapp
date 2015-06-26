angular.module('movieApp.controllers', ['ngRoute'])
    .constant('apiUrl', 'http://angularmoviebackend.azurewebsites.net/api/')

    .config(function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'app/views/home.html'
        })

        $routeProvider.when('/search', {
            templateUrl: 'app/views/search.html', controller: 'searchCtrl'
        })

        $routeProvider.when('/collection', {
            templateUrl: 'app/views/collection.html', controller: 'collectionCtrl'
        })

        $routeProvider.otherwise({redirectTo: '/home'})
    })