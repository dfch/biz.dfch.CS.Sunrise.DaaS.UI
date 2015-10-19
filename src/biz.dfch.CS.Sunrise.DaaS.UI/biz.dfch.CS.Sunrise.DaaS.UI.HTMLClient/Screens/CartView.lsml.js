/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.CartView.deleteEntity_execute = function (screen) {
    deleteEntity(screen, "Cart");
};

myapp.CartView.checkoutCart_execute = function (screen) {
    var message = "Sure you want to checkout?";
    var title = "Checkout Cart";

    var order = myapp.activeDataWorkspace.CoreData.Orders.addNew();

    order.Tid = "00000000-0000-0000-0000-000000000000";
    order.Id = 0;
    order.CreatedBy = "USER";
    order.ModifiedBy = "USER";
    order.Parameters = '{}';
    order.Created = new Date();
    order.Modified = new Date();

    order.Name = "DefaultOrder";

    msls.showMessageBox(
        message,
        {
            title: title,
            buttons: msls.MessageBoxButtons.yesNo
        }
    ).then(function (result) {
        if (result == msls.MessageBoxResult.yes) {
            myapp.activeDataWorkspace.CoreData.saveChanges().then(function() {
                    msls.showMessageBox(
                        "Order has been placed",
                        {
                            title: "Order",
                            buttons: msls.MessageBoxButtons.ok
                        }
                    );
                },
                function fail(e) {
                    msls.showMessageBox(e.message,
                    {
                        title: "Order has been placed",
                        buttons: msls.MessageBoxButtons.ok
                    }).then(
                        function(result) {
                            myapp.cancelChanges();
                            //throw e;
                            myapp.showHome(msls.BoundaryOption, null);
                        }
                    );
                });
        }
    });

    //myapp.activeDataWorkspace.CoreData.saveChanges().then(function () {
    //    msls.showMessageBox(
    //        "Order has been placed",
    //        {
    //            title: "Order",
    //            buttons: msls.MessageBoxButtons.ok
    //        }
    //    );
    //}
    //,
    //function fail(e) {
    //    msls.showMessageBox(e.message,
    //    {
    //        title: "Order has been placed",
    //        buttons: msls.MessageBoxButtons.ok
    //    }).then(
    //            function (result)
    //            {
    //                myapp.cancelChanges();
    //                //throw e;
    //                myapp.showHome(msls.BoundaryOption, null);
    //            }
    //        );
    //});
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