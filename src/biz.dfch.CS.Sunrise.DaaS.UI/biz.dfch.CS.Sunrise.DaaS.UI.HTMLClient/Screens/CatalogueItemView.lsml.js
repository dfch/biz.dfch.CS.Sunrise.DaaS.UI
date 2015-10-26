/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.CatalogueItemView.deleteEntity_execute = function (screen) {
    deleteEntity(screen, "CatalogueItem");
};

myapp.CatalogueItemView.navigateToProduct_execute = function (screen) {

    var selectedCatalogueItem = screen.CatalogueItem1;
    var noItemSelectedMessage = "No item selected. Select item and retry operation";

    if (!selectedCatalogueItem) {
        msls.showMessageBox(noItemSelectedMessage, {
            title: "Refresh",
            buttons: msls.MessageBoxButtons.ok
        });
    }
    else
    {
        navigateToProduct(screen);
    }
};

function navigateToProduct(screen) {

    var selectedCatalogueItem = screen.CatalogueItem1;

    // Get product by Id
    var filter = "(Id eq " + selectedCatalogueItem.ProductId + ")";
    myapp.activeDataWorkspace.CoreData.Products.filter(filter).execute().then(function (result) {
        var product = result.results[0];
        myapp["showProductView"](product);
    },
    onProductLoadingFailed);
};

function onProductLoadingFailed(e) {
    var title = "Loading failed";
    var fetchProductFailedMessage = "An error occured while trying to navigate to the product";

    msls.showMessageBox(
        fetchProductFailedMessage
        ,
        {
            title: title
            ,
            buttons: msls.MessageBoxButtons.ok
        }).then(function (result) {
            myapp.cancelChanges();
            throw e;
        });
}

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

/**
 * Copyright 2015 d-fens GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
