var app = angular.module("shoppingApp", ['ngRoute','itemsListApp','itemApp','detailsPopupApp','viewCartApp','ngStorage']);
app.config(function($routeProvider) {
    $routeProvider.when('/',{
        template : '<items-list-component></items-list-component>'
    }).when('/viewCart',{
        template : '<view-cart></view-cart>'
    });
});

app.factory('itemsFactory', ['$http',function ($http) {
    var itemsFactoryObj = {};
    itemsFactoryObj.getAllItemsList = function () {
        return $http.get('sampledata.json');
    }
   
    return itemsFactoryObj;
}]);

app.factory('cartFactory', ['$localStorage',function ($localStorage) {
    var itemsFactoryObj = {};
    itemsFactoryObj.addtoCart = function (items) {
        $localStorage.cartItems = JSON.stringify(items);
    }
    itemsFactoryObj.getCartItems = function () {
        if($localStorage.cartItems){
            return JSON.parse($localStorage.cartItems) ;
        } else{
            return [];
        }
        
    }
   
    return itemsFactoryObj;
}]);


