﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ApprovalView.approve_execute = function (screen) {

    myapp.showApprovalApprove
        (
            screen.Approval
            ,
            {
                beforeShown: function(myscreen) 
                {
                    if (screen.Approval.Status != "Created") {
                        msls.showMessageBox("Request has already been processed. Cannot proceed.",
                            {
                                title: "Error"
                                ,
                                buttons: msls.MessageBoxButtons.ok
                            });
                    }
                }
            }
        );
};

myapp.ApprovalView.decline_execute = function (screen) {
    if (screen.Approval.Status != "Created")
    {
        msls.showMessageBox("Request has already been processed. Cannot proceed.",
            {
                title: "Error"
                ,
                buttons: msls.MessageBoxButtons.ok
            });
    }
    else
    {
        msls.showMessageBox("Sure, you want to decline the request?",
            {
                title: "Decline?"
                ,
                buttons: msls.MessageBoxButtons.yesNo
            }
        ).then(function (result) {
            if (result == msls.MessageBoxResult.yes) {
                screen.Approval.Status = "Declined";
                return myapp.commitChanges().then(null, function fail(e) {
                    msls.showMessageBox(e.message,
                        {
                            title: e.title
                            ,
                            buttons: msls.MessageBoxButtons.ok
                        }).then(function (result) {
                            myapp.cancelChanges();
                            throw e;
                        });
                }
                );
            }
        }
        );
    }
};

myapp.ApprovalView.refresh_execute = function (screen) {
    if (!screen.Approval) {
        msls.showMessageBox("No item selected. Select item and retry operation.", {
            title: "Refresh",
            buttons: msls.MessageBoxButtons.ok
        });
    } else {
        screen.Approval.details.refresh();
    }
};

myapp.ApprovalView.deleteEntity_execute = function (screen) {
    deleteEntity(screen, "Approval");
};

myapp.ApprovalView.goToReferencedObject_execute = function (screen) {

    var selectedApproval = screen.Approval;
    var approvalJobTypeSuffix = "Approval";

    var title = "Loading failed";

    var noItemSelectedMessage = "No item selected. Select item and retry operation";
    var fetchJobFailedMessage = "An error occured while trying to navigate to the object the approval references to";
    var fetchItemToApproveFailedMessage = "Unable to fetch item to approve";

    if (!selectedApproval) {
        msls.showMessageBox(noItemSelectedMessage, {
            title: "Refresh",
            buttons: msls.MessageBoxButtons.ok
        });
    } else {

        // Get job of selected approval
        var filter = "(endswith(Name, " + msls._toODataString(approvalJobTypeSuffix, ":String") + ")" + " and ReferencedItemId eq " + msls._toODataString(selectedApproval.Id, ":String") + ")";
        myapp.activeDataWorkspace.CoreData.Jobs.filter(filter).execute().then(function (result) {
                var approvalJob = result.results[0];
                var parentJobId = approvalJob.ParentId;

                // Get parent job of approval job
                var filter2 = "(Id eq " + parentJobId + ")";
                myapp.activeDataWorkspace.CoreData.Jobs.filter(filter2).execute().then(function (result) {
                    var parentJob = result.results[0];

                    var n = parentJob.Name.lastIndexOf('.');
                    var entityType = parentJob.Name.substring(n + 1);

                    // Get item to approve
                    var filter3 = "(Id eq " + parseInt(parentJob.ReferencedItemId) + ")";
                    myapp.activeDataWorkspace.CoreData[entityType + "s"].filter(filter3).execute().then(function (result) {
                        var itemToApprove = result.results[0];
                        myapp["show" + entityType + "View"](itemToApprove);
                    },
                    function fail(e) {
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
                    });
                },
                function fail(e) {
                    msls.showMessageBox(
                        fetchJobFailedMessage
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
        },
        function fail(e) {
            msls.showMessageBox(
                fetchJobFailedMessage
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
    }
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