var app = angular.module("itemsListApp", []);


app.component("itemsListComponent", {
	templateUrl: "itemsListComponent/itemsListComponent.html",

    controller : function($scope,$http,itemsFactory){
	
		$scope.cart = [];
		$scope.shoppingList = [];

		//fetch all items from the factory method
		 itemsFactory.getAllItemsList().then(function (response) {
			$scope.shoppingList = response.data;
		}, function (error) {
			$scope.shoppingList = [];
		});
		//add the selected item to cart
		$scope.addToCart = function (item) {
			$scope.cart.push(item);
		};
	}
	
});
