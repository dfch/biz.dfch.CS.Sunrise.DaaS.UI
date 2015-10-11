/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.CatalogueView.addToCart_execute = function (screen) {

    var title = "Add to cart";
    var messageNotSelected = "No entity selected. Cannot delete entity.";
    var messageAddedToCart = "Item added to cart.";

    if (null === screen || undefined === screen || (0 >= screen.length)) {
        console.log("addToCart: 'screen': Parameter validation FAILED.");
        return;
    }

    var selectedCatalogueItem = screen.CatalogueItems.selectedItem;

    if (!selectedCatalogueItem) {
        msls.showMessageBox(
            messageNotSelected,
            {
                title: title,
                buttons: msls.MessageBoxButtons.ok
            }
        );
        return;
    }

    var cartItem = myapp.activeDataWorkspace.CoreData.CartItems.addNew();
    cartItem.Tid = "00000000-0000-0000-0000-000000000000";
    cartItem.Id = 0;
    cartItem.CreatedBy = "USER";
    cartItem.ModifiedBy = "USER";
    cartItem.Parameters = '{}';
    cartItem.Created = new Date();
    cartItem.Modified = new Date();

    cartItem.Name = selectedCatalogueItem.Name;
    cartItem.CartId = "0";
    cartItem.Quantity = 1;
    cartItem.CatalogueItemId = selectedCatalogueItem.Id;

    myapp.activeDataWorkspace.CoreData.saveChanges().then(function ()
    {
        msls.showMessageBox(
            messageAddedToCart,
            {
                title: title,
                buttons: msls.MessageBoxButtons.ok
            }
        );
    });
};
myapp.CatalogueView.addToCart_canExecute = function (screen) {
    return null !== screen.CatalogueItems.selectedItem;
};