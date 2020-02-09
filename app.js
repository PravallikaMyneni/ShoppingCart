var app = angular.module("shoppingApp", ['ngRoute','itemsListApp','itemApp']);
app.config(function($routeProvider) {
    $routeProvider.when('/',{
        template : '<items-list-component></items-list-component>'
    }).when('/itemDetails/:itemId',{
        template : '<item-details></item-details>'
    });
});


