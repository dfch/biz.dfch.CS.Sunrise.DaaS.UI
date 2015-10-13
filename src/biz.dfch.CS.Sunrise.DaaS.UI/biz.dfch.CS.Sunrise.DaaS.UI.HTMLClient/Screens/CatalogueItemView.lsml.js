/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.CatalogueItemView.deleteEntity_execute = function (screen) {
    deleteEntity(screen, "CatalogueItem");
};
myapp.CatalogueItemView.addToCart_execute = function (screen) {
    var title = "Add to cart";
    var messageAddedToCart = "Item added to cart.";

    if (null === screen || undefined === screen || (0 >= screen.length)) {
        console.log("addToCart: 'screen': Parameter validation FAILED.");
        return;
    }

    var catalogueItem = screen.CatalogueItem1;

    var cartItem = myapp.activeDataWorkspace.CoreData.CartItems.addNew();
    cartItem.Tid = "00000000-0000-0000-0000-000000000000";
    cartItem.Id = 0;
    cartItem.CreatedBy = "USER";
    cartItem.ModifiedBy = "USER";
    cartItem.Parameters = "";
    cartItem.Created = new Date();
    cartItem.Modified = new Date();

    cartItem.Name = catalogueItem.Name;
    cartItem.Description = catalogueItem.Description;
    cartItem.CartId = "0";
    cartItem.Quantity = 1;
    cartItem.CatalogueItemId = catalogueItem.Id;

    myapp.activeDataWorkspace.CoreData.saveChanges().then(function () {
        msls.showMessageBox(
            messageAddedToCart,
            {
                title: title,
                buttons: msls.MessageBoxButtons.ok
            }
        );
    });
};
