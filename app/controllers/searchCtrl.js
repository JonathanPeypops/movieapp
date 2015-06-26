angular.module('movieApp.controllers')
    .controller('searchCtrl', searchCtlr);

function searchCtlr($scope, $http, apiUrl, $log, $location) {

    $scope.message = "Hello World";
    $scope.searchMovie = function (title) {
        $log.debug(title);

        var url = apiUrl + 'Movies/search?title=' + title;

        $http.get(url).success(function (data) {
            $scope.results = data;
        });

        $scope.selectMovie = function (id) {
            $scope.selectedId = id;
        }

        $scope.addMovie = function(id){
            var url = apiUrl + 'Movies/' +id;
            $http.post(url).success(function(){
                $location.url('/collection');
            })
        }
    }
};