var app = angular.module("detailsPopupApp", []);

app.component("detailsPopup", {
    templateUrl: "detailsPopupComponent/detailsPopup.html",
    bindings:{
        itemDetails : '<',
        hidePopup : '&'
	}
});