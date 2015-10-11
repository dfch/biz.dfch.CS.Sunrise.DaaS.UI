/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.AuditTrail, {
        /// <field>
        /// Called when a new auditTrail is created.
        /// <br/>created(msls.application.AuditTrail entity)
        /// </field>
        created: [lightSwitchApplication.AuditTrail]
    });

    msls._addEntryPoints(lightSwitchApplication.Endpoint, {
        /// <field>
        /// Called when a new endpoint is created.
        /// <br/>created(msls.application.Endpoint entity)
        /// </field>
        created: [lightSwitchApplication.Endpoint]
    });

    msls._addEntryPoints(lightSwitchApplication.Ace, {
        /// <field>
        /// Called when a new ace is created.
        /// <br/>created(msls.application.Ace entity)
        /// </field>
        created: [lightSwitchApplication.Ace]
    });

    msls._addEntryPoints(lightSwitchApplication.Acl, {
        /// <field>
        /// Called when a new acl is created.
        /// <br/>created(msls.application.Acl entity)
        /// </field>
        created: [lightSwitchApplication.Acl]
    });

    msls._addEntryPoints(lightSwitchApplication.ActiveDirectoryUser, {
        /// <field>
        /// Called when a new activeDirectoryUser is created.
        /// <br/>created(msls.application.ActiveDirectoryUser entity)
        /// </field>
        created: [lightSwitchApplication.ActiveDirectoryUser]
    });

    msls._addEntryPoints(lightSwitchApplication.Approval, {
        /// <field>
        /// Called when a new approval is created.
        /// <br/>created(msls.application.Approval entity)
        /// </field>
        created: [lightSwitchApplication.Approval]
    });

    msls._addEntryPoints(lightSwitchApplication.CartItem, {
        /// <field>
        /// Called when a new cartItem is created.
        /// <br/>created(msls.application.CartItem entity)
        /// </field>
        created: [lightSwitchApplication.CartItem]
    });

    msls._addEntryPoints(lightSwitchApplication.Cart, {
        /// <field>
        /// Called when a new cart is created.
        /// <br/>created(msls.application.Cart entity)
        /// </field>
        created: [lightSwitchApplication.Cart]
    });

    msls._addEntryPoints(lightSwitchApplication.CatalogueItem1, {
        /// <field>
        /// Called when a new catalogueItem1 is created.
        /// <br/>created(msls.application.CatalogueItem1 entity)
        /// </field>
        created: [lightSwitchApplication.CatalogueItem1]
    });

    msls._addEntryPoints(lightSwitchApplication.Catalogue, {
        /// <field>
        /// Called when a new catalogue is created.
        /// <br/>created(msls.application.Catalogue entity)
        /// </field>
        created: [lightSwitchApplication.Catalogue]
    });

    msls._addEntryPoints(lightSwitchApplication.EntityType, {
        /// <field>
        /// Called when a new entityType is created.
        /// <br/>created(msls.application.EntityType entity)
        /// </field>
        created: [lightSwitchApplication.EntityType]
    });

    msls._addEntryPoints(lightSwitchApplication.Gate, {
        /// <field>
        /// Called when a new gate is created.
        /// <br/>created(msls.application.Gate entity)
        /// </field>
        created: [lightSwitchApplication.Gate]
    });

    msls._addEntryPoints(lightSwitchApplication.Job, {
        /// <field>
        /// Called when a new job is created.
        /// <br/>created(msls.application.Job entity)
        /// </field>
        created: [lightSwitchApplication.Job]
    });

    msls._addEntryPoints(lightSwitchApplication.KeyNameValue, {
        /// <field>
        /// Called when a new keyNameValue is created.
        /// <br/>created(msls.application.KeyNameValue entity)
        /// </field>
        created: [lightSwitchApplication.KeyNameValue]
    });

    msls._addEntryPoints(lightSwitchApplication.Link, {
        /// <field>
        /// Called when a new link is created.
        /// <br/>created(msls.application.Link entity)
        /// </field>
        created: [lightSwitchApplication.Link]
    });

    msls._addEntryPoints(lightSwitchApplication.ManagementCredential, {
        /// <field>
        /// Called when a new managementCredential is created.
        /// <br/>created(msls.application.ManagementCredential entity)
        /// </field>
        created: [lightSwitchApplication.ManagementCredential]
    });

    msls._addEntryPoints(lightSwitchApplication.ManagementUri, {
        /// <field>
        /// Called when a new managementUri is created.
        /// <br/>created(msls.application.ManagementUri entity)
        /// </field>
        created: [lightSwitchApplication.ManagementUri]
    });

    msls._addEntryPoints(lightSwitchApplication.Node, {
        /// <field>
        /// Called when a new node is created.
        /// <br/>created(msls.application.Node entity)
        /// </field>
        created: [lightSwitchApplication.Node]
    });

    msls._addEntryPoints(lightSwitchApplication.OrderItem, {
        /// <field>
        /// Called when a new orderItem is created.
        /// <br/>created(msls.application.OrderItem entity)
        /// </field>
        created: [lightSwitchApplication.OrderItem]
    });

    msls._addEntryPoints(lightSwitchApplication.Order, {
        /// <field>
        /// Called when a new order is created.
        /// <br/>created(msls.application.Order entity)
        /// </field>
        created: [lightSwitchApplication.Order]
    });

}(msls.application));
