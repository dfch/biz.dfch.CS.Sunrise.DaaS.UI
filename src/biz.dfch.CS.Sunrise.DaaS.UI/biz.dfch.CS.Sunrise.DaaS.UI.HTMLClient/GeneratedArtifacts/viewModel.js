﻿/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function ApprovalApprove(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ApprovalApprove screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Approval" type="msls.application.Approval">
        /// Gets or sets the approval for this screen.
        /// </field>
        /// <field name="HelpText" type="String">
        /// Gets or sets the helpText for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ApprovalApprove.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ApprovalApprove", parameters);
    }

    function ApprovalDecline(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ApprovalDecline screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Approval" type="msls.application.Approval">
        /// Gets or sets the approval for this screen.
        /// </field>
        /// <field name="HelpText" type="String">
        /// Gets or sets the helpText for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ApprovalDecline.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ApprovalDecline", parameters);
    }

    function ApprovalsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ApprovalsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Approvals" type="msls.VisualCollection" elementType="msls.application.Approval">
        /// Gets the approvals for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ApprovalsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ApprovalsList", parameters);
    }

    function ApprovalView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ApprovalView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Approval" type="msls.application.Approval">
        /// Gets or sets the approval for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ApprovalView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ApprovalView", parameters);
    }

    function CartEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CartEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Cart" type="msls.application.Cart">
        /// Gets or sets the cart for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CartEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CartEdit", parameters);
    }

    function CartItemEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CartItemEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CartItem" type="msls.application.CartItem">
        /// Gets or sets the cartItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CartItemEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CartItemEdit", parameters);
    }

    function CartItemPersonalAdd(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CartItemPersonalAdd screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CartItem" type="msls.application.CartItem">
        /// Gets or sets the cartItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CartItemPersonalAdd.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CartItemPersonalAdd", parameters);
    }

    function CartItemTechnicalAdd(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CartItemTechnicalAdd screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CartItem" type="msls.application.CartItem">
        /// Gets or sets the cartItem for this screen.
        /// </field>
        /// <field name="Requester" type="String">
        /// Gets or sets the requester for this screen.
        /// </field>
        /// <field name="HelpText" type="String">
        /// Gets or sets the helpText for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CartItemTechnicalAdd.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CartItemTechnicalAdd", parameters);
    }

    function CartItemView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CartItemView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CartItem" type="msls.application.CartItem">
        /// Gets or sets the cartItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CartItemView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CartItemView", parameters);
    }

    function CartsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CartsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Carts" type="msls.VisualCollection" elementType="msls.application.Cart">
        /// Gets the carts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CartsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CartsList", parameters);
    }

    function CartView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CartView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Cart" type="msls.application.Cart">
        /// Gets or sets the cart for this screen.
        /// </field>
        /// <field name="CartItems" type="msls.VisualCollection" elementType="msls.application.CartItem">
        /// Gets the cartItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CartView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CartView", parameters);
    }

    function CatalogueItemsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CatalogueItemsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CatalogueItems" type="msls.VisualCollection" elementType="msls.application.CatalogueItem1">
        /// Gets the catalogueItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CatalogueItemsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CatalogueItemsList", parameters);
    }

    function CatalogueItemView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CatalogueItemView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CatalogueItem1" type="msls.application.CatalogueItem1">
        /// Gets or sets the catalogueItem1 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CatalogueItemView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CatalogueItemView", parameters);
    }

    function CataloguesList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CataloguesList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Catalogues" type="msls.VisualCollection" elementType="msls.application.Catalogue">
        /// Gets the catalogues for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CataloguesList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CataloguesList", parameters);
    }

    function CatalogueView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the CatalogueView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Catalogue" type="msls.application.Catalogue">
        /// Gets or sets the catalogue for this screen.
        /// </field>
        /// <field name="CatalogueItems" type="msls.VisualCollection" elementType="msls.application.CatalogueItem1">
        /// Gets the catalogueItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.CatalogueView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "CatalogueView", parameters);
    }

    function EndpointsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EndpointsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Endpoints" type="msls.VisualCollection" elementType="msls.application.Endpoint">
        /// Gets the endpoints for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EndpointsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EndpointsList", parameters);
    }

    function EndpointView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EndpointView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Endpoint" type="msls.application.Endpoint">
        /// Gets or sets the endpoint for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EndpointView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EndpointView", parameters);
    }

    function EntityTypeEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EntityTypeEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EntityType" type="msls.application.EntityType">
        /// Gets or sets the entityType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EntityTypeEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EntityTypeEdit", parameters);
    }

    function EntityTypesList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EntityTypesList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EntityTypes" type="msls.VisualCollection" elementType="msls.application.EntityType">
        /// Gets the entityTypes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EntityTypesList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EntityTypesList", parameters);
    }

    function EntityTypeView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EntityTypeView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EntityType" type="msls.application.EntityType">
        /// Gets or sets the entityType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EntityTypeView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EntityTypeView", parameters);
    }

    function GateAdd(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the GateAdd screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Gate" type="msls.application.Gate">
        /// Gets or sets the gate for this screen.
        /// </field>
        /// <field name="details" type="msls.application.GateAdd.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "GateAdd", parameters);
    }

    function GateEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the GateEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Gate" type="msls.application.Gate">
        /// Gets or sets the gate for this screen.
        /// </field>
        /// <field name="details" type="msls.application.GateEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "GateEdit", parameters);
    }

    function GatesList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the GatesList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Gates" type="msls.VisualCollection" elementType="msls.application.Gate">
        /// Gets the gates for this screen.
        /// </field>
        /// <field name="details" type="msls.application.GatesList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "GatesList", parameters);
    }

    function GateView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the GateView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Gate" type="msls.application.Gate">
        /// Gets or sets the gate for this screen.
        /// </field>
        /// <field name="details" type="msls.application.GateView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "GateView", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function JobsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the JobsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Jobs" type="msls.VisualCollection" elementType="msls.application.Job">
        /// Gets the jobs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.JobsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "JobsList", parameters);
    }

    function JobView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the JobView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Job" type="msls.application.Job">
        /// Gets or sets the job for this screen.
        /// </field>
        /// <field name="details" type="msls.application.JobView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "JobView", parameters);
    }

    function KeyNameValueAdd(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the KeyNameValueAdd screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="KeyNameValue" type="msls.application.KeyNameValue">
        /// Gets or sets the keyNameValue for this screen.
        /// </field>
        /// <field name="details" type="msls.application.KeyNameValueAdd.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "KeyNameValueAdd", parameters);
    }

    function KeyNameValueEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the KeyNameValueEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="KeyNameValue" type="msls.application.KeyNameValue">
        /// Gets or sets the keyNameValue for this screen.
        /// </field>
        /// <field name="details" type="msls.application.KeyNameValueEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "KeyNameValueEdit", parameters);
    }

    function KeyNameValuesList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the KeyNameValuesList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="KeyNameValues" type="msls.VisualCollection" elementType="msls.application.KeyNameValue">
        /// Gets the keyNameValues for this screen.
        /// </field>
        /// <field name="details" type="msls.application.KeyNameValuesList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "KeyNameValuesList", parameters);
    }

    function KeyNameValueView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the KeyNameValueView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="KeyNameValue" type="msls.application.KeyNameValue">
        /// Gets or sets the keyNameValue for this screen.
        /// </field>
        /// <field name="details" type="msls.application.KeyNameValueView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "KeyNameValueView", parameters);
    }

    function ManagementCredentialList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ManagementCredentialList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ManagementCredentials" type="msls.VisualCollection" elementType="msls.application.ManagementCredential">
        /// Gets the managementCredentials for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ManagementCredentialList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ManagementCredentialList", parameters);
    }

    function ManagementCredentialView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ManagementCredentialView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ManagementCredential" type="msls.application.ManagementCredential">
        /// Gets or sets the managementCredential for this screen.
        /// </field>
        /// <field name="ManagementUris" type="msls.VisualCollection" elementType="msls.application.ManagementUri">
        /// Gets the managementUris for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ManagementCredentialView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ManagementCredentialView", parameters);
    }

    function ManagementUriList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ManagementUriList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ManagementUris" type="msls.VisualCollection" elementType="msls.application.ManagementUri">
        /// Gets the managementUris for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ManagementUriList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ManagementUriList", parameters);
    }

    function ManagementUriView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ManagementUriView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ManagementUri" type="msls.application.ManagementUri">
        /// Gets or sets the managementUri for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ManagementUriView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ManagementUriView", parameters);
    }

    function NodesList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the NodesList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Nodes" type="msls.VisualCollection" elementType="msls.application.Node">
        /// Gets the nodes for this screen.
        /// </field>
        /// <field name="details" type="msls.application.NodesList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "NodesList", parameters);
    }

    function NodeView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the NodeView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Node" type="msls.application.Node">
        /// Gets or sets the node for this screen.
        /// </field>
        /// <field name="Children" type="msls.VisualCollection" elementType="msls.application.Node">
        /// Gets the children for this screen.
        /// </field>
        /// <field name="details" type="msls.application.NodeView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "NodeView", parameters);
    }

    function OrderItemsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderItemsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OrderItems" type="msls.VisualCollection" elementType="msls.application.OrderItem">
        /// Gets the orderItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderItemsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderItemsList", parameters);
    }

    function OrderItemView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderItemView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="OrderItem" type="msls.application.OrderItem">
        /// Gets or sets the orderItem for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderItemView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderItemView", parameters);
    }

    function OrdersList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrdersList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Orders" type="msls.VisualCollection" elementType="msls.application.Order">
        /// Gets the orders for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrdersList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrdersList", parameters);
    }

    function OrderView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Order" type="msls.application.Order">
        /// Gets or sets the order for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderView", parameters);
    }

    function OrderViewDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderViewDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Order" type="msls.application.Order">
        /// Gets or sets the order for this screen.
        /// </field>
        /// <field name="OrderItems" type="msls.VisualCollection" elementType="msls.application.OrderItem">
        /// Gets the orderItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.OrderViewDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderViewDetails", parameters);
    }

    function ProductView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ProductView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Product" type="msls.application.Product">
        /// Gets or sets the product for this screen.
        /// </field>
        /// <field name="CatalogueItems" type="msls.VisualCollection" elementType="msls.application.CatalogueItem1">
        /// Gets the catalogueItems for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ProductView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ProductView", parameters);
    }

    msls._addToNamespace("msls.application", {

        ApprovalApprove: $defineScreen(ApprovalApprove, [
            { name: "Approval", kind: "local", type: lightSwitchApplication.Approval },
            { name: "HelpText", kind: "local", type: String }
        ], [
        ]),

        ApprovalDecline: $defineScreen(ApprovalDecline, [
            { name: "Approval", kind: "local", type: lightSwitchApplication.Approval },
            { name: "HelpText", kind: "local", type: String }
        ], [
        ]),

        ApprovalsList: $defineScreen(ApprovalsList, [
            {
                name: "Approvals", kind: "collection", elementType: lightSwitchApplication.Approval,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Approvals;
                }
            }
        ], [
            { name: "refresh" }
        ]),

        ApprovalView: $defineScreen(ApprovalView, [
            { name: "Approval", kind: "local", type: lightSwitchApplication.Approval }
        ], [
            { name: "approve" },
            { name: "decline" },
            { name: "refresh" },
            { name: "deleteEntity" },
            { name: "goToReferencedObject" }
        ]),

        CartEdit: $defineScreen(CartEdit, [
            { name: "Cart", kind: "local", type: lightSwitchApplication.Cart }
        ], [
        ]),

        CartItemEdit: $defineScreen(CartItemEdit, [
            { name: "CartItem", kind: "local", type: lightSwitchApplication.CartItem }
        ], [
        ]),

        CartItemPersonalAdd: $defineScreen(CartItemPersonalAdd, [
            { name: "CartItem", kind: "local", type: lightSwitchApplication.CartItem }
        ], [
        ]),

        CartItemTechnicalAdd: $defineScreen(CartItemTechnicalAdd, [
            { name: "CartItem", kind: "local", type: lightSwitchApplication.CartItem },
            { name: "Requester", kind: "local", type: String },
            { name: "HelpText", kind: "local", type: String }
        ], [
        ]),

        CartItemView: $defineScreen(CartItemView, [
            { name: "CartItem", kind: "local", type: lightSwitchApplication.CartItem }
        ], [
            { name: "deleteEntity" },
            { name: "goToCatalogueItem" }
        ]),

        CartsList: $defineScreen(CartsList, [
            {
                name: "Carts", kind: "collection", elementType: lightSwitchApplication.Cart,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Carts;
                }
            }
        ], [
        ]),

        CartView: $defineScreen(CartView, [
            { name: "Cart", kind: "local", type: lightSwitchApplication.Cart },
            {
                name: "CartItems", kind: "collection", elementType: lightSwitchApplication.CartItem,
                getNavigationProperty: function () {
                    if (this.owner.Cart) {
                        return this.owner.Cart.details.properties.CartItems;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "deleteEntity" },
            { name: "checkoutCart" }
        ]),

        CatalogueItemsList: $defineScreen(CatalogueItemsList, [
            {
                name: "CatalogueItems", kind: "collection", elementType: lightSwitchApplication.CatalogueItem1,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.CatalogueItems;
                }
            }
        ], [
        ]),

        CatalogueItemView: $defineScreen(CatalogueItemView, [
            { name: "CatalogueItem1", kind: "local", type: lightSwitchApplication.CatalogueItem1 }
        ], [
            { name: "deleteEntity" },
            { name: "addToCart" },
            { name: "navigateToProduct" }
        ]),

        CataloguesList: $defineScreen(CataloguesList, [
            {
                name: "Catalogues", kind: "collection", elementType: lightSwitchApplication.Catalogue,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Catalogues;
                }
            }
        ], [
        ]),

        CatalogueView: $defineScreen(CatalogueView, [
            { name: "Catalogue", kind: "local", type: lightSwitchApplication.Catalogue },
            {
                name: "CatalogueItems", kind: "collection", elementType: lightSwitchApplication.CatalogueItem1,
                getNavigationProperty: function () {
                    if (this.owner.Catalogue) {
                        return this.owner.Catalogue.details.properties.CatalogueItems;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "addToCart" }
        ]),

        EndpointsList: $defineScreen(EndpointsList, [
            {
                name: "Endpoints", kind: "collection", elementType: lightSwitchApplication.Endpoint,
                createQuery: function () {
                    return this.dataWorkspace.DiagnosticsData.Endpoints;
                }
            }
        ], [
        ]),

        EndpointView: $defineScreen(EndpointView, [
            { name: "Endpoint", kind: "local", type: lightSwitchApplication.Endpoint }
        ], [
            { name: "deleteEntity" }
        ]),

        EntityTypeEdit: $defineScreen(EntityTypeEdit, [
            { name: "EntityType", kind: "local", type: lightSwitchApplication.EntityType }
        ], [
        ]),

        EntityTypesList: $defineScreen(EntityTypesList, [
            {
                name: "EntityTypes", kind: "collection", elementType: lightSwitchApplication.EntityType,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.EntityTypes;
                }
            }
        ], [
        ]),

        EntityTypeView: $defineScreen(EntityTypeView, [
            { name: "EntityType", kind: "local", type: lightSwitchApplication.EntityType }
        ], [
            { name: "deleteEntity" }
        ]),

        GateAdd: $defineScreen(GateAdd, [
            { name: "Gate", kind: "local", type: lightSwitchApplication.Gate }
        ], [
        ]),

        GateEdit: $defineScreen(GateEdit, [
            { name: "Gate", kind: "local", type: lightSwitchApplication.Gate }
        ], [
        ]),

        GatesList: $defineScreen(GatesList, [
            {
                name: "Gates", kind: "collection", elementType: lightSwitchApplication.Gate,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Gates;
                }
            }
        ], [
        ]),

        GateView: $defineScreen(GateView, [
            { name: "Gate", kind: "local", type: lightSwitchApplication.Gate }
        ], [
            { name: "deleteEntity" }
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        JobsList: $defineScreen(JobsList, [
            {
                name: "Jobs", kind: "collection", elementType: lightSwitchApplication.Job,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Jobs;
                }
            }
        ], [
        ]),

        JobView: $defineScreen(JobView, [
            { name: "Job", kind: "local", type: lightSwitchApplication.Job }
        ], [
            { name: "deleteEntity" }
        ]),

        KeyNameValueAdd: $defineScreen(KeyNameValueAdd, [
            { name: "KeyNameValue", kind: "local", type: lightSwitchApplication.KeyNameValue }
        ], [
        ]),

        KeyNameValueEdit: $defineScreen(KeyNameValueEdit, [
            { name: "KeyNameValue", kind: "local", type: lightSwitchApplication.KeyNameValue }
        ], [
        ]),

        KeyNameValuesList: $defineScreen(KeyNameValuesList, [
            {
                name: "KeyNameValues", kind: "collection", elementType: lightSwitchApplication.KeyNameValue,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.KeyNameValues;
                }
            }
        ], [
        ]),

        KeyNameValueView: $defineScreen(KeyNameValueView, [
            { name: "KeyNameValue", kind: "local", type: lightSwitchApplication.KeyNameValue }
        ], [
            { name: "deleteEntity" }
        ]),

        ManagementCredentialList: $defineScreen(ManagementCredentialList, [
            {
                name: "ManagementCredentials", kind: "collection", elementType: lightSwitchApplication.ManagementCredential,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.ManagementCredentials;
                }
            }
        ], [
        ]),

        ManagementCredentialView: $defineScreen(ManagementCredentialView, [
            { name: "ManagementCredential", kind: "local", type: lightSwitchApplication.ManagementCredential },
            {
                name: "ManagementUris", kind: "collection", elementType: lightSwitchApplication.ManagementUri,
                getNavigationProperty: function () {
                    if (this.owner.ManagementCredential) {
                        return this.owner.ManagementCredential.details.properties.ManagementUris;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        ManagementUriList: $defineScreen(ManagementUriList, [
            {
                name: "ManagementUris", kind: "collection", elementType: lightSwitchApplication.ManagementUri,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.ManagementUris;
                }
            }
        ], [
        ]),

        ManagementUriView: $defineScreen(ManagementUriView, [
            { name: "ManagementUri", kind: "local", type: lightSwitchApplication.ManagementUri }
        ], [
        ]),

        NodesList: $defineScreen(NodesList, [
            {
                name: "Nodes", kind: "collection", elementType: lightSwitchApplication.Node,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Nodes;
                }
            }
        ], [
        ]),

        NodeView: $defineScreen(NodeView, [
            { name: "Node", kind: "local", type: lightSwitchApplication.Node },
            {
                name: "Children", kind: "collection", elementType: lightSwitchApplication.Node,
                getNavigationProperty: function () {
                    if (this.owner.Node) {
                        return this.owner.Node.details.properties.Children;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        OrderItemsList: $defineScreen(OrderItemsList, [
            {
                name: "OrderItems", kind: "collection", elementType: lightSwitchApplication.OrderItem,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.OrderItems;
                }
            }
        ], [
        ]),

        OrderItemView: $defineScreen(OrderItemView, [
            { name: "OrderItem", kind: "local", type: lightSwitchApplication.OrderItem }
        ], [
            { name: "deleteEntity" }
        ]),

        OrdersList: $defineScreen(OrdersList, [
            {
                name: "Orders", kind: "collection", elementType: lightSwitchApplication.Order,
                createQuery: function () {
                    return this.dataWorkspace.CoreData.Orders;
                }
            }
        ], [
        ]),

        OrderView: $defineScreen(OrderView, [
            { name: "Order", kind: "local", type: lightSwitchApplication.Order }
        ], [
            { name: "deleteEntity" }
        ]),

        OrderViewDetails: $defineScreen(OrderViewDetails, [
            { name: "Order", kind: "local", type: lightSwitchApplication.Order },
            {
                name: "OrderItems", kind: "collection", elementType: lightSwitchApplication.OrderItem,
                getNavigationProperty: function () {
                    if (this.owner.Order) {
                        return this.owner.Order.details.properties.OrderItems;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "deleteEntity" }
        ]),

        ProductView: $defineScreen(ProductView, [
            { name: "Product", kind: "local", type: lightSwitchApplication.Product },
            {
                name: "CatalogueItems", kind: "collection", elementType: lightSwitchApplication.CatalogueItem1,
                getNavigationProperty: function () {
                    if (this.owner.Product) {
                        return this.owner.Product.details.properties.CatalogueItems;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        showApprovalApprove: $defineShowScreen(function showApprovalApprove(Approval, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ApprovalApprove screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ApprovalApprove", parameters, options);
        }),

        showApprovalDecline: $defineShowScreen(function showApprovalDecline(Approval, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ApprovalDecline screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ApprovalDecline", parameters, options);
        }),

        showApprovalsList: $defineShowScreen(function showApprovalsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ApprovalsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ApprovalsList", parameters, options);
        }),

        showApprovalView: $defineShowScreen(function showApprovalView(Approval, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ApprovalView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ApprovalView", parameters, options);
        }),

        showCartEdit: $defineShowScreen(function showCartEdit(Cart, options) {
            /// <summary>
            /// Asynchronously navigates forward to the CartEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("CartEdit", parameters, options);
        }),

        showCartItemEdit: $defineShowScreen(function showCartItemEdit(CartItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the CartItemEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("CartItemEdit", parameters, options);
        }),

        showCartItemPersonalAdd: $defineShowScreen(function showCartItemPersonalAdd(CartItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the CartItemPersonalAdd screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("CartItemPersonalAdd", parameters, options);
        }),

        showCartItemTechnicalAdd: $defineShowScreen(function showCartItemTechnicalAdd(CartItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the CartItemTechnicalAdd screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("CartItemTechnicalAdd", parameters, options);
        }),

        showCartItemView: $defineShowScreen(function showCartItemView(CartItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the CartItemView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("CartItemView", parameters, options);
        }),

        showCartsList: $defineShowScreen(function showCartsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the CartsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("CartsList", parameters, options);
        }),

        showCartView: $defineShowScreen(function showCartView(Cart, options) {
            /// <summary>
            /// Asynchronously navigates forward to the CartView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("CartView", parameters, options);
        }),

        showCatalogueItemsList: $defineShowScreen(function showCatalogueItemsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the CatalogueItemsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("CatalogueItemsList", parameters, options);
        }),

        showCatalogueItemView: $defineShowScreen(function showCatalogueItemView(CatalogueItem1, options) {
            /// <summary>
            /// Asynchronously navigates forward to the CatalogueItemView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("CatalogueItemView", parameters, options);
        }),

        showCataloguesList: $defineShowScreen(function showCataloguesList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the CataloguesList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("CataloguesList", parameters, options);
        }),

        showCatalogueView: $defineShowScreen(function showCatalogueView(Catalogue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the CatalogueView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("CatalogueView", parameters, options);
        }),

        showEndpointsList: $defineShowScreen(function showEndpointsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the EndpointsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("EndpointsList", parameters, options);
        }),

        showEndpointView: $defineShowScreen(function showEndpointView(Endpoint, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EndpointView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EndpointView", parameters, options);
        }),

        showEntityTypeEdit: $defineShowScreen(function showEntityTypeEdit(EntityType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EntityTypeEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EntityTypeEdit", parameters, options);
        }),

        showEntityTypesList: $defineShowScreen(function showEntityTypesList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the EntityTypesList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("EntityTypesList", parameters, options);
        }),

        showEntityTypeView: $defineShowScreen(function showEntityTypeView(EntityType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EntityTypeView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EntityTypeView", parameters, options);
        }),

        showGateAdd: $defineShowScreen(function showGateAdd(Gate, options) {
            /// <summary>
            /// Asynchronously navigates forward to the GateAdd screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("GateAdd", parameters, options);
        }),

        showGateEdit: $defineShowScreen(function showGateEdit(Gate, options) {
            /// <summary>
            /// Asynchronously navigates forward to the GateEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("GateEdit", parameters, options);
        }),

        showGatesList: $defineShowScreen(function showGatesList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the GatesList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("GatesList", parameters, options);
        }),

        showGateView: $defineShowScreen(function showGateView(Gate, options) {
            /// <summary>
            /// Asynchronously navigates forward to the GateView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("GateView", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showJobsList: $defineShowScreen(function showJobsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the JobsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("JobsList", parameters, options);
        }),

        showJobView: $defineShowScreen(function showJobView(Job, options) {
            /// <summary>
            /// Asynchronously navigates forward to the JobView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("JobView", parameters, options);
        }),

        showKeyNameValueAdd: $defineShowScreen(function showKeyNameValueAdd(KeyNameValue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the KeyNameValueAdd screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("KeyNameValueAdd", parameters, options);
        }),

        showKeyNameValueEdit: $defineShowScreen(function showKeyNameValueEdit(KeyNameValue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the KeyNameValueEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("KeyNameValueEdit", parameters, options);
        }),

        showKeyNameValuesList: $defineShowScreen(function showKeyNameValuesList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the KeyNameValuesList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("KeyNameValuesList", parameters, options);
        }),

        showKeyNameValueView: $defineShowScreen(function showKeyNameValueView(KeyNameValue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the KeyNameValueView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("KeyNameValueView", parameters, options);
        }),

        showManagementCredentialList: $defineShowScreen(function showManagementCredentialList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ManagementCredentialList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ManagementCredentialList", parameters, options);
        }),

        showManagementCredentialView: $defineShowScreen(function showManagementCredentialView(ManagementCredential, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ManagementCredentialView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ManagementCredentialView", parameters, options);
        }),

        showManagementUriList: $defineShowScreen(function showManagementUriList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ManagementUriList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ManagementUriList", parameters, options);
        }),

        showManagementUriView: $defineShowScreen(function showManagementUriView(ManagementUri, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ManagementUriView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ManagementUriView", parameters, options);
        }),

        showNodesList: $defineShowScreen(function showNodesList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the NodesList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("NodesList", parameters, options);
        }),

        showNodeView: $defineShowScreen(function showNodeView(Node, options) {
            /// <summary>
            /// Asynchronously navigates forward to the NodeView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("NodeView", parameters, options);
        }),

        showOrderItemsList: $defineShowScreen(function showOrderItemsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderItemsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("OrderItemsList", parameters, options);
        }),

        showOrderItemView: $defineShowScreen(function showOrderItemView(OrderItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderItemView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderItemView", parameters, options);
        }),

        showOrdersList: $defineShowScreen(function showOrdersList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrdersList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("OrdersList", parameters, options);
        }),

        showOrderView: $defineShowScreen(function showOrderView(Order, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderView", parameters, options);
        }),

        showOrderViewDetails: $defineShowScreen(function showOrderViewDetails(Order, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderViewDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderViewDetails", parameters, options);
        }),

        showProductView: $defineShowScreen(function showProductView(Product, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ProductView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ProductView", parameters, options);
        })

    });

}(msls.application));
