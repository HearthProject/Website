(function ($) {
    $(function () {
        $(".button-collapse").sideNav({
            edge: 'right',
            closeOnClick: !0
        })
    })
})(jQuery);
var app = angular.module('hearthProject', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/index.html'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    }).when('/launcher', {
        templateUrl: 'views/launcher.html'
    }).when('/download', {
        templateUrl: 'views/alpha.html',
        controller: 'DownloadsController'
    })
});
app.controller('LoginController', function ($scope) {});
app.controller('PacksController', function ($scope) {});
app.controller('DownloadsController', function ($scope, $http) {
    $scope.windows = {};
    $scope.linux = {};
    $http({
        method: 'GET',
        url: '/data/win32.json'
    }).then(function successCallback(response) {
        var data = response.data;
        var versionNumber = Object.keys(data.versions)[0];
        var version = data.versions[Object.keys(data.versions)[0]];
        version.version = versionNumber;
        $scope.windows = version;
    }, function errorCallback(response) {
        throw response
    });
    $http({
        method: 'GET',
        url: '/data/linux.json'
    }).then(function successCallback(response) {
        console.log(response.data.downloads);
        var data = response.data;
        var versionNumber = Object.keys(data.versions)[0];
        var version = data.versions[Object.keys(data.versions)[0]];
        version.version = versionNumber;
        $scope.linux = version;
    }, function errorCallback(response) {
        throw response
    });
})