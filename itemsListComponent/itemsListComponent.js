var app = angular.module("itemsListApp", []);


app.component("itemsListComponent", {
	templateUrl: "itemsListComponent/itemsListComponent.html",

    controller : function($scope,itemsFactory,cartFactory){
	
		$scope.cart = [];
		$scope.shoppingList = [];
		$scope.itemToShow ;
		$scope.isShowPopup = false;

		//fetch all items from the factory method
		 itemsFactory.getAllItemsList().then(function (response) {
			$scope.shoppingList = response.data;
		}, function (error) {
			$scope.shoppingList = [];
		});
		//add the selected item to cart
		$scope.addToCart = function (item) {
			$scope.cart.push(item);
			cartFactory.addtoCart($scope.cart);
		};
		//show details popup window
		$scope.showDetails = function(item){
			$scope.itemToShow = item;
			$scope.isShowPopup = true;
		};
		//hide the popup window on click of close
		$scope.hidePopup = function(){
			$scope.isShowPopup = false;
		}
		//fetch items added to cart
		$scope.getCartItems = function(){
			var cartItems = JSON.parse($localStorage.cartItems);
			return cartItems;
		}
	}
	
});
