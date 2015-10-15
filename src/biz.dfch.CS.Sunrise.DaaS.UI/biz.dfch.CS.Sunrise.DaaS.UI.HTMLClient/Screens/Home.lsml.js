/// <reference path="~/GeneratedArtifacts/viewModel.js" />
var height = 130;
var width = 130;

myapp.Home.Endpoints_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-expand', { height: height, width: width });
};
myapp.Home.Configuration_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-gears', { height: height, width: width });
};
myapp.Home.Orders_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-list-ul', { height: height, width: width });
};
myapp.Home.Approvals_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-eye', { height: height, width: width });
};
myapp.Home.Jobs_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-fast-forward', { height: height, width: width });
};
myapp.Home.NewOrder_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-cart-plus', { height: height, width: width });
};
myapp.Home.OrderItems_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-database', { height: height, width: width });
};
myapp.Home.Gates_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-lock', { height: height, width: width });
};
myapp.Home.Carts_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-shopping-cart', { height: height, width: width });
};
myapp.Home.Catalogues_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-files-o', { height: height, width: width });
};
myapp.Home.Inventory_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-folder', { height: height, width: width });
};
myapp.Home.AddPersonalVDI_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-desktop', { height: height, width: width });
};
myapp.Home.AddTechnicalVDI_postRender = function (element, contentItem) {
    $(element).spOverlay(contentItem, 'fa-group', { height: height, width: width });
};
