var app = angular.module("shoppingApp", ['ngRoute','itemsListApp','itemApp','detailsPopupApp','viewCartApp','ngStorage']);
app.config(function($routeProvider) {
    $routeProvider.when('/',{
        template : '<items-list-component></items-list-component>'
    }).when('/viewCart',{
        templateUrl : '/cartPage/cartPage.html'
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
    itemsFactoryObj.addtoCart = function (item) {
        var cartItems = itemsFactoryObj.getCartItems();
        cartItems.push(item);
        $localStorage.cartItems = JSON.stringify(cartItems);
    }
    itemsFactoryObj.getCartItems = function () {
        if($localStorage.cartItems){
            return JSON.parse($localStorage.cartItems) ;
        } else{
            return [];
        }
        
    }
    itemsFactoryObj.removeItemFromCart = function(itemId){
        var items = JSON.parse($localStorage.cartItems);
        var filteredItems = items.filter(function(rec){
            if(rec.ID !== itemId){
                return rec;
            }
        });
        $localStorage.cartItems = JSON.stringify(filteredItems);
    }
   
    return itemsFactoryObj;
}]);


