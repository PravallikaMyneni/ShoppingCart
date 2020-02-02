var app = angular.module("itemsListApp", []);


app.component("itemsListComponent", {
	templateUrl: "itemsListComponent/itemsListComponent.html",

    controller : function($scope,$http){
	
		$scope.cart = [];
		$scope.shoppingList = [];
		$http.get('sampledata.json').then(function (response) {
			$scope.shoppingList = response.data;
		}, function (error) {
			$scope.shoppingList = [];
		});

		$scope.addToCart = function (item) {
			$scope.cart.push(item);
		};
	}
	
});
