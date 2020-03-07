var app = angular.module("viewCartApp", []);
app.component("viewCart", {
    
    templateUrl: "viewCartComponent/viewCart.html",
    controller :function($scope,cartFactory){
        $scope.ItemsList;
        
        //fetch the items added into cart
        $scope.getCartItemsList = function(){
            var itemsInCart = cartFactory.getCartItems();
            if(itemsInCart.length>0){
                $scope.ItemsList = itemsInCart;
            } else{
                $scope.ItemsList = [];
            }
        }
        $scope.getCartItemsList();

        //remove an item from the cart
        $scope.onClickOfRemove = function(id){
            cartFactory.removeItemFromCart(id);
            $scope.getCartItemsList();
        }

    }
});