/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.CartItemView.deleteEntity_execute = function (screen) {
    deleteEntity(screen, "CartItem");
};

myapp.CartItemView.goToCatalogueItem_execute = function (screen) {
    var selectedCartItem = screen.CartItem;

    var filter = "(Id eq " + parseInt(selectedCartItem.CatalogueItemId) + ")";

    myapp.activeDataWorkspace.CoreData.CatalogueItems.filter(filter).execute().then(function (result) {
        var catalogueItem = result.results[0];
        myapp["showCatalogueItemView"](catalogueItem);
    },
    onCatalogueItemLoadingFailed
    );
};

function onCatalogueItemLoadingFailed(e) {
    var title = "Loading failed";
    var fetchItemToApproveFailedMessage = "Unable to load catalogue item";

    msls.showMessageBox(
        fetchItemToApproveFailedMessage
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
