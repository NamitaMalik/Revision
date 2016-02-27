/**
 * Created by namita on 2/18/16.
 */

var myApp = angular.module('myApp', []);
myApp.controller('ParentController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.clickMe = function () {
        $scope.$broadcast('parentEvent', 'Data from Parent Controller');
    };

    $scope.$on('parentEvent', function (event, data) {
        $scope.parentsOwnData = data;
    });

    $scope.$on('childEvent', function (event, data) {
        $scope.parentData = data;
    });

    $rootScope.$on('rootScope:emit',function(event,data){
        $scope.secondChildDatainParent = data;
    });
}]);

myApp.controller('ChildController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('parentEvent', function (event, data) {
        $scope.childData = data;
    });
    $scope.clickMe = function () {
        $scope.$emit('childEvent', 'Data from Child Controller');
    };

    $scope.$on('childEvent', function (event, data) {
        $scope.childEventsOwnData = data;
    });

    $scope.$on('rootScope:broadcast', function (event, data) {
        $scope.firstChildData = data;
    });

    $rootScope.$on('rootScope:emit',function(event,data){
        $scope.secondChildDatainFirst = data;
    });

}]);

myApp.controller('SecondChildController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$on('parentEvent', function (event, data) {
        $scope.secondChildData = data;
    });
    $scope.$on('childEvent', function (event, data) {
        $scope.secondChildData = data;
    });
    $scope.clickMe = function () {
        $rootScope.$broadcast('rootScope:broadcast', 'Broadcast through RootScope!');
    };
    $scope.clickToEmit = function () {
        $rootScope.$emit('rootScope:emit', 'Emit through RootScope!');
    }

}]);