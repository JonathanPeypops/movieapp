angular.module('movieApp.controllers')
    .controller('collectionCtrl', collectionCtrl);

function collectionCtrl($scope, $http, apiUrl){
    var url = apiUrl + 'Movies';
    $http.get(url).success(function(data){
        $scope.movies = data;
    })
}