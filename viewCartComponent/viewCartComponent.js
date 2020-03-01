var app = angular.module("viewCartApp", []);
app.component("viewCart", {
    
    templateUrl: "viewCartComponent/viewCart.html",
    controller :function($scope,cartFactory){
        $scope.ItemsList;
        var itemsInCart = cartFactory.getCartItems();
        if(itemsInCart.length>0){
            $scope.ItemsList = itemsInCart;
        } else{
            $scope.ItemsList = [];
        }

    }
});