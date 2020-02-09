app.component("itemDetails", {
    
    templateUrl: "itemDetailsComponent/itemDetails.html",
    bindings:{item:'='},
    controller : function($scope,$routeParams){
        $scope.itemId = $routeParams.itemId;
        console.log($scope.itemId);
    }
});