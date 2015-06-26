angular.module('movieApp.controllers')
    .controller('searchCtrl', searchCtlr);

function searchCtlr($scope, $http, apiUrl, $log) {

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
        $log.debug('run');
    }
};