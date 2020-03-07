var app = angular.module("itemsListApp", ['ngStorage']);


app.component("itemsListComponent", {
	templateUrl: "itemsListComponent/itemsListComponent.html",

    controller : function($scope,itemsFactory,cartFactory,$localStorage){
	
		$scope.cart = cartFactory.getCartItems();
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
			cartFactory.addtoCart(item);
			$scope.cart = cartFactory.getCartItems();
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
		//check if given item is added to cart
		$scope.checkItemInCart = function(id){
			var cartItems = cartFactory.getCartItems();
			var isExists = false;
			for(var i=0;i< cartItems.length;i++){
				if(cartItems[i].ID === id){
					isExists = true;
					break;
				}
			}
			return isExists;
		}
	}
	
});
