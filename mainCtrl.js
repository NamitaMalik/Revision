/**
 * Created by namita on 2/18/16.
 */

/*
What is module?
Module is container of different parts of app - controller,services,filters, directives.

The empty array in angular.module('myApp', []). This array is the list of modules myApp depends on.

 Break your application to multiple modules like this:

 -> A module for each feature
 -> A module for each reusable component (especially directives and filters)
 -> And an application level module which depends on the above modules and contains any initialization code.

Module is collection of run and config blocks:

1. Configuration block - get executed during the provider registrations and configuration phase.
Only providers and constants can be injected into configuration blocks.

2. Run block - get executed after the injector is created and are used to kickstart the application.
Only instances and constants can be injected into run blocks. ( to execute before controller)
*/


var myApp = angular.module('myApp', []);
myApp.controller('ParentController', ['$scope', '$rootScope', function ($scope, $rootScope) {


/* $emit

- Dispatches event name upwards in the scope hierarchy
- Event lifecycle starts at the scope on which it is called
- Afterwords, event traverses upwards toward the rootscope and calls all registered listeners along the way
- Event will stop propogating if one of the listeners cancels it



 */

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

myApp.controller('PromiseController',['$scope','$q',function($scope,$q){
    function add(x,y){
        var q = $q.defer();
        setTimeout(function(){
            var result =  x+y;
            if(result>=0){
                q.resolve(x+y);
            }
            else{
                q.reject('negative value: '+result);
            }
        },1000);
        return q.promise;
    }

    $scope.callingFunction = function(){
        add(-5,-2)
            .then(function(result){
                return add(result,3);
            })
            .then(function(result){
                return add (result,-5);
            })
            .then(function(result){
                $scope.result = result;
            })
            .catch(function(failure){
                $scope.failure = failure;
            })
    }

}]);

/* Filters in Angular JS

HTML:

 <div class="image-cols" ng-repeat="thumbs in images | imageFilter:showInActiveImages">
 <img ng-src="{{thumbs.value}}" ng-click="popupImage($index)">
 </div>

 Filter:

 app.filter('imageFilter', function (tabService) {
 return function (images, showInActiveImages) {
 if (tabService.activeTab != "Thumbnail" && showInActiveImages === 1) {
 var activeImages = [];
 angular.forEach(images, function (image) {
 if (image.status) {
 activeImages.push(image);
 }
 });
 return activeImages;
 }
 return images;
 };
 });

 --> tabService is the service which is sharing some data. It has been injected.
 --> left side of | is the first argument, while right side after : is the second argument
 --> Examples of in-built filters: currency, filter, number, json, orderBy

Directives:

--> restrict --> 'ELEMENT' , 'CLASS', 'COMMENT' , 'ATTRIBUTE'
--> template
--> templateUrl
--> link(scope,elem,attr)
--> compile
--> scope --> {} - Isolated , true - inherited , false - same scope
--> transclude

 */