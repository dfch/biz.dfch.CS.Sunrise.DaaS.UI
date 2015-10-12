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