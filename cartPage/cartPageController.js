var cartApp = angular.module("cartPageApp", []);

cartApp.controller('cartPageCtrl',['$scope','cartFactory',function($scope,cartFactory){
    $scope.cartItems = cartFactory.getCartItems();
    $scope.totalItems = $scope.cartItems.length;
    $scope.totalCost = $scope.cartItems.reduce(function(cost,currObj){
        cost = cost + parseInt(currObj.Price);
        return cost;
    },0);
    //update the total cost on removal of any item
    $scope.updatePrice = function(){
        $scope.cartItems = cartFactory.getCartItems();
        $scope.totalItems = $scope.cartItems.length;
        $scope.totalCost = $scope.cartItems.reduce(function(cost,currObj){
            cost = cost + parseInt(currObj.Price);
            return cost;
        },0);
    };
}]);