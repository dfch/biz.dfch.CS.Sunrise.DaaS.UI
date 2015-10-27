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
    cartItem.Parameters = "";
    cartItem.Created = new Date();
    cartItem.Modified = new Date();

    cartItem.Name = selectedCatalogueItem.Name;
    cartItem.Description = selectedCatalogueItem.Description;
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