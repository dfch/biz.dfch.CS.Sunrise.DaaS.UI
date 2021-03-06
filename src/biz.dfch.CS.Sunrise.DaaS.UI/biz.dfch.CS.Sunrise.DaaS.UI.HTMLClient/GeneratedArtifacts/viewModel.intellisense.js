﻿/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.ApprovalApprove.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalApprove
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ApprovalApprove,
            data: lightSwitchApplication.ApprovalApprove,
            value: lightSwitchApplication.ApprovalApprove
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalApprove,
            data: lightSwitchApplication.ApprovalApprove,
            value: String
        },
        Approval_Status: {
            _$class: msls.ContentItem,
            _$name: "Approval_Status",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalApprove,
            data: lightSwitchApplication.ApprovalApprove,
            value: String
        },
        HelpText: {
            _$class: msls.ContentItem,
            _$name: "HelpText",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalApprove,
            data: lightSwitchApplication.ApprovalApprove,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalApprove,
            data: lightSwitchApplication.ApprovalApprove,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalApprove
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ApprovalApprove, {
        /// <field>
        /// Called when a new ApprovalApprove screen is created.
        /// <br/>created(msls.application.ApprovalApprove screen)
        /// </field>
        created: [lightSwitchApplication.ApprovalApprove],
        /// <field>
        /// Called before changes on an active ApprovalApprove screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ApprovalApprove screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ApprovalApprove],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ApprovalApprove().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ApprovalApprove().findContentItem("Name"); }],
        /// <field>
        /// Called after the Approval_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approval_Status_postRender: [$element, function () { return new lightSwitchApplication.ApprovalApprove().findContentItem("Approval_Status"); }],
        /// <field>
        /// Called after the HelpText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HelpText_postRender: [$element, function () { return new lightSwitchApplication.ApprovalApprove().findContentItem("HelpText"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ApprovalApprove().findContentItem("Description"); }]
    });

    lightSwitchApplication.ApprovalDecline.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalDecline
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ApprovalDecline,
            data: lightSwitchApplication.ApprovalDecline,
            value: lightSwitchApplication.ApprovalDecline
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalDecline,
            data: lightSwitchApplication.ApprovalDecline,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalDecline,
            data: lightSwitchApplication.ApprovalDecline,
            value: String
        },
        HelpText: {
            _$class: msls.ContentItem,
            _$name: "HelpText",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalDecline,
            data: lightSwitchApplication.ApprovalDecline,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalDecline,
            data: lightSwitchApplication.ApprovalDecline,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalDecline
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ApprovalDecline, {
        /// <field>
        /// Called when a new ApprovalDecline screen is created.
        /// <br/>created(msls.application.ApprovalDecline screen)
        /// </field>
        created: [lightSwitchApplication.ApprovalDecline],
        /// <field>
        /// Called before changes on an active ApprovalDecline screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ApprovalDecline screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ApprovalDecline],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ApprovalDecline().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ApprovalDecline().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.ApprovalDecline().findContentItem("Status"); }],
        /// <field>
        /// Called after the HelpText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HelpText_postRender: [$element, function () { return new lightSwitchApplication.ApprovalDecline().findContentItem("HelpText"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ApprovalDecline().findContentItem("Description"); }]
    });

    lightSwitchApplication.ApprovalsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalsList
        },
        ApprovalList: {
            _$class: msls.ContentItem,
            _$name: "ApprovalList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.ApprovalsList,
            value: lightSwitchApplication.ApprovalsList
        },
        Approvals: {
            _$class: msls.ContentItem,
            _$name: "Approvals",
            _$parentName: "ApprovalList",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.ApprovalsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ApprovalsList,
                _$entry: {
                    elementType: lightSwitchApplication.Approval
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Approvals",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.Approval,
            value: lightSwitchApplication.Approval
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.Approval,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "rows",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.Approval,
            value: String
        },
        NotBefore: {
            _$class: msls.ContentItem,
            _$name: "NotBefore",
            _$parentName: "rows",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.Approval,
            value: Date
        },
        ExpiresAt: {
            _$class: msls.ContentItem,
            _$name: "ExpiresAt",
            _$parentName: "rows",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.Approval,
            value: Date
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "rows",
            screen: lightSwitchApplication.ApprovalsList,
            data: lightSwitchApplication.Approval,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ApprovalsList, {
        /// <field>
        /// Called when a new ApprovalsList screen is created.
        /// <br/>created(msls.application.ApprovalsList screen)
        /// </field>
        created: [lightSwitchApplication.ApprovalsList],
        /// <field>
        /// Called before changes on an active ApprovalsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ApprovalsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ApprovalsList],
        /// <field>
        /// Called to determine if the refresh method can be executed.
        /// <br/>canExecute(msls.application.ApprovalsList screen)
        /// </field>
        refresh_canExecute: [lightSwitchApplication.ApprovalsList],
        /// <field>
        /// Called to execute the refresh method.
        /// <br/>execute(msls.application.ApprovalsList screen)
        /// </field>
        refresh_execute: [lightSwitchApplication.ApprovalsList],
        /// <field>
        /// Called after the ApprovalList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovalList_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("ApprovalList"); }],
        /// <field>
        /// Called after the Approvals content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approvals_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("Approvals"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("Status"); }],
        /// <field>
        /// Called after the NotBefore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NotBefore_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("NotBefore"); }],
        /// <field>
        /// Called after the ExpiresAt content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ExpiresAt_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("ExpiresAt"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ApprovalsList().findContentItem("Modified"); }]
    });

    lightSwitchApplication.ApprovalView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: lightSwitchApplication.ApprovalView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        Approval_Status: {
            _$class: msls.ContentItem,
            _$name: "Approval_Status",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        Approval_NotBefore: {
            _$class: msls.ContentItem,
            _$name: "Approval_NotBefore",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: Date
        },
        Approval_ExpiresAt: {
            _$class: msls.ContentItem,
            _$name: "Approval_ExpiresAt",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: Date
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: lightSwitchApplication.ApprovalView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.ApprovalView,
            data: lightSwitchApplication.ApprovalView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ApprovalView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ApprovalView, {
        /// <field>
        /// Called when a new ApprovalView screen is created.
        /// <br/>created(msls.application.ApprovalView screen)
        /// </field>
        created: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called before changes on an active ApprovalView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ApprovalView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to determine if the approve method can be executed.
        /// <br/>canExecute(msls.application.ApprovalView screen)
        /// </field>
        approve_canExecute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to execute the approve method.
        /// <br/>execute(msls.application.ApprovalView screen)
        /// </field>
        approve_execute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to determine if the decline method can be executed.
        /// <br/>canExecute(msls.application.ApprovalView screen)
        /// </field>
        decline_canExecute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to execute the decline method.
        /// <br/>execute(msls.application.ApprovalView screen)
        /// </field>
        decline_execute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to determine if the refresh method can be executed.
        /// <br/>canExecute(msls.application.ApprovalView screen)
        /// </field>
        refresh_canExecute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to execute the refresh method.
        /// <br/>execute(msls.application.ApprovalView screen)
        /// </field>
        refresh_execute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.ApprovalView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.ApprovalView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to determine if the goToReferencedObject method can be executed.
        /// <br/>canExecute(msls.application.ApprovalView screen)
        /// </field>
        goToReferencedObject_canExecute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called to execute the goToReferencedObject method.
        /// <br/>execute(msls.application.ApprovalView screen)
        /// </field>
        goToReferencedObject_execute: [lightSwitchApplication.ApprovalView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Approval_Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approval_Status_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Approval_Status"); }],
        /// <field>
        /// Called after the Approval_NotBefore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approval_NotBefore_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Approval_NotBefore"); }],
        /// <field>
        /// Called after the Approval_ExpiresAt content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approval_ExpiresAt_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Approval_ExpiresAt"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ApprovalView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.CartEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartEdit,
            data: lightSwitchApplication.CartEdit,
            value: lightSwitchApplication.CartEdit
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartEdit,
            data: lightSwitchApplication.CartEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CartEdit, {
        /// <field>
        /// Called when a new CartEdit screen is created.
        /// <br/>created(msls.application.CartEdit screen)
        /// </field>
        created: [lightSwitchApplication.CartEdit],
        /// <field>
        /// Called before changes on an active CartEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CartEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CartEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.CartEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CartEdit().findContentItem("Description"); }]
    });

    lightSwitchApplication.CartItemEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartItemEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartItemEdit,
            data: lightSwitchApplication.CartItemEdit,
            value: lightSwitchApplication.CartItemEdit
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemEdit,
            data: lightSwitchApplication.CartItemEdit,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartItemEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CartItemEdit, {
        /// <field>
        /// Called when a new CartItemEdit screen is created.
        /// <br/>created(msls.application.CartItemEdit screen)
        /// </field>
        created: [lightSwitchApplication.CartItemEdit],
        /// <field>
        /// Called before changes on an active CartItemEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CartItemEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CartItemEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.CartItemEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.CartItemEdit().findContentItem("Quantity"); }]
    });

    lightSwitchApplication.CartItemPersonalAdd.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartItemPersonalAdd
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartItemPersonalAdd,
            data: lightSwitchApplication.CartItemPersonalAdd,
            value: lightSwitchApplication.CartItemPersonalAdd
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemPersonalAdd,
            data: lightSwitchApplication.CartItemPersonalAdd,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemPersonalAdd,
            data: lightSwitchApplication.CartItemPersonalAdd,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartItemPersonalAdd
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CartItemPersonalAdd, {
        /// <field>
        /// Called when a new CartItemPersonalAdd screen is created.
        /// <br/>created(msls.application.CartItemPersonalAdd screen)
        /// </field>
        created: [lightSwitchApplication.CartItemPersonalAdd],
        /// <field>
        /// Called before changes on an active CartItemPersonalAdd screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CartItemPersonalAdd screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CartItemPersonalAdd],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.CartItemPersonalAdd().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CartItemPersonalAdd().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CartItemPersonalAdd().findContentItem("Description"); }]
    });

    lightSwitchApplication.CartItemTechnicalAdd.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartItemTechnicalAdd
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartItemTechnicalAdd,
            data: lightSwitchApplication.CartItemTechnicalAdd,
            value: lightSwitchApplication.CartItemTechnicalAdd
        },
        HelpText: {
            _$class: msls.ContentItem,
            _$name: "HelpText",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemTechnicalAdd,
            data: lightSwitchApplication.CartItemTechnicalAdd,
            value: String
        },
        Requester: {
            _$class: msls.ContentItem,
            _$name: "Requester",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemTechnicalAdd,
            data: lightSwitchApplication.CartItemTechnicalAdd,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemTechnicalAdd,
            data: lightSwitchApplication.CartItemTechnicalAdd,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemTechnicalAdd,
            data: lightSwitchApplication.CartItemTechnicalAdd,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartItemTechnicalAdd
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CartItemTechnicalAdd, {
        /// <field>
        /// Called when a new CartItemTechnicalAdd screen is created.
        /// <br/>created(msls.application.CartItemTechnicalAdd screen)
        /// </field>
        created: [lightSwitchApplication.CartItemTechnicalAdd],
        /// <field>
        /// Called before changes on an active CartItemTechnicalAdd screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CartItemTechnicalAdd screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CartItemTechnicalAdd],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.CartItemTechnicalAdd().findContentItem("Details"); }],
        /// <field>
        /// Called after the HelpText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HelpText_postRender: [$element, function () { return new lightSwitchApplication.CartItemTechnicalAdd().findContentItem("HelpText"); }],
        /// <field>
        /// Called after the Requester content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Requester_postRender: [$element, function () { return new lightSwitchApplication.CartItemTechnicalAdd().findContentItem("Requester"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CartItemTechnicalAdd().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CartItemTechnicalAdd().findContentItem("Description"); }]
    });

    lightSwitchApplication.CartItemView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartItemView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: lightSwitchApplication.CartItemView
        },
        CartId: {
            _$class: msls.ContentItem,
            _$name: "CartId",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: String
        },
        CatalogueItemId: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItemId",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: String
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: String
        },
        CartItem_Parameters: {
            _$class: msls.ContentItem,
            _$name: "CartItem_Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: lightSwitchApplication.CartItemView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.CartItemView,
            data: lightSwitchApplication.CartItemView,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartItemView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CartItemView, {
        /// <field>
        /// Called when a new CartItemView screen is created.
        /// <br/>created(msls.application.CartItemView screen)
        /// </field>
        created: [lightSwitchApplication.CartItemView],
        /// <field>
        /// Called before changes on an active CartItemView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CartItemView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CartItemView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.CartItemView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.CartItemView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.CartItemView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.CartItemView],
        /// <field>
        /// Called to determine if the goToCatalogueItem method can be executed.
        /// <br/>canExecute(msls.application.CartItemView screen)
        /// </field>
        goToCatalogueItem_canExecute: [lightSwitchApplication.CartItemView],
        /// <field>
        /// Called to execute the goToCatalogueItem method.
        /// <br/>execute(msls.application.CartItemView screen)
        /// </field>
        goToCatalogueItem_execute: [lightSwitchApplication.CartItemView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("Details"); }],
        /// <field>
        /// Called after the CartId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CartId_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("CartId"); }],
        /// <field>
        /// Called after the CatalogueItemId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItemId_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("CatalogueItemId"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("Description"); }],
        /// <field>
        /// Called after the CartItem_Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CartItem_Parameters_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("CartItem_Parameters"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("Id"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.CartItemView().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.CartsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartsList
        },
        CartList: {
            _$class: msls.ContentItem,
            _$name: "CartList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartsList,
            data: lightSwitchApplication.CartsList,
            value: lightSwitchApplication.CartsList
        },
        Carts: {
            _$class: msls.ContentItem,
            _$name: "Carts",
            _$parentName: "CartList",
            screen: lightSwitchApplication.CartsList,
            data: lightSwitchApplication.CartsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.CartsList,
                _$entry: {
                    elementType: lightSwitchApplication.Cart
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Carts",
            screen: lightSwitchApplication.CartsList,
            data: lightSwitchApplication.Cart,
            value: lightSwitchApplication.Cart
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.CartsList,
            data: lightSwitchApplication.Cart,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.CartsList,
            data: lightSwitchApplication.Cart,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "rows",
            screen: lightSwitchApplication.CartsList,
            data: lightSwitchApplication.Cart,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CartsList, {
        /// <field>
        /// Called when a new CartsList screen is created.
        /// <br/>created(msls.application.CartsList screen)
        /// </field>
        created: [lightSwitchApplication.CartsList],
        /// <field>
        /// Called before changes on an active CartsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CartsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CartsList],
        /// <field>
        /// Called after the CartList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CartList_postRender: [$element, function () { return new lightSwitchApplication.CartsList().findContentItem("CartList"); }],
        /// <field>
        /// Called after the Carts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Carts_postRender: [$element, function () { return new lightSwitchApplication.CartsList().findContentItem("Carts"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.CartsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.CartsList().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CartsList().findContentItem("Description"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.CartsList().findContentItem("Created"); }]
    });

    lightSwitchApplication.CartView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartView
        },
        Contents: {
            _$class: msls.ContentItem,
            _$name: "Contents",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: lightSwitchApplication.CartView
        },
        CartItems1: {
            _$class: msls.ContentItem,
            _$name: "CartItems1",
            _$parentName: "Contents",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.CartView,
                _$entry: {
                    elementType: lightSwitchApplication.CartItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "CartItems1",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartItem,
            value: lightSwitchApplication.CartItem
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartItem,
            value: String
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "rows",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartItem,
            value: String
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: lightSwitchApplication.CartView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: lightSwitchApplication.CartView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.CartView,
            data: lightSwitchApplication.CartView,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CartView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CartView, {
        /// <field>
        /// Called when a new CartView screen is created.
        /// <br/>created(msls.application.CartView screen)
        /// </field>
        created: [lightSwitchApplication.CartView],
        /// <field>
        /// Called before changes on an active CartView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CartView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CartView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.CartView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.CartView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.CartView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.CartView],
        /// <field>
        /// Called to determine if the checkoutCart method can be executed.
        /// <br/>canExecute(msls.application.CartView screen)
        /// </field>
        checkoutCart_canExecute: [lightSwitchApplication.CartView],
        /// <field>
        /// Called to execute the checkoutCart method.
        /// <br/>execute(msls.application.CartView screen)
        /// </field>
        checkoutCart_execute: [lightSwitchApplication.CartView],
        /// <field>
        /// Called after the Contents content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Contents_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Contents"); }],
        /// <field>
        /// Called after the CartItems1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CartItems1_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("CartItems1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Description1"); }],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Id"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.CartView().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.CatalogueItemsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueItemsList
        },
        CatalogueItem1List: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItem1List",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItemsList,
            value: lightSwitchApplication.CatalogueItemsList
        },
        CatalogueItems: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItems",
            _$parentName: "CatalogueItem1List",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItemsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.CatalogueItemsList,
                _$entry: {
                    elementType: lightSwitchApplication.CatalogueItem1
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "CatalogueItems",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItem1,
            value: lightSwitchApplication.CatalogueItem1
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.CatalogueItemsList,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueItemsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CatalogueItemsList, {
        /// <field>
        /// Called when a new CatalogueItemsList screen is created.
        /// <br/>created(msls.application.CatalogueItemsList screen)
        /// </field>
        created: [lightSwitchApplication.CatalogueItemsList],
        /// <field>
        /// Called before changes on an active CatalogueItemsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CatalogueItemsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CatalogueItemsList],
        /// <field>
        /// Called after the CatalogueItem1List content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItem1List_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("CatalogueItem1List"); }],
        /// <field>
        /// Called after the CatalogueItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItems_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("CatalogueItems"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemsList().findContentItem("Name"); }]
    });

    lightSwitchApplication.CatalogueItemView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueItemView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: lightSwitchApplication.CatalogueItemView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        CatalogueItem1_ValidFrom: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItem1_ValidFrom",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: Date
        },
        CatalogueItem1_ValidUntil: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItem1_ValidUntil",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: Date
        },
        CatalogueItem1_EndOfSale: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItem1_EndOfSale",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: Date
        },
        CatalogueItem1_EndOfLife: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItem1_EndOfLife",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: Date
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        CatalogueItem1_Parameters: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItem1_Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: lightSwitchApplication.CatalogueItemView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueItemView,
            data: lightSwitchApplication.CatalogueItemView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueItemView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CatalogueItemView, {
        /// <field>
        /// Called when a new CatalogueItemView screen is created.
        /// <br/>created(msls.application.CatalogueItemView screen)
        /// </field>
        created: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called before changes on an active CatalogueItemView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CatalogueItemView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.CatalogueItemView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.CatalogueItemView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called to determine if the addToCart method can be executed.
        /// <br/>canExecute(msls.application.CatalogueItemView screen)
        /// </field>
        addToCart_canExecute: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called to execute the addToCart method.
        /// <br/>execute(msls.application.CatalogueItemView screen)
        /// </field>
        addToCart_execute: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called to determine if the navigateToProduct method can be executed.
        /// <br/>canExecute(msls.application.CatalogueItemView screen)
        /// </field>
        navigateToProduct_canExecute: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called to execute the navigateToProduct method.
        /// <br/>execute(msls.application.CatalogueItemView screen)
        /// </field>
        navigateToProduct_execute: [lightSwitchApplication.CatalogueItemView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Name"); }],
        /// <field>
        /// Called after the CatalogueItem1_ValidFrom content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItem1_ValidFrom_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("CatalogueItem1_ValidFrom"); }],
        /// <field>
        /// Called after the CatalogueItem1_ValidUntil content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItem1_ValidUntil_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("CatalogueItem1_ValidUntil"); }],
        /// <field>
        /// Called after the CatalogueItem1_EndOfSale content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItem1_EndOfSale_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("CatalogueItem1_EndOfSale"); }],
        /// <field>
        /// Called after the CatalogueItem1_EndOfLife content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItem1_EndOfLife_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("CatalogueItem1_EndOfLife"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Description"); }],
        /// <field>
        /// Called after the CatalogueItem1_Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItem1_Parameters_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("CatalogueItem1_Parameters"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.CatalogueItemView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.CataloguesList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CataloguesList
        },
        CatalogueList: {
            _$class: msls.ContentItem,
            _$name: "CatalogueList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CataloguesList,
            data: lightSwitchApplication.CataloguesList,
            value: lightSwitchApplication.CataloguesList
        },
        Catalogues: {
            _$class: msls.ContentItem,
            _$name: "Catalogues",
            _$parentName: "CatalogueList",
            screen: lightSwitchApplication.CataloguesList,
            data: lightSwitchApplication.CataloguesList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.CataloguesList,
                _$entry: {
                    elementType: lightSwitchApplication.Catalogue
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Catalogues",
            screen: lightSwitchApplication.CataloguesList,
            data: lightSwitchApplication.Catalogue,
            value: lightSwitchApplication.Catalogue
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.CataloguesList,
            data: lightSwitchApplication.Catalogue,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.CataloguesList,
            data: lightSwitchApplication.Catalogue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CataloguesList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CataloguesList, {
        /// <field>
        /// Called when a new CataloguesList screen is created.
        /// <br/>created(msls.application.CataloguesList screen)
        /// </field>
        created: [lightSwitchApplication.CataloguesList],
        /// <field>
        /// Called before changes on an active CataloguesList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CataloguesList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CataloguesList],
        /// <field>
        /// Called after the CatalogueList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueList_postRender: [$element, function () { return new lightSwitchApplication.CataloguesList().findContentItem("CatalogueList"); }],
        /// <field>
        /// Called after the Catalogues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Catalogues_postRender: [$element, function () { return new lightSwitchApplication.CataloguesList().findContentItem("Catalogues"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.CataloguesList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CataloguesList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CataloguesList().findContentItem("Description"); }]
    });

    lightSwitchApplication.CatalogueView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueView
        },
        CatalogueItems: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItems",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: lightSwitchApplication.CatalogueView
        },
        CatalogueItems1: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItems1",
            _$parentName: "CatalogueItems",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.CatalogueView,
                _$entry: {
                    elementType: lightSwitchApplication.CatalogueItem1
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "CatalogueItems1",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueItem1,
            value: lightSwitchApplication.CatalogueItem1
        },
        CatalogueItemName: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItemName",
            _$parentName: "rows",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "rows",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: lightSwitchApplication.CatalogueView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: lightSwitchApplication.CatalogueView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.CatalogueView,
            data: lightSwitchApplication.CatalogueView,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.CatalogueView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.CatalogueView, {
        /// <field>
        /// Called when a new CatalogueView screen is created.
        /// <br/>created(msls.application.CatalogueView screen)
        /// </field>
        created: [lightSwitchApplication.CatalogueView],
        /// <field>
        /// Called before changes on an active CatalogueView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.CatalogueView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.CatalogueView],
        /// <field>
        /// Called to determine if the addToCart method can be executed.
        /// <br/>canExecute(msls.application.CatalogueView screen)
        /// </field>
        addToCart_canExecute: [lightSwitchApplication.CatalogueView],
        /// <field>
        /// Called to execute the addToCart method.
        /// <br/>execute(msls.application.CatalogueView screen)
        /// </field>
        addToCart_execute: [lightSwitchApplication.CatalogueView],
        /// <field>
        /// Called after the CatalogueItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItems_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("CatalogueItems"); }],
        /// <field>
        /// Called after the CatalogueItems1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItems1_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("CatalogueItems1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("rows"); }],
        /// <field>
        /// Called after the CatalogueItemName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItemName_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("CatalogueItemName"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Description1"); }],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Status"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Version"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Id"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.CatalogueView().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.EndpointsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointsList
        },
        EndpointList: {
            _$class: msls.ContentItem,
            _$name: "EndpointList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.EndpointsList,
            value: lightSwitchApplication.EndpointsList
        },
        Endpoints: {
            _$class: msls.ContentItem,
            _$name: "Endpoints",
            _$parentName: "EndpointList",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.EndpointsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.EndpointsList,
                _$entry: {
                    elementType: lightSwitchApplication.Endpoint
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Endpoints",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.Endpoint,
            value: lightSwitchApplication.Endpoint
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.Endpoint,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "rows",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.Endpoint,
            value: String
        },
        RoutePrefix: {
            _$class: msls.ContentItem,
            _$name: "RoutePrefix",
            _$parentName: "rows",
            screen: lightSwitchApplication.EndpointsList,
            data: lightSwitchApplication.Endpoint,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EndpointsList, {
        /// <field>
        /// Called when a new EndpointsList screen is created.
        /// <br/>created(msls.application.EndpointsList screen)
        /// </field>
        created: [lightSwitchApplication.EndpointsList],
        /// <field>
        /// Called before changes on an active EndpointsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EndpointsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EndpointsList],
        /// <field>
        /// Called after the EndpointList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndpointList_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("EndpointList"); }],
        /// <field>
        /// Called after the Endpoints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("Endpoints"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("Version"); }],
        /// <field>
        /// Called after the RoutePrefix content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoutePrefix_postRender: [$element, function () { return new lightSwitchApplication.EndpointsList().findContentItem("RoutePrefix"); }]
    });

    lightSwitchApplication.EndpointView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: lightSwitchApplication.EndpointView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "Details",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        RoutePrefix: {
            _$class: msls.ContentItem,
            _$name: "RoutePrefix",
            _$parentName: "Details",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        RouteTemplate: {
            _$class: msls.ContentItem,
            _$name: "RouteTemplate",
            _$parentName: "Details",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        ServerRole: {
            _$class: msls.ContentItem,
            _$name: "ServerRole",
            _$parentName: "Details",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Priority: {
            _$class: msls.ContentItem,
            _$name: "Priority",
            _$parentName: "Details",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: Number
        },
        Endpoint_Address: {
            _$class: msls.ContentItem,
            _$name: "Endpoint_Address",
            _$parentName: "Details",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Endpoint_Description: {
            _$class: msls.ContentItem,
            _$name: "Endpoint_Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: lightSwitchApplication.EndpointView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.EndpointView,
            data: lightSwitchApplication.EndpointView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EndpointView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EndpointView, {
        /// <field>
        /// Called when a new EndpointView screen is created.
        /// <br/>created(msls.application.EndpointView screen)
        /// </field>
        created: [lightSwitchApplication.EndpointView],
        /// <field>
        /// Called before changes on an active EndpointView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EndpointView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EndpointView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.EndpointView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.EndpointView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.EndpointView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.EndpointView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Version"); }],
        /// <field>
        /// Called after the RoutePrefix content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoutePrefix_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("RoutePrefix"); }],
        /// <field>
        /// Called after the RouteTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RouteTemplate_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("RouteTemplate"); }],
        /// <field>
        /// Called after the ServerRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ServerRole_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("ServerRole"); }],
        /// <field>
        /// Called after the Priority content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Priority_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Priority"); }],
        /// <field>
        /// Called after the Endpoint_Address content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoint_Address_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Endpoint_Address"); }],
        /// <field>
        /// Called after the Endpoint_Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoint_Description_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Endpoint_Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.EndpointView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.EntityTypeEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EntityTypeEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: lightSwitchApplication.EntityTypeEdit
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: String
        },
        EntityType_Version: {
            _$class: msls.ContentItem,
            _$name: "EntityType_Version",
            _$parentName: "Details",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: lightSwitchApplication.EntityTypeEdit
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeEdit,
            data: lightSwitchApplication.EntityTypeEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EntityTypeEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EntityTypeEdit, {
        /// <field>
        /// Called when a new EntityTypeEdit screen is created.
        /// <br/>created(msls.application.EntityTypeEdit screen)
        /// </field>
        created: [lightSwitchApplication.EntityTypeEdit],
        /// <field>
        /// Called before changes on an active EntityTypeEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EntityTypeEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EntityTypeEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("Name"); }],
        /// <field>
        /// Called after the EntityType_Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EntityType_Version_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("EntityType_Version"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("Description"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("Id"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeEdit().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.EntityTypesList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EntityTypesList
        },
        EntityTypeList: {
            _$class: msls.ContentItem,
            _$name: "EntityTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EntityTypesList,
            data: lightSwitchApplication.EntityTypesList,
            value: lightSwitchApplication.EntityTypesList
        },
        EntityTypes: {
            _$class: msls.ContentItem,
            _$name: "EntityTypes",
            _$parentName: "EntityTypeList",
            screen: lightSwitchApplication.EntityTypesList,
            data: lightSwitchApplication.EntityTypesList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.EntityTypesList,
                _$entry: {
                    elementType: lightSwitchApplication.EntityType
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "EntityTypes",
            screen: lightSwitchApplication.EntityTypesList,
            data: lightSwitchApplication.EntityType,
            value: lightSwitchApplication.EntityType
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.EntityTypesList,
            data: lightSwitchApplication.EntityType,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "rows",
            screen: lightSwitchApplication.EntityTypesList,
            data: lightSwitchApplication.EntityType,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EntityTypesList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EntityTypesList, {
        /// <field>
        /// Called when a new EntityTypesList screen is created.
        /// <br/>created(msls.application.EntityTypesList screen)
        /// </field>
        created: [lightSwitchApplication.EntityTypesList],
        /// <field>
        /// Called before changes on an active EntityTypesList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EntityTypesList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EntityTypesList],
        /// <field>
        /// Called after the EntityTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EntityTypeList_postRender: [$element, function () { return new lightSwitchApplication.EntityTypesList().findContentItem("EntityTypeList"); }],
        /// <field>
        /// Called after the EntityTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EntityTypes_postRender: [$element, function () { return new lightSwitchApplication.EntityTypesList().findContentItem("EntityTypes"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.EntityTypesList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.EntityTypesList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.EntityTypesList().findContentItem("Version"); }]
    });

    lightSwitchApplication.EntityTypeView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EntityTypeView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: lightSwitchApplication.EntityTypeView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: String
        },
        EntityType_Version: {
            _$class: msls.ContentItem,
            _$name: "EntityType_Version",
            _$parentName: "Details",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: lightSwitchApplication.EntityTypeView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.EntityTypeView,
            data: lightSwitchApplication.EntityTypeView,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EntityTypeView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EntityTypeView, {
        /// <field>
        /// Called when a new EntityTypeView screen is created.
        /// <br/>created(msls.application.EntityTypeView screen)
        /// </field>
        created: [lightSwitchApplication.EntityTypeView],
        /// <field>
        /// Called before changes on an active EntityTypeView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EntityTypeView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EntityTypeView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.EntityTypeView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.EntityTypeView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.EntityTypeView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.EntityTypeView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("Name"); }],
        /// <field>
        /// Called after the EntityType_Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EntityType_Version_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("EntityType_Version"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("Id"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.EntityTypeView().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.GateAdd.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.GateAdd
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.GateAdd,
            data: lightSwitchApplication.GateAdd,
            value: lightSwitchApplication.GateAdd
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateAdd,
            data: lightSwitchApplication.GateAdd,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateAdd,
            data: lightSwitchApplication.GateAdd,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateAdd,
            data: lightSwitchApplication.GateAdd,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateAdd,
            data: lightSwitchApplication.GateAdd,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.GateAdd
        }
    };

    msls._addEntryPoints(lightSwitchApplication.GateAdd, {
        /// <field>
        /// Called when a new GateAdd screen is created.
        /// <br/>created(msls.application.GateAdd screen)
        /// </field>
        created: [lightSwitchApplication.GateAdd],
        /// <field>
        /// Called before changes on an active GateAdd screen are applied.
        /// <br/>beforeApplyChanges(msls.application.GateAdd screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.GateAdd],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.GateAdd().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.GateAdd().findContentItem("Name"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.GateAdd().findContentItem("Type"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.GateAdd().findContentItem("Description"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.GateAdd().findContentItem("Parameters"); }]
    });

    lightSwitchApplication.GateEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.GateEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.GateEdit,
            data: lightSwitchApplication.GateEdit,
            value: lightSwitchApplication.GateEdit
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateEdit,
            data: lightSwitchApplication.GateEdit,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateEdit,
            data: lightSwitchApplication.GateEdit,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateEdit,
            data: lightSwitchApplication.GateEdit,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateEdit,
            data: lightSwitchApplication.GateEdit,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateEdit,
            data: lightSwitchApplication.GateEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.GateEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.GateEdit, {
        /// <field>
        /// Called when a new GateEdit screen is created.
        /// <br/>created(msls.application.GateEdit screen)
        /// </field>
        created: [lightSwitchApplication.GateEdit],
        /// <field>
        /// Called before changes on an active GateEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.GateEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.GateEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.GateEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.GateEdit().findContentItem("Name"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.GateEdit().findContentItem("Type"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.GateEdit().findContentItem("Status"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.GateEdit().findContentItem("Description"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.GateEdit().findContentItem("Parameters"); }]
    });

    lightSwitchApplication.GatesList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.GatesList
        },
        GateList: {
            _$class: msls.ContentItem,
            _$name: "GateList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.GatesList,
            data: lightSwitchApplication.GatesList,
            value: lightSwitchApplication.GatesList
        },
        Gates: {
            _$class: msls.ContentItem,
            _$name: "Gates",
            _$parentName: "GateList",
            screen: lightSwitchApplication.GatesList,
            data: lightSwitchApplication.GatesList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.GatesList,
                _$entry: {
                    elementType: lightSwitchApplication.Gate
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Gates",
            screen: lightSwitchApplication.GatesList,
            data: lightSwitchApplication.Gate,
            value: lightSwitchApplication.Gate
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.GatesList,
            data: lightSwitchApplication.Gate,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "rows",
            screen: lightSwitchApplication.GatesList,
            data: lightSwitchApplication.Gate,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "rows",
            screen: lightSwitchApplication.GatesList,
            data: lightSwitchApplication.Gate,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.GatesList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.GatesList, {
        /// <field>
        /// Called when a new GatesList screen is created.
        /// <br/>created(msls.application.GatesList screen)
        /// </field>
        created: [lightSwitchApplication.GatesList],
        /// <field>
        /// Called before changes on an active GatesList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.GatesList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.GatesList],
        /// <field>
        /// Called after the GateList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GateList_postRender: [$element, function () { return new lightSwitchApplication.GatesList().findContentItem("GateList"); }],
        /// <field>
        /// Called after the Gates content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Gates_postRender: [$element, function () { return new lightSwitchApplication.GatesList().findContentItem("Gates"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.GatesList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.GatesList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.GatesList().findContentItem("Type"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.GatesList().findContentItem("Status"); }]
    });

    lightSwitchApplication.GateView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.GateView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: lightSwitchApplication.GateView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: String
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: lightSwitchApplication.GateView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.GateView,
            data: lightSwitchApplication.GateView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.GateView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.GateView, {
        /// <field>
        /// Called when a new GateView screen is created.
        /// <br/>created(msls.application.GateView screen)
        /// </field>
        created: [lightSwitchApplication.GateView],
        /// <field>
        /// Called before changes on an active GateView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.GateView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.GateView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.GateView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.GateView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.GateView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.GateView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Type"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Status"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Description1"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.GateView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        AddPersonalVDI: {
            _$class: msls.ContentItem,
            _$name: "AddPersonalVDI",
            _$parentName: "Group3",
            screen: lightSwitchApplication.Home
        },
        AddTechnicalVDI: {
            _$class: msls.ContentItem,
            _$name: "AddTechnicalVDI",
            _$parentName: "Group3",
            screen: lightSwitchApplication.Home
        },
        Orders: {
            _$class: msls.ContentItem,
            _$name: "Orders",
            _$parentName: "Group3",
            screen: lightSwitchApplication.Home
        },
        Inventory: {
            _$class: msls.ContentItem,
            _$name: "Inventory",
            _$parentName: "Group3",
            screen: lightSwitchApplication.Home
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Catalogues: {
            _$class: msls.ContentItem,
            _$name: "Catalogues",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Home
        },
        Carts: {
            _$class: msls.ContentItem,
            _$name: "Carts",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Home
        },
        Approvals: {
            _$class: msls.ContentItem,
            _$name: "Approvals",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Home
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Endpoints: {
            _$class: msls.ContentItem,
            _$name: "Endpoints",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        Configuration: {
            _$class: msls.ContentItem,
            _$name: "Configuration",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        Jobs: {
            _$class: msls.ContentItem,
            _$name: "Jobs",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        Gates: {
            _$class: msls.ContentItem,
            _$name: "Gates",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        EntityTypes: {
            _$class: msls.ContentItem,
            _$name: "EntityTypes",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        ShowManagementCredentialList: {
            _$class: msls.ContentItem,
            _$name: "ShowManagementCredentialList",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        ShowManagementUriList: {
            _$class: msls.ContentItem,
            _$name: "ShowManagementUriList",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group3"); }],
        /// <field>
        /// Called after the AddPersonalVDI content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddPersonalVDI_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("AddPersonalVDI"); }],
        /// <field>
        /// Called after the AddTechnicalVDI content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AddTechnicalVDI_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("AddTechnicalVDI"); }],
        /// <field>
        /// Called after the Orders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Orders_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Orders"); }],
        /// <field>
        /// Called after the Inventory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Inventory_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Inventory"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Catalogues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Catalogues_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Catalogues"); }],
        /// <field>
        /// Called after the Carts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Carts_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Carts"); }],
        /// <field>
        /// Called after the Approvals content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Approvals_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Approvals"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Endpoints content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Endpoints_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Endpoints"); }],
        /// <field>
        /// Called after the Configuration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Configuration_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Configuration"); }],
        /// <field>
        /// Called after the Jobs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Jobs_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Jobs"); }],
        /// <field>
        /// Called after the Gates content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Gates_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Gates"); }],
        /// <field>
        /// Called after the EntityTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EntityTypes_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("EntityTypes"); }],
        /// <field>
        /// Called after the ShowManagementCredentialList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowManagementCredentialList_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowManagementCredentialList"); }],
        /// <field>
        /// Called after the ShowManagementUriList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowManagementUriList_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ShowManagementUriList"); }]
    });

    lightSwitchApplication.JobsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.JobsList
        },
        JobList: {
            _$class: msls.ContentItem,
            _$name: "JobList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.JobsList,
            value: lightSwitchApplication.JobsList
        },
        Jobs: {
            _$class: msls.ContentItem,
            _$name: "Jobs",
            _$parentName: "JobList",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.JobsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.JobsList,
                _$entry: {
                    elementType: lightSwitchApplication.Job
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Jobs",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.Job,
            value: lightSwitchApplication.Job
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.Job,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "rows",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.Job,
            value: String
        },
        ReferencedItemId: {
            _$class: msls.ContentItem,
            _$name: "ReferencedItemId",
            _$parentName: "rows",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.Job,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "rows",
            screen: lightSwitchApplication.JobsList,
            data: lightSwitchApplication.Job,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.JobsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.JobsList, {
        /// <field>
        /// Called when a new JobsList screen is created.
        /// <br/>created(msls.application.JobsList screen)
        /// </field>
        created: [lightSwitchApplication.JobsList],
        /// <field>
        /// Called before changes on an active JobsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.JobsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.JobsList],
        /// <field>
        /// Called after the JobList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JobList_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("JobList"); }],
        /// <field>
        /// Called after the Jobs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Jobs_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("Jobs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("Status"); }],
        /// <field>
        /// Called after the ReferencedItemId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ReferencedItemId_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("ReferencedItemId"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.JobsList().findContentItem("Modified"); }]
    });

    lightSwitchApplication.JobView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.JobView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: lightSwitchApplication.JobView
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: lightSwitchApplication.Job
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: lightSwitchApplication.Job
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        Token: {
            _$class: msls.ContentItem,
            _$name: "Token",
            _$parentName: "left",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        EndTime: {
            _$class: msls.ContentItem,
            _$name: "EndTime",
            _$parentName: "left",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: lightSwitchApplication.Job
        },
        RefId: {
            _$class: msls.ContentItem,
            _$name: "RefId",
            _$parentName: "right",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        TenantId: {
            _$class: msls.ContentItem,
            _$name: "TenantId",
            _$parentName: "right",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        ParentId: {
            _$class: msls.ContentItem,
            _$name: "ParentId",
            _$parentName: "right",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.Job,
            value: String
        },
        Job_Condition: {
            _$class: msls.ContentItem,
            _$name: "Job_Condition",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Job_ConditionParameters: {
            _$class: msls.ContentItem,
            _$name: "Job_ConditionParameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Error: {
            _$class: msls.ContentItem,
            _$name: "Error",
            _$parentName: "Details",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: lightSwitchApplication.JobView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.JobView,
            data: lightSwitchApplication.JobView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.JobView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.JobView, {
        /// <field>
        /// Called when a new JobView screen is created.
        /// <br/>created(msls.application.JobView screen)
        /// </field>
        created: [lightSwitchApplication.JobView],
        /// <field>
        /// Called before changes on an active JobView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.JobView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.JobView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.JobView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.JobView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.JobView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.JobView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Token content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Token_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Token"); }],
        /// <field>
        /// Called after the EndTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndTime_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("EndTime"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("right"); }],
        /// <field>
        /// Called after the RefId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RefId_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("RefId"); }],
        /// <field>
        /// Called after the TenantId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TenantId_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("TenantId"); }],
        /// <field>
        /// Called after the ParentId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ParentId_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("ParentId"); }],
        /// <field>
        /// Called after the Job_Condition content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Job_Condition_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Job_Condition"); }],
        /// <field>
        /// Called after the Job_ConditionParameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Job_ConditionParameters_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Job_ConditionParameters"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Description1"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the Error content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Error_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Error"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.JobView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.KeyNameValueAdd.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueAdd
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValueAdd,
            value: lightSwitchApplication.KeyNameValueAdd
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValueAdd,
            value: lightSwitchApplication.KeyNameValue
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: lightSwitchApplication.KeyNameValue
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.KeyNameValueAdd,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueAdd
        }
    };

    msls._addEntryPoints(lightSwitchApplication.KeyNameValueAdd, {
        /// <field>
        /// Called when a new KeyNameValueAdd screen is created.
        /// <br/>created(msls.application.KeyNameValueAdd screen)
        /// </field>
        created: [lightSwitchApplication.KeyNameValueAdd],
        /// <field>
        /// Called before changes on an active KeyNameValueAdd screen are applied.
        /// <br/>beforeApplyChanges(msls.application.KeyNameValueAdd screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.KeyNameValueAdd],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("left"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Value"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueAdd().findContentItem("Description"); }]
    });

    lightSwitchApplication.KeyNameValueEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: lightSwitchApplication.KeyNameValueEdit
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: lightSwitchApplication.KeyNameValueEdit
        },
        KeyNameValue_Tid: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        KeyNameValue_Id: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_Id",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        KeyNameValue_Created: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_Created",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: Date
        },
        KeyNameValue_CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        KeyNameValue_Modified: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: Date
        },
        KeyNameValue_ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValue_ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueEdit,
            data: lightSwitchApplication.KeyNameValueEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.KeyNameValueEdit, {
        /// <field>
        /// Called when a new KeyNameValueEdit screen is created.
        /// <br/>created(msls.application.KeyNameValueEdit screen)
        /// </field>
        created: [lightSwitchApplication.KeyNameValueEdit],
        /// <field>
        /// Called before changes on an active KeyNameValueEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.KeyNameValueEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.KeyNameValueEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Value"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("General"); }],
        /// <field>
        /// Called after the KeyNameValue_Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_Tid_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_Tid"); }],
        /// <field>
        /// Called after the KeyNameValue_Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_Id_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_Id"); }],
        /// <field>
        /// Called after the KeyNameValue_Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_Created_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_Created"); }],
        /// <field>
        /// Called after the KeyNameValue_CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_CreatedBy"); }],
        /// <field>
        /// Called after the KeyNameValue_Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_Modified_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_Modified"); }],
        /// <field>
        /// Called after the KeyNameValue_ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValue_ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueEdit().findContentItem("KeyNameValue_ModifiedBy"); }]
    });

    lightSwitchApplication.KeyNameValuesList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValuesList
        },
        KeyNameValueList: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValueList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValuesList,
            value: lightSwitchApplication.KeyNameValuesList
        },
        KeyNameValues: {
            _$class: msls.ContentItem,
            _$name: "KeyNameValues",
            _$parentName: "KeyNameValueList",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValuesList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.KeyNameValuesList,
                _$entry: {
                    elementType: lightSwitchApplication.KeyNameValue
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "KeyNameValues",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValue,
            value: lightSwitchApplication.KeyNameValue
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "rows",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "rows",
            screen: lightSwitchApplication.KeyNameValuesList,
            data: lightSwitchApplication.KeyNameValue,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValuesList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.KeyNameValuesList, {
        /// <field>
        /// Called when a new KeyNameValuesList screen is created.
        /// <br/>created(msls.application.KeyNameValuesList screen)
        /// </field>
        created: [lightSwitchApplication.KeyNameValuesList],
        /// <field>
        /// Called before changes on an active KeyNameValuesList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.KeyNameValuesList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.KeyNameValuesList],
        /// <field>
        /// Called after the KeyNameValueList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValueList_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("KeyNameValueList"); }],
        /// <field>
        /// Called after the KeyNameValues content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        KeyNameValues_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("KeyNameValues"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValuesList().findContentItem("Value"); }]
    });

    lightSwitchApplication.KeyNameValueView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: lightSwitchApplication.KeyNameValueView
        },
        Key: {
            _$class: msls.ContentItem,
            _$name: "Key",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: lightSwitchApplication.KeyNameValueView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.KeyNameValueView,
            data: lightSwitchApplication.KeyNameValueView,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.KeyNameValueView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.KeyNameValueView, {
        /// <field>
        /// Called when a new KeyNameValueView screen is created.
        /// <br/>created(msls.application.KeyNameValueView screen)
        /// </field>
        created: [lightSwitchApplication.KeyNameValueView],
        /// <field>
        /// Called before changes on an active KeyNameValueView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.KeyNameValueView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.KeyNameValueView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.KeyNameValueView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.KeyNameValueView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.KeyNameValueView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.KeyNameValueView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Key content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Key_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Key"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Value"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Description"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Id"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.KeyNameValueView().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.ManagementCredentialList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManagementCredentialList
        },
        ManagementCredentialList: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredentialList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ManagementCredentialList,
            data: lightSwitchApplication.ManagementCredentialList,
            value: lightSwitchApplication.ManagementCredentialList
        },
        ManagementCredentials: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredentials",
            _$parentName: "ManagementCredentialList",
            screen: lightSwitchApplication.ManagementCredentialList,
            data: lightSwitchApplication.ManagementCredentialList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ManagementCredentialList,
                _$entry: {
                    elementType: lightSwitchApplication.ManagementCredential
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ManagementCredentials",
            screen: lightSwitchApplication.ManagementCredentialList,
            data: lightSwitchApplication.ManagementCredential,
            value: lightSwitchApplication.ManagementCredential
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementCredentialList,
            data: lightSwitchApplication.ManagementCredential,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementCredentialList,
            data: lightSwitchApplication.ManagementCredential,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementCredentialList,
            data: lightSwitchApplication.ManagementCredential,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManagementCredentialList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ManagementCredentialList, {
        /// <field>
        /// Called when a new ManagementCredentialList screen is created.
        /// <br/>created(msls.application.ManagementCredentialList screen)
        /// </field>
        created: [lightSwitchApplication.ManagementCredentialList],
        /// <field>
        /// Called before changes on an active ManagementCredentialList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ManagementCredentialList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ManagementCredentialList],
        /// <field>
        /// Called after the ManagementCredentialList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredentialList_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialList().findContentItem("ManagementCredentialList"); }],
        /// <field>
        /// Called after the ManagementCredentials content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredentials_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialList().findContentItem("ManagementCredentials"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialList().findContentItem("Id"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialList().findContentItem("Description"); }]
    });

    lightSwitchApplication.ManagementCredentialView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManagementCredentialView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: lightSwitchApplication.ManagementCredentialView
        },
        ManagementCredential_Id1: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_Id1",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        ManagementCredential_Description: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        Username: {
            _$class: msls.ContentItem,
            _$name: "Username",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        ManagementCredential_Password: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_Password",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        ManagementCredential_EncryptedPassword: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_EncryptedPassword",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: lightSwitchApplication.ManagementCredentialView
        },
        ManagementCredential_Tid: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        ManagementCredential_Id: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_Id",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        ManagementCredential_Created: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_Created",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: Date
        },
        ManagementCredential_CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        ManagementCredential_Modified: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: Date
        },
        ManagementCredential_ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ManagementCredential_ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: String
        },
        ManagementUris: {
            _$class: msls.ContentItem,
            _$name: "ManagementUris",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: lightSwitchApplication.ManagementCredentialView
        },
        ManagementUris1: {
            _$class: msls.ContentItem,
            _$name: "ManagementUris1",
            _$parentName: "ManagementUris",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementCredentialView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ManagementCredentialView,
                _$entry: {
                    elementType: lightSwitchApplication.ManagementUri
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ManagementUris1",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementUri,
            value: lightSwitchApplication.ManagementUri
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementUri,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementUri,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementUri,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementCredentialView,
            data: lightSwitchApplication.ManagementUri,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManagementCredentialView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ManagementCredentialView, {
        /// <field>
        /// Called when a new ManagementCredentialView screen is created.
        /// <br/>created(msls.application.ManagementCredentialView screen)
        /// </field>
        created: [lightSwitchApplication.ManagementCredentialView],
        /// <field>
        /// Called before changes on an active ManagementCredentialView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ManagementCredentialView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ManagementCredentialView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("Details"); }],
        /// <field>
        /// Called after the ManagementCredential_Id1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_Id1_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_Id1"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("Name"); }],
        /// <field>
        /// Called after the ManagementCredential_Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_Description_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_Description"); }],
        /// <field>
        /// Called after the Username content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Username_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("Username"); }],
        /// <field>
        /// Called after the ManagementCredential_Password content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_Password_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_Password"); }],
        /// <field>
        /// Called after the ManagementCredential_EncryptedPassword content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_EncryptedPassword_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_EncryptedPassword"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("General"); }],
        /// <field>
        /// Called after the ManagementCredential_Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_Tid_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_Tid"); }],
        /// <field>
        /// Called after the ManagementCredential_Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_Id_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_Id"); }],
        /// <field>
        /// Called after the ManagementCredential_Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_Created_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_Created"); }],
        /// <field>
        /// Called after the ManagementCredential_CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_CreatedBy"); }],
        /// <field>
        /// Called after the ManagementCredential_Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_Modified_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_Modified"); }],
        /// <field>
        /// Called after the ManagementCredential_ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementCredential_ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementCredential_ModifiedBy"); }],
        /// <field>
        /// Called after the ManagementUris content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementUris_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementUris"); }],
        /// <field>
        /// Called after the ManagementUris1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementUris1_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("ManagementUris1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("Description"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("Type"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.ManagementCredentialView().findContentItem("Value"); }]
    });

    lightSwitchApplication.ManagementUriList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManagementUriList
        },
        ManagementUriList: {
            _$class: msls.ContentItem,
            _$name: "ManagementUriList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ManagementUriList,
            data: lightSwitchApplication.ManagementUriList,
            value: lightSwitchApplication.ManagementUriList
        },
        ManagementUris: {
            _$class: msls.ContentItem,
            _$name: "ManagementUris",
            _$parentName: "ManagementUriList",
            screen: lightSwitchApplication.ManagementUriList,
            data: lightSwitchApplication.ManagementUriList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ManagementUriList,
                _$entry: {
                    elementType: lightSwitchApplication.ManagementUri
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ManagementUris",
            screen: lightSwitchApplication.ManagementUriList,
            data: lightSwitchApplication.ManagementUri,
            value: lightSwitchApplication.ManagementUri
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementUriList,
            data: lightSwitchApplication.ManagementUri,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementUriList,
            data: lightSwitchApplication.ManagementUri,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementUriList,
            data: lightSwitchApplication.ManagementUri,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "rows",
            screen: lightSwitchApplication.ManagementUriList,
            data: lightSwitchApplication.ManagementUri,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManagementUriList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ManagementUriList, {
        /// <field>
        /// Called when a new ManagementUriList screen is created.
        /// <br/>created(msls.application.ManagementUriList screen)
        /// </field>
        created: [lightSwitchApplication.ManagementUriList],
        /// <field>
        /// Called before changes on an active ManagementUriList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ManagementUriList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ManagementUriList],
        /// <field>
        /// Called after the ManagementUriList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementUriList_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriList().findContentItem("ManagementUriList"); }],
        /// <field>
        /// Called after the ManagementUris content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementUris_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriList().findContentItem("ManagementUris"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriList().findContentItem("Description"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriList().findContentItem("Type"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriList().findContentItem("Value"); }]
    });

    lightSwitchApplication.ManagementUriView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManagementUriView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: lightSwitchApplication.ManagementUriView
        },
        ManagementUri_Id: {
            _$class: msls.ContentItem,
            _$name: "ManagementUri_Id",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: String
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "Details",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: lightSwitchApplication.ManagementUriView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.ManagementUriView,
            data: lightSwitchApplication.ManagementUriView,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ManagementUriView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ManagementUriView, {
        /// <field>
        /// Called when a new ManagementUriView screen is created.
        /// <br/>created(msls.application.ManagementUriView screen)
        /// </field>
        created: [lightSwitchApplication.ManagementUriView],
        /// <field>
        /// Called before changes on an active ManagementUriView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ManagementUriView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ManagementUriView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("Details"); }],
        /// <field>
        /// Called after the ManagementUri_Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagementUri_Id_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("ManagementUri_Id"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("Description"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("Type"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("Value"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("Id"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("Created"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("Modified"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ManagementUriView().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.NodesList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.NodesList
        },
        NodeList: {
            _$class: msls.ContentItem,
            _$name: "NodeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.NodesList,
            data: lightSwitchApplication.NodesList,
            value: lightSwitchApplication.NodesList
        },
        Nodes: {
            _$class: msls.ContentItem,
            _$name: "Nodes",
            _$parentName: "NodeList",
            screen: lightSwitchApplication.NodesList,
            data: lightSwitchApplication.NodesList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.NodesList,
                _$entry: {
                    elementType: lightSwitchApplication.Node
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Nodes",
            screen: lightSwitchApplication.NodesList,
            data: lightSwitchApplication.Node,
            value: lightSwitchApplication.Node
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.NodesList,
            data: lightSwitchApplication.Node,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "rows",
            screen: lightSwitchApplication.NodesList,
            data: lightSwitchApplication.Node,
            value: String
        },
        ParentId: {
            _$class: msls.ContentItem,
            _$name: "ParentId",
            _$parentName: "rows",
            screen: lightSwitchApplication.NodesList,
            data: lightSwitchApplication.Node,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.NodesList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.NodesList, {
        /// <field>
        /// Called when a new NodesList screen is created.
        /// <br/>created(msls.application.NodesList screen)
        /// </field>
        created: [lightSwitchApplication.NodesList],
        /// <field>
        /// Called before changes on an active NodesList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.NodesList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.NodesList],
        /// <field>
        /// Called after the NodeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NodeList_postRender: [$element, function () { return new lightSwitchApplication.NodesList().findContentItem("NodeList"); }],
        /// <field>
        /// Called after the Nodes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nodes_postRender: [$element, function () { return new lightSwitchApplication.NodesList().findContentItem("Nodes"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.NodesList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.NodesList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.NodesList().findContentItem("Type"); }],
        /// <field>
        /// Called after the ParentId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ParentId_postRender: [$element, function () { return new lightSwitchApplication.NodesList().findContentItem("ParentId"); }]
    });

    lightSwitchApplication.NodeView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.NodeView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: lightSwitchApplication.NodeView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "Details",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: String
        },
        ParentId: {
            _$class: msls.ContentItem,
            _$name: "ParentId",
            _$parentName: "Details",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: String
        },
        Children: {
            _$class: msls.ContentItem,
            _$name: "Children",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: lightSwitchApplication.NodeView
        },
        Children1: {
            _$class: msls.ContentItem,
            _$name: "Children1",
            _$parentName: "Children",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.NodeView,
                _$entry: {
                    elementType: lightSwitchApplication.Node
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Children1",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.Node,
            value: lightSwitchApplication.Node
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.Node,
            value: String
        },
        Type1: {
            _$class: msls.ContentItem,
            _$name: "Type1",
            _$parentName: "rows",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.Node,
            value: String
        },
        ParentId1: {
            _$class: msls.ContentItem,
            _$name: "ParentId1",
            _$parentName: "rows",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.Node,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: lightSwitchApplication.NodeView
        },
        Node_Tid: {
            _$class: msls.ContentItem,
            _$name: "Node_Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: String
        },
        Node_Id: {
            _$class: msls.ContentItem,
            _$name: "Node_Id",
            _$parentName: "General",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: String
        },
        Node_Created: {
            _$class: msls.ContentItem,
            _$name: "Node_Created",
            _$parentName: "General",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: Date
        },
        Node_CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "Node_CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: String
        },
        Node_Modified: {
            _$class: msls.ContentItem,
            _$name: "Node_Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: Date
        },
        Node_ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "Node_ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.NodeView,
            data: lightSwitchApplication.NodeView,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.NodeView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.NodeView, {
        /// <field>
        /// Called when a new NodeView screen is created.
        /// <br/>created(msls.application.NodeView screen)
        /// </field>
        created: [lightSwitchApplication.NodeView],
        /// <field>
        /// Called before changes on an active NodeView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.NodeView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.NodeView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Type"); }],
        /// <field>
        /// Called after the ParentId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ParentId_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("ParentId"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Description"); }],
        /// <field>
        /// Called after the Children content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Children_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Children"); }],
        /// <field>
        /// Called after the Children1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Children1_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Children1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Type1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type1_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Type1"); }],
        /// <field>
        /// Called after the ParentId1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ParentId1_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("ParentId1"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("General"); }],
        /// <field>
        /// Called after the Node_Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Node_Tid_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Node_Tid"); }],
        /// <field>
        /// Called after the Node_Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Node_Id_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Node_Id"); }],
        /// <field>
        /// Called after the Node_Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Node_Created_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Node_Created"); }],
        /// <field>
        /// Called after the Node_CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Node_CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Node_CreatedBy"); }],
        /// <field>
        /// Called after the Node_Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Node_Modified_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Node_Modified"); }],
        /// <field>
        /// Called after the Node_ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Node_ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.NodeView().findContentItem("Node_ModifiedBy"); }]
    });

    lightSwitchApplication.OrderItemsList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderItemsList
        },
        OrderItemList: {
            _$class: msls.ContentItem,
            _$name: "OrderItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItemsList,
            value: lightSwitchApplication.OrderItemsList
        },
        OrderItems: {
            _$class: msls.ContentItem,
            _$name: "OrderItems",
            _$parentName: "OrderItemList",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItemsList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.OrderItemsList,
                _$entry: {
                    elementType: lightSwitchApplication.OrderItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "OrderItems",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: lightSwitchApplication.OrderItem
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: Number
        },
        OrderId: {
            _$class: msls.ContentItem,
            _$name: "OrderId",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderItemsList,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderItemsList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderItemsList, {
        /// <field>
        /// Called when a new OrderItemsList screen is created.
        /// <br/>created(msls.application.OrderItemsList screen)
        /// </field>
        created: [lightSwitchApplication.OrderItemsList],
        /// <field>
        /// Called before changes on an active OrderItemsList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderItemsList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderItemsList],
        /// <field>
        /// Called after the OrderItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderItemList_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("OrderItemList"); }],
        /// <field>
        /// Called after the OrderItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderItems_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("OrderItems"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the OrderId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderId_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("OrderId"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrderItemsList().findContentItem("Description"); }]
    });

    lightSwitchApplication.OrderItemView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderItemView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: lightSwitchApplication.OrderItemView
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: lightSwitchApplication.OrderItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: lightSwitchApplication.OrderItem
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        OrderId: {
            _$class: msls.ContentItem,
            _$name: "OrderId",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: Number
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "left",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItem,
            value: lightSwitchApplication.OrderItem
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: lightSwitchApplication.OrderItemView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderItemView,
            data: lightSwitchApplication.OrderItemView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderItemView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderItemView, {
        /// <field>
        /// Called when a new OrderItemView screen is created.
        /// <br/>created(msls.application.OrderItemView screen)
        /// </field>
        created: [lightSwitchApplication.OrderItemView],
        /// <field>
        /// Called before changes on an active OrderItemView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderItemView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderItemView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.OrderItemView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.OrderItemView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.OrderItemView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.OrderItemView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Version"); }],
        /// <field>
        /// Called after the OrderId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderId_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("OrderId"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Type"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("right"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Description"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.OrderItemView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.OrdersList.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrdersList
        },
        OrderList: {
            _$class: msls.ContentItem,
            _$name: "OrderList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.OrdersList,
            value: lightSwitchApplication.OrdersList
        },
        Orders: {
            _$class: msls.ContentItem,
            _$name: "Orders",
            _$parentName: "OrderList",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.OrdersList,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.OrdersList,
                _$entry: {
                    elementType: lightSwitchApplication.Order
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Orders",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: lightSwitchApplication.Order
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: Date
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrdersList,
            data: lightSwitchApplication.Order,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrdersList
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrdersList, {
        /// <field>
        /// Called when a new OrdersList screen is created.
        /// <br/>created(msls.application.OrdersList screen)
        /// </field>
        created: [lightSwitchApplication.OrdersList],
        /// <field>
        /// Called before changes on an active OrdersList screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrdersList screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrdersList],
        /// <field>
        /// Called after the OrderList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderList_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("OrderList"); }],
        /// <field>
        /// Called after the Orders content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Orders_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Orders"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Status"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Created"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrdersList().findContentItem("Description"); }]
    });

    lightSwitchApplication.OrderView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: lightSwitchApplication.OrderView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Requester: {
            _$class: msls.ContentItem,
            _$name: "Requester",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: lightSwitchApplication.OrderView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderView,
            data: lightSwitchApplication.OrderView,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderView, {
        /// <field>
        /// Called when a new OrderView screen is created.
        /// <br/>created(msls.application.OrderView screen)
        /// </field>
        created: [lightSwitchApplication.OrderView],
        /// <field>
        /// Called before changes on an active OrderView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderView],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.OrderView screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.OrderView],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.OrderView screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.OrderView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Status"); }],
        /// <field>
        /// Called after the Requester content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Requester_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Requester"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Description1"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.OrderView().findContentItem("Modified"); }]
    });

    lightSwitchApplication.OrderViewDetails.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderViewDetails
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: lightSwitchApplication.OrderViewDetails
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        OrderItems: {
            _$class: msls.ContentItem,
            _$name: "OrderItems",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: lightSwitchApplication.OrderViewDetails
        },
        OrderItems1: {
            _$class: msls.ContentItem,
            _$name: "OrderItems1",
            _$parentName: "OrderItems",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.OrderViewDetails,
                _$entry: {
                    elementType: lightSwitchApplication.OrderItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "OrderItems1",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderItem,
            value: lightSwitchApplication.OrderItem
        },
        OrderId: {
            _$class: msls.ContentItem,
            _$name: "OrderId",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderItem,
            value: String
        },
        Quantity: {
            _$class: msls.ContentItem,
            _$name: "Quantity",
            _$parentName: "rows",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderItem,
            value: Number
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: lightSwitchApplication.OrderViewDetails
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.OrderViewDetails,
            data: lightSwitchApplication.OrderViewDetails,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.OrderViewDetails
        }
    };

    msls._addEntryPoints(lightSwitchApplication.OrderViewDetails, {
        /// <field>
        /// Called when a new OrderViewDetails screen is created.
        /// <br/>created(msls.application.OrderViewDetails screen)
        /// </field>
        created: [lightSwitchApplication.OrderViewDetails],
        /// <field>
        /// Called before changes on an active OrderViewDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.OrderViewDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.OrderViewDetails],
        /// <field>
        /// Called to determine if the deleteEntity method can be executed.
        /// <br/>canExecute(msls.application.OrderViewDetails screen)
        /// </field>
        deleteEntity_canExecute: [lightSwitchApplication.OrderViewDetails],
        /// <field>
        /// Called to execute the deleteEntity method.
        /// <br/>execute(msls.application.OrderViewDetails screen)
        /// </field>
        deleteEntity_execute: [lightSwitchApplication.OrderViewDetails],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Name"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Status"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Description"); }],
        /// <field>
        /// Called after the OrderItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderItems_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("OrderItems"); }],
        /// <field>
        /// Called after the OrderItems1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderItems1_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("OrderItems1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("rows"); }],
        /// <field>
        /// Called after the OrderId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OrderId_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("OrderId"); }],
        /// <field>
        /// Called after the Quantity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Quantity_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Quantity"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.OrderViewDetails().findContentItem("Modified"); }]
    });

    lightSwitchApplication.ProductView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ProductView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: lightSwitchApplication.ProductView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "Details",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: String
        },
        Version: {
            _$class: msls.ContentItem,
            _$name: "Version",
            _$parentName: "Details",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "Details",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: String
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "Details",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: String
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: lightSwitchApplication.Product
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ValidFrom: {
            _$class: msls.ContentItem,
            _$name: "ValidFrom",
            _$parentName: "left",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.Product,
            value: Date
        },
        EndOfSale: {
            _$class: msls.ContentItem,
            _$name: "EndOfSale",
            _$parentName: "left",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.Product,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.Product,
            value: lightSwitchApplication.Product
        },
        ValidUntil: {
            _$class: msls.ContentItem,
            _$name: "ValidUntil",
            _$parentName: "right",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.Product,
            value: Date
        },
        EndOfLife: {
            _$class: msls.ContentItem,
            _$name: "EndOfLife",
            _$parentName: "right",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.Product,
            value: Date
        },
        General: {
            _$class: msls.ContentItem,
            _$name: "General",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: lightSwitchApplication.ProductView
        },
        Tid: {
            _$class: msls.ContentItem,
            _$name: "Tid",
            _$parentName: "General",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "General",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "General",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "General",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "General",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: Date
        },
        CatalogueItems: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItems",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: lightSwitchApplication.ProductView
        },
        CatalogueItems1: {
            _$class: msls.ContentItem,
            _$name: "CatalogueItems1",
            _$parentName: "CatalogueItems",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.ProductView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ProductView,
                _$entry: {
                    elementType: lightSwitchApplication.CatalogueItem1
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "CatalogueItems1",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.CatalogueItem1,
            value: lightSwitchApplication.CatalogueItem1
        },
        Id1: {
            _$class: msls.ContentItem,
            _$name: "Id1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProductView,
            data: lightSwitchApplication.CatalogueItem1,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ProductView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ProductView, {
        /// <field>
        /// Called when a new ProductView screen is created.
        /// <br/>created(msls.application.ProductView screen)
        /// </field>
        created: [lightSwitchApplication.ProductView],
        /// <field>
        /// Called before changes on an active ProductView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ProductView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ProductView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Type"); }],
        /// <field>
        /// Called after the Version content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Version_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Version"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Description"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("left"); }],
        /// <field>
        /// Called after the ValidFrom content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ValidFrom_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("ValidFrom"); }],
        /// <field>
        /// Called after the EndOfSale content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndOfSale_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("EndOfSale"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("right"); }],
        /// <field>
        /// Called after the ValidUntil content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ValidUntil_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("ValidUntil"); }],
        /// <field>
        /// Called after the EndOfLife content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndOfLife_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("EndOfLife"); }],
        /// <field>
        /// Called after the General content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        General_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("General"); }],
        /// <field>
        /// Called after the Tid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tid_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Tid"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Id"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Modified"); }],
        /// <field>
        /// Called after the CatalogueItems content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItems_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("CatalogueItems"); }],
        /// <field>
        /// Called after the CatalogueItems1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CatalogueItems1_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("CatalogueItems1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("rows"); }],
        /// <field>
        /// Called after the Id1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id1_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Id1"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ProductView().findContentItem("Name1"); }]
    });

}(msls.application));