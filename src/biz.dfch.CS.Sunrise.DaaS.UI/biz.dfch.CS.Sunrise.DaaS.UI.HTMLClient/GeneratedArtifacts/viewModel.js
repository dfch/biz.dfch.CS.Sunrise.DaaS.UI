/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

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

    function AuditTrailsList(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AuditTrailsList screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AuditTrails" type="msls.VisualCollection" elementType="msls.application.AuditTrail">
        /// Gets the auditTrails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AuditTrailsList.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AuditTrailsList", parameters);
    }

    function AuditTrailsView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AuditTrailsView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AuditTrail" type="msls.application.AuditTrail">
        /// Gets or sets the auditTrail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AuditTrailsView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AuditTrailsView", parameters);
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
        /// <field name="IncomingLinks" type="msls.VisualCollection" elementType="msls.application.Link">
        /// Gets the incomingLinks for this screen.
        /// </field>
        /// <field name="OutgoingLinks" type="msls.VisualCollection" elementType="msls.application.Link">
        /// Gets the outgoingLinks for this screen.
        /// </field>
        /// <field name="details" type="msls.application.NodeView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "NodeView", parameters);
    }

    function OrderAdd(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderAdd screen.
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
        /// <field name="details" type="msls.application.OrderAdd.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderAdd", parameters);
    }

    function OrderAddSpecial(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the OrderAddSpecial screen.
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
        /// <field name="details" type="msls.application.OrderAddSpecial.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "OrderAddSpecial", parameters);
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

    msls._addToNamespace("msls.application", {

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
            { name: "deleteEntity" }
        ]),

        AuditTrailsList: $defineScreen(AuditTrailsList, [
            {
                name: "AuditTrails", kind: "collection", elementType: lightSwitchApplication.AuditTrail,
                createQuery: function () {
                    return this.dataWorkspace.DiagnosticsData.AuditTrails;
                }
            }
        ], [
        ]),

        AuditTrailsView: $defineScreen(AuditTrailsView, [
            { name: "AuditTrail", kind: "local", type: lightSwitchApplication.AuditTrail }
        ], [
        ]),

        CartEdit: $defineScreen(CartEdit, [
            { name: "Cart", kind: "local", type: lightSwitchApplication.Cart }
        ], [
        ]),

        CartItemEdit: $defineScreen(CartItemEdit, [
            { name: "CartItem", kind: "local", type: lightSwitchApplication.CartItem }
        ], [
        ]),

        CartItemView: $defineScreen(CartItemView, [
            { name: "CartItem", kind: "local", type: lightSwitchApplication.CartItem }
        ], [
            { name: "deleteEntity" }
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
            { name: "deleteEntity" }
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
            { name: "deleteEntity" }
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
            { name: "somethingToProve" }
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
            },
            {
                name: "IncomingLinks", kind: "collection", elementType: lightSwitchApplication.Link,
                getNavigationProperty: function () {
                    if (this.owner.Node) {
                        return this.owner.Node.details.properties.IncomingLinks;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "OutgoingLinks", kind: "collection", elementType: lightSwitchApplication.Link,
                getNavigationProperty: function () {
                    if (this.owner.Node) {
                        return this.owner.Node.details.properties.OutgoingLinks;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        OrderAdd: $defineScreen(OrderAdd, [
            { name: "Order", kind: "local", type: lightSwitchApplication.Order }
        ], [
        ]),

        OrderAddSpecial: $defineScreen(OrderAddSpecial, [
            { name: "Order", kind: "local", type: lightSwitchApplication.Order }
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

        showAuditTrailsList: $defineShowScreen(function showAuditTrailsList(options) {
            /// <summary>
            /// Asynchronously navigates forward to the AuditTrailsList screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("AuditTrailsList", parameters, options);
        }),

        showAuditTrailsView: $defineShowScreen(function showAuditTrailsView(AuditTrail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AuditTrailsView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AuditTrailsView", parameters, options);
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

        showOrderAdd: $defineShowScreen(function showOrderAdd(Order, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderAdd screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderAdd", parameters, options);
        }),

        showOrderAddSpecial: $defineShowScreen(function showOrderAddSpecial(Order, options) {
            /// <summary>
            /// Asynchronously navigates forward to the OrderAddSpecial screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("OrderAddSpecial", parameters, options);
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
        })

    });

}(msls.application));
