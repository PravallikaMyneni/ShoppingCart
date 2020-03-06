var app = angular.module("itemApp", []);

app.component("itemComponent", {
    
	templateUrl: "itemComponent/itemComponent.html",
	bindings:{
		shopItem : '<',
		intoCart : '&',
		viewDetails : '&',
		checkForItemCart : '&'

	},
	
});
