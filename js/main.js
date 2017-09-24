(function($){
    $(function(){
        $(".button-collapse").sideNav({edge: 'right', closeOnClick: true});
    }); // end of document ready
})(jQuery); // end of jQuery name space
var app = angular.module('hearthProject', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/index.html'}).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    }).when('/client', {templateUrl: 'views/client.html'}).when('/download', {
        templateUrl: 'views/alpha.html',
        controller: 'DownloadsController'
    });
});
app.controller('LoginController', function ($scope) {
});
app.controller('PacksController', function ($scope) {
});
app.controller('DownloadsController', function ($scope, $http) {
    $scope.versions = [];
    $http({method: 'GET', url: '/data/download.json'}).then(function successCallback(response) {
        console.log(response.data['downloads']);
        var data = response.data;
        for (var version in data['downloads']) {
            console.log(data['downloads'][version]);
            $scope.versions.push(data['downloads'][version]);
        }
        console.log($scope.versions);
    }, function errorCallback(response) {
        throw response;
    });
});