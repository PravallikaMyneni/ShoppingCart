app.component("itemDetails", {
    
    templateUrl: "itemDetailsComponent/itemDetails.html",
    controller : function($scope,$routeParams,itemsFactory){
        $scope.itemId = $routeParams.itemId;
            $scope.itemDetails = {};
            //fetch all items from the factory method
            itemsFactory.getAllItemsList($scope.itemId).then(function (response) {
                var itemsList = response.data;
                $scope.itemDetails = itemsList.filter(function (item) {
                    if (item.ID === $scope.itemId) {
                        return item;
                    }
                });
                console.log($scope.itemDetails);

            }, function (error) {
                $scope.itemDetails = {};
            });
      
    }
});