﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.CartItemPersonalAdd.created = function (screen) {

    var catalogueItemName = "VDI Personal";
    var fetchCatalogueItemFailedMessage = "No catalogue item with Name '" + catalogueItemName + "' available";
    var title = "Add to cart failed";

    screen.CartItem.Tid = "00000000-0000-0000-0000-000000000000";
    screen.CartItem.Id = 0;
    screen.CartItem.CreatedBy = "USER";
    screen.CartItem.ModifiedBy = "USER";
    screen.CartItem.Created = new Date();
    screen.CartItem.Modified = new Date();

    screen.CartItem.CartId = "0";
    screen.CartItem.Quantity = 1;

    // Get catalogueItemId of 'VDI Personal'
    var filter = "(Name eq " + msls._toODataString(catalogueItemName, ":String") + ")";

    myapp.activeDataWorkspace.CoreData.CatalogueItems.filter(filter).execute().then(function(result) {

        screen.CartItem.CatalogueItemId = result.results[0].Id;;
    },
    function fail(e) {
        msls.showMessageBox(
            fetchCatalogueItemFailedMessage
            ,
            {
                title: title
                ,
                buttons: msls.MessageBoxButtons.ok
            }).then(function (result) {
                myapp.cancelChanges();
                throw e;
            });
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