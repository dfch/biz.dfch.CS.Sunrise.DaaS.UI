/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Endpoint(entitySet) {
        /// <summary>
        /// Represents the Endpoint entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this endpoint.
        /// </param>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this endpoint.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this endpoint.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this endpoint.
        /// </field>
        /// <field name="Version" type="String">
        /// Gets or sets the version for this endpoint.
        /// </field>
        /// <field name="RouteTemplate" type="String">
        /// Gets or sets the routeTemplate for this endpoint.
        /// </field>
        /// <field name="RoutePrefix" type="String">
        /// Gets or sets the routePrefix for this endpoint.
        /// </field>
        /// <field name="ServerRole" type="String">
        /// Gets or sets the serverRole for this endpoint.
        /// </field>
        /// <field name="Priority" type="Number">
        /// Gets or sets the priority for this endpoint.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this endpoint.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this endpoint.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this endpoint.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this endpoint.
        /// </field>
        /// <field name="Address" type="String">
        /// Gets or sets the address for this endpoint.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this endpoint.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this endpoint.
        /// </field>
        /// <field name="details" type="msls.application.Endpoint.Details">
        /// Gets the details for this endpoint.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Ace(entitySet) {
        /// <summary>
        /// Represents the Ace entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this ace.
        /// </param>
        /// <field name="Trustee" type="String">
        /// Gets or sets the trustee for this ace.
        /// </field>
        /// <field name="Action" type="String">
        /// Gets or sets the action for this ace.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this ace.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this ace.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this ace.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this ace.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this ace.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this ace.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this ace.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this ace.
        /// </field>
        /// <field name="AclId" type="String">
        /// Gets or sets the aclId for this ace.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this ace.
        /// </field>
        /// <field name="Acl" type="msls.application.Acl">
        /// Gets or sets the acl for this ace.
        /// </field>
        /// <field name="details" type="msls.application.Ace.Details">
        /// Gets the details for this ace.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Acl(entitySet) {
        /// <summary>
        /// Represents the Acl entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this acl.
        /// </param>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this acl.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this acl.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this acl.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this acl.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this acl.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this acl.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this acl.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this acl.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this acl.
        /// </field>
        /// <field name="Aces" type="msls.EntityCollection" elementType="msls.application.Ace">
        /// Gets the aces for this acl.
        /// </field>
        /// <field name="details" type="msls.application.Acl.Details">
        /// Gets the details for this acl.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ActiveDirectoryUser(entitySet) {
        /// <summary>
        /// Represents the ActiveDirectoryUser entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this activeDirectoryUser.
        /// </param>
        /// <field name="cn" type="String">
        /// Gets or sets the cn for this activeDirectoryUser.
        /// </field>
        /// <field name="description" type="String">
        /// Gets or sets the description for this activeDirectoryUser.
        /// </field>
        /// <field name="distinguishedName" type="String">
        /// Gets or sets the distinguishedName for this activeDirectoryUser.
        /// </field>
        /// <field name="groupType" type="Number">
        /// Gets or sets the groupType for this activeDirectoryUser.
        /// </field>
        /// <field name="name" type="String">
        /// Gets or sets the name for this activeDirectoryUser.
        /// </field>
        /// <field name="sn" type="String">
        /// Gets or sets the sn for this activeDirectoryUser.
        /// </field>
        /// <field name="givenName" type="String">
        /// Gets or sets the givenName for this activeDirectoryUser.
        /// </field>
        /// <field name="department" type="String">
        /// Gets or sets the department for this activeDirectoryUser.
        /// </field>
        /// <field name="displayName" type="String">
        /// Gets or sets the displayName for this activeDirectoryUser.
        /// </field>
        /// <field name="mail" type="String">
        /// Gets or sets the mail for this activeDirectoryUser.
        /// </field>
        /// <field name="objectGUID" type="String">
        /// Gets or sets the objectGUID for this activeDirectoryUser.
        /// </field>
        /// <field name="objectSID" type="String">
        /// Gets or sets the objectSID for this activeDirectoryUser.
        /// </field>
        /// <field name="sAMAccountName" type="String">
        /// Gets or sets the sAMAccountName for this activeDirectoryUser.
        /// </field>
        /// <field name="employeeID" type="String">
        /// Gets or sets the employeeID for this activeDirectoryUser.
        /// </field>
        /// <field name="telephoneNumber" type="String">
        /// Gets or sets the telephoneNumber for this activeDirectoryUser.
        /// </field>
        /// <field name="mobile" type="String">
        /// Gets or sets the mobile for this activeDirectoryUser.
        /// </field>
        /// <field name="sAMAccountType" type="Number">
        /// Gets or sets the sAMAccountType for this activeDirectoryUser.
        /// </field>
        /// <field name="uSNChanged" type="String">
        /// Gets or sets the uSNChanged for this activeDirectoryUser.
        /// </field>
        /// <field name="uSNCreated" type="String">
        /// Gets or sets the uSNCreated for this activeDirectoryUser.
        /// </field>
        /// <field name="whenChanged" type="Date">
        /// Gets or sets the whenChanged for this activeDirectoryUser.
        /// </field>
        /// <field name="whenCreated" type="Date">
        /// Gets or sets the whenCreated for this activeDirectoryUser.
        /// </field>
        /// <field name="details" type="msls.application.ActiveDirectoryUser.Details">
        /// Gets the details for this activeDirectoryUser.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Approval(entitySet) {
        /// <summary>
        /// Represents the Approval entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this approval.
        /// </param>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this approval.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this approval.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this approval.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this approval.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this approval.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this approval.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this approval.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this approval.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this approval.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this approval.
        /// </field>
        /// <field name="details" type="msls.application.Approval.Details">
        /// Gets the details for this approval.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function CartItem(entitySet) {
        /// <summary>
        /// Represents the CartItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cartItem.
        /// </param>
        /// <field name="CartId" type="String">
        /// Gets or sets the cartId for this cartItem.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this cartItem.
        /// </field>
        /// <field name="CatalogueItemId" type="String">
        /// Gets or sets the catalogueItemId for this cartItem.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this cartItem.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this cartItem.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this cartItem.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this cartItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this cartItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this cartItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this cartItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this cartItem.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this cartItem.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this cartItem.
        /// </field>
        /// <field name="details" type="msls.application.CartItem.Details">
        /// Gets the details for this cartItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Cart(entitySet) {
        /// <summary>
        /// Represents the Cart entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cart.
        /// </param>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this cart.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this cart.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this cart.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this cart.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this cart.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this cart.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this cart.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this cart.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this cart.
        /// </field>
        /// <field name="CartItems" type="msls.EntityCollection" elementType="msls.application.CartItem">
        /// Gets the cartItems for this cart.
        /// </field>
        /// <field name="details" type="msls.application.Cart.Details">
        /// Gets the details for this cart.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function CatalogueItem1(entitySet) {
        /// <summary>
        /// Represents the CatalogueItem1 entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this catalogueItem1.
        /// </param>
        /// <field name="Collection" type="String">
        /// Gets or sets the collection for this catalogueItem1.
        /// </field>
        /// <field name="Version" type="String">
        /// Gets or sets the version for this catalogueItem1.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this catalogueItem1.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this catalogueItem1.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this catalogueItem1.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this catalogueItem1.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this catalogueItem1.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this catalogueItem1.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this catalogueItem1.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this catalogueItem1.
        /// </field>
        /// <field name="CatalogueId" type="String">
        /// Gets or sets the catalogueId for this catalogueItem1.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this catalogueItem1.
        /// </field>
        /// <field name="ValidFrom" type="Date">
        /// Gets or sets the validFrom for this catalogueItem1.
        /// </field>
        /// <field name="ValidUntil" type="Date">
        /// Gets or sets the validUntil for this catalogueItem1.
        /// </field>
        /// <field name="EndOfSale" type="Date">
        /// Gets or sets the endOfSale for this catalogueItem1.
        /// </field>
        /// <field name="EndOfLife" type="Date">
        /// Gets or sets the endOfLife for this catalogueItem1.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this catalogueItem1.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this catalogueItem1.
        /// </field>
        /// <field name="Catalogue" type="msls.application.Catalogue">
        /// Gets or sets the catalogue for this catalogueItem1.
        /// </field>
        /// <field name="details" type="msls.application.CatalogueItem1.Details">
        /// Gets the details for this catalogueItem1.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Catalogue(entitySet) {
        /// <summary>
        /// Represents the Catalogue entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this catalogue.
        /// </param>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this catalogue.
        /// </field>
        /// <field name="Version" type="String">
        /// Gets or sets the version for this catalogue.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this catalogue.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this catalogue.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this catalogue.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this catalogue.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this catalogue.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this catalogue.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this catalogue.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this catalogue.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this catalogue.
        /// </field>
        /// <field name="CatalogueItems" type="msls.EntityCollection" elementType="msls.application.CatalogueItem1">
        /// Gets the catalogueItems for this catalogue.
        /// </field>
        /// <field name="details" type="msls.application.Catalogue.Details">
        /// Gets the details for this catalogue.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EntityType(entitySet) {
        /// <summary>
        /// Represents the EntityType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this entityType.
        /// </param>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this entityType.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this entityType.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this entityType.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this entityType.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this entityType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this entityType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this entityType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this entityType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this entityType.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this entityType.
        /// </field>
        /// <field name="details" type="msls.application.EntityType.Details">
        /// Gets the details for this entityType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Gate(entitySet) {
        /// <summary>
        /// Represents the Gate entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this gate.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this gate.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this gate.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this gate.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this gate.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this gate.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this gate.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this gate.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this gate.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this gate.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this gate.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this gate.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this gate.
        /// </field>
        /// <field name="details" type="msls.application.Gate.Details">
        /// Gets the details for this gate.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Job(entitySet) {
        /// <summary>
        /// Represents the Job entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this job.
        /// </param>
        /// <field name="ReferencedItemId" type="String">
        /// Gets or sets the referencedItemId for this job.
        /// </field>
        /// <field name="Token" type="String">
        /// Gets or sets the token for this job.
        /// </field>
        /// <field name="TenantId" type="String">
        /// Gets or sets the tenantId for this job.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this job.
        /// </field>
        /// <field name="c_Error" type="String">
        /// Gets or sets the c_Error for this job.
        /// </field>
        /// <field name="EndTime" type="Date">
        /// Gets or sets the endTime for this job.
        /// </field>
        /// <field name="ParentId" type="String">
        /// Gets or sets the parentId for this job.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this job.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this job.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this job.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this job.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this job.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this job.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this job.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this job.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this job.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this job.
        /// </field>
        /// <field name="details" type="msls.application.Job.Details">
        /// Gets the details for this job.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function KeyNameValue(entitySet) {
        /// <summary>
        /// Represents the KeyNameValue entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this keyNameValue.
        /// </param>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this keyNameValue.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this keyNameValue.
        /// </field>
        /// <field name="Key" type="String">
        /// Gets or sets the key for this keyNameValue.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this keyNameValue.
        /// </field>
        /// <field name="Value" type="String">
        /// Gets or sets the value for this keyNameValue.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this keyNameValue.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this keyNameValue.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this keyNameValue.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this keyNameValue.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this keyNameValue.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this keyNameValue.
        /// </field>
        /// <field name="details" type="msls.application.KeyNameValue.Details">
        /// Gets the details for this keyNameValue.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Link(entitySet) {
        /// <summary>
        /// Represents the Link entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this link.
        /// </param>
        /// <field name="Order" type="String">
        /// Gets or sets the order for this link.
        /// </field>
        /// <field name="SourceId" type="String">
        /// Gets or sets the sourceId for this link.
        /// </field>
        /// <field name="DestinationId" type="String">
        /// Gets or sets the destinationId for this link.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this link.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this link.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this link.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this link.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this link.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this link.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this link.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this link.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this link.
        /// </field>
        /// <field name="Source" type="msls.application.Node">
        /// Gets or sets the source for this link.
        /// </field>
        /// <field name="Destination" type="msls.application.Node">
        /// Gets or sets the destination for this link.
        /// </field>
        /// <field name="details" type="msls.application.Link.Details">
        /// Gets the details for this link.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ManagementCredential(entitySet) {
        /// <summary>
        /// Represents the ManagementCredential entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this managementCredential.
        /// </param>
        /// <field name="Username" type="String">
        /// Gets or sets the username for this managementCredential.
        /// </field>
        /// <field name="EncryptedPassword" type="String">
        /// Gets or sets the encryptedPassword for this managementCredential.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this managementCredential.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this managementCredential.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this managementCredential.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this managementCredential.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this managementCredential.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this managementCredential.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this managementCredential.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this managementCredential.
        /// </field>
        /// <field name="Password" type="String">
        /// Gets or sets the password for this managementCredential.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this managementCredential.
        /// </field>
        /// <field name="ManagementUris" type="msls.EntityCollection" elementType="msls.application.ManagementUri">
        /// Gets the managementUris for this managementCredential.
        /// </field>
        /// <field name="details" type="msls.application.ManagementCredential.Details">
        /// Gets the details for this managementCredential.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ManagementUri(entitySet) {
        /// <summary>
        /// Represents the ManagementUri entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this managementUri.
        /// </param>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this managementUri.
        /// </field>
        /// <field name="Value" type="String">
        /// Gets or sets the value for this managementUri.
        /// </field>
        /// <field name="ManagementCredentialId" type="String">
        /// Gets or sets the managementCredentialId for this managementUri.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this managementUri.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this managementUri.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this managementUri.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this managementUri.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this managementUri.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this managementUri.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this managementUri.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this managementUri.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this managementUri.
        /// </field>
        /// <field name="details" type="msls.application.ManagementUri.Details">
        /// Gets the details for this managementUri.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Node(entitySet) {
        /// <summary>
        /// Represents the Node entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this node.
        /// </param>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this node.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this node.
        /// </field>
        /// <field name="ParentId" type="String">
        /// Gets or sets the parentId for this node.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this node.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this node.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this node.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this node.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this node.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this node.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this node.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this node.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this node.
        /// </field>
        /// <field name="Children" type="msls.EntityCollection" elementType="msls.application.Node">
        /// Gets the children for this node.
        /// </field>
        /// <field name="IncomingLinks" type="msls.EntityCollection" elementType="msls.application.Link">
        /// Gets the incomingLinks for this node.
        /// </field>
        /// <field name="OutgoingLinks" type="msls.EntityCollection" elementType="msls.application.Link">
        /// Gets the outgoingLinks for this node.
        /// </field>
        /// <field name="details" type="msls.application.Node.Details">
        /// Gets the details for this node.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function OrderItem(entitySet) {
        /// <summary>
        /// Represents the OrderItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this orderItem.
        /// </param>
        /// <field name="OrderId" type="String">
        /// Gets or sets the orderId for this orderItem.
        /// </field>
        /// <field name="Quantity" type="Number">
        /// Gets or sets the quantity for this orderItem.
        /// </field>
        /// <field name="Version" type="String">
        /// Gets or sets the version for this orderItem.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this orderItem.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this orderItem.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this orderItem.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this orderItem.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this orderItem.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this orderItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this orderItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this orderItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this orderItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this orderItem.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this orderItem.
        /// </field>
        /// <field name="details" type="msls.application.OrderItem.Details">
        /// Gets the details for this orderItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Order(entitySet) {
        /// <summary>
        /// Represents the Order entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this order.
        /// </param>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this order.
        /// </field>
        /// <field name="Parameters" type="String">
        /// Gets or sets the parameters for this order.
        /// </field>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this order.
        /// </field>
        /// <field name="Tid" type="String">
        /// Gets or sets the tid for this order.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this order.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this order.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this order.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this order.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this order.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this order.
        /// </field>
        /// <field name="OrderItems" type="msls.EntityCollection" elementType="msls.application.OrderItem">
        /// Gets the orderItems for this order.
        /// </field>
        /// <field name="Requester" type="String">
        /// Gets or sets the requester for this order.
        /// </field>
        /// <field name="RowVersion" type="String">
        /// Gets or sets the rowVersion for this order.
        /// </field>
        /// <field name="details" type="msls.application.Order.Details">
        /// Gets the details for this order.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function DiagnosticsData(dataWorkspace) {
        /// <summary>
        /// Represents the DiagnosticsData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Endpoints" type="msls.EntitySet">
        /// Gets the Endpoints entity set.
        /// </field>
        /// <field name="details" type="msls.application.DiagnosticsData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function CoreData(dataWorkspace) {
        /// <summary>
        /// Represents the CoreData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Aces" type="msls.EntitySet">
        /// Gets the Aces entity set.
        /// </field>
        /// <field name="Acls" type="msls.EntitySet">
        /// Gets the Acls entity set.
        /// </field>
        /// <field name="ActiveDirectoryUsers" type="msls.EntitySet">
        /// Gets the ActiveDirectoryUsers entity set.
        /// </field>
        /// <field name="Approvals" type="msls.EntitySet">
        /// Gets the Approvals entity set.
        /// </field>
        /// <field name="CartItems" type="msls.EntitySet">
        /// Gets the CartItems entity set.
        /// </field>
        /// <field name="Carts" type="msls.EntitySet">
        /// Gets the Carts entity set.
        /// </field>
        /// <field name="CatalogueItems" type="msls.EntitySet">
        /// Gets the CatalogueItems entity set.
        /// </field>
        /// <field name="Catalogues" type="msls.EntitySet">
        /// Gets the Catalogues entity set.
        /// </field>
        /// <field name="EntityTypes" type="msls.EntitySet">
        /// Gets the EntityTypes entity set.
        /// </field>
        /// <field name="Gates" type="msls.EntitySet">
        /// Gets the Gates entity set.
        /// </field>
        /// <field name="Jobs" type="msls.EntitySet">
        /// Gets the Jobs entity set.
        /// </field>
        /// <field name="KeyNameValues" type="msls.EntitySet">
        /// Gets the KeyNameValues entity set.
        /// </field>
        /// <field name="Links" type="msls.EntitySet">
        /// Gets the Links entity set.
        /// </field>
        /// <field name="ManagementCredentials" type="msls.EntitySet">
        /// Gets the ManagementCredentials entity set.
        /// </field>
        /// <field name="ManagementUris" type="msls.EntitySet">
        /// Gets the ManagementUris entity set.
        /// </field>
        /// <field name="Nodes" type="msls.EntitySet">
        /// Gets the Nodes entity set.
        /// </field>
        /// <field name="OrderItems" type="msls.EntitySet">
        /// Gets the OrderItems entity set.
        /// </field>
        /// <field name="Orders" type="msls.EntitySet">
        /// Gets the Orders entity set.
        /// </field>
        /// <field name="details" type="msls.application.CoreData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="DiagnosticsData" type="msls.application.DiagnosticsData">
        /// Gets the DiagnosticsData data service.
        /// </field>
        /// <field name="CoreData" type="msls.application.CoreData">
        /// Gets the CoreData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Endpoint: $defineEntity(Endpoint, [
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Version", type: String },
            { name: "RouteTemplate", type: String },
            { name: "RoutePrefix", type: String },
            { name: "ServerRole", type: String },
            { name: "Priority", type: Number },
            { name: "Created", type: Date },
            { name: "CreatedBy", type: String },
            { name: "Modified", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "Address", type: String },
            { name: "Description", type: String },
            { name: "RowVersion", type: String }
        ]),

        Ace: $defineEntity(Ace, [
            { name: "Trustee", type: String },
            { name: "Action", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "AclId", type: String },
            { name: "RowVersion", type: String },
            { name: "Acl", kind: "reference", type: Acl }
        ]),

        Acl: $defineEntity(Acl, [
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String },
            { name: "Aces", kind: "collection", elementType: Ace }
        ]),

        ActiveDirectoryUser: $defineEntity(ActiveDirectoryUser, [
            { name: "cn", type: String },
            { name: "description", type: String },
            { name: "distinguishedName", type: String },
            { name: "groupType", type: Number },
            { name: "name", type: String },
            { name: "sn", type: String },
            { name: "givenName", type: String },
            { name: "department", type: String },
            { name: "displayName", type: String },
            { name: "mail", type: String },
            { name: "objectGUID", type: String },
            { name: "objectSID", type: String },
            { name: "sAMAccountName", type: String },
            { name: "employeeID", type: String },
            { name: "telephoneNumber", type: String },
            { name: "mobile", type: String },
            { name: "sAMAccountType", type: Number },
            { name: "uSNChanged", type: String },
            { name: "uSNCreated", type: String },
            { name: "whenChanged", type: Date },
            { name: "whenCreated", type: Date }
        ]),

        Approval: $defineEntity(Approval, [
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "Status", type: String },
            { name: "RowVersion", type: String }
        ]),

        CartItem: $defineEntity(CartItem, [
            { name: "CartId", type: String },
            { name: "Quantity", type: Number },
            { name: "CatalogueItemId", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String },
            { name: "Parameters", type: String }
        ]),

        Cart: $defineEntity(Cart, [
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String },
            { name: "CartItems", kind: "collection", elementType: CartItem }
        ]),

        CatalogueItem1: $defineEntity(CatalogueItem1, [
            { name: "Collection", type: String },
            { name: "Version", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "CatalogueId", type: String },
            { name: "Type", type: String },
            { name: "ValidFrom", type: Date },
            { name: "ValidUntil", type: Date },
            { name: "EndOfSale", type: Date },
            { name: "EndOfLife", type: Date },
            { name: "Parameters", type: String },
            { name: "RowVersion", type: String },
            { name: "Catalogue", kind: "reference", type: Catalogue }
        ]),

        Catalogue: $defineEntity(Catalogue, [
            { name: "Status", type: String },
            { name: "Version", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String },
            { name: "CatalogueItems", kind: "collection", elementType: CatalogueItem1 }
        ]),

        EntityType: $defineEntity(EntityType, [
            { name: "Parameters", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String }
        ]),

        Gate: $defineEntity(Gate, [
            { name: "Name", type: String },
            { name: "Parameters", type: String },
            { name: "Type", type: String },
            { name: "Status", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String }
        ]),

        Job: $defineEntity(Job, [
            { name: "ReferencedItemId", type: String },
            { name: "Token", type: String },
            { name: "TenantId", type: String },
            { name: "Parameters", type: String },
            { name: "c_Error", type: String },
            { name: "EndTime", type: Date },
            { name: "ParentId", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "Status", type: String },
            { name: "RowVersion", type: String }
        ]),

        KeyNameValue: $defineEntity(KeyNameValue, [
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Key", type: String },
            { name: "Name", type: String },
            { name: "Value", type: String },
            { name: "Description", type: String },
            { name: "Created", type: Date },
            { name: "CreatedBy", type: String },
            { name: "Modified", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "RowVersion", type: String }
        ]),

        Link: $defineEntity(Link, [
            { name: "Order", type: String },
            { name: "SourceId", type: String },
            { name: "DestinationId", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String },
            { name: "Source", kind: "reference", type: Node },
            { name: "Destination", kind: "reference", type: Node }
        ]),

        ManagementCredential: $defineEntity(ManagementCredential, [
            { name: "Username", type: String },
            { name: "EncryptedPassword", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "Password", type: String },
            { name: "RowVersion", type: String },
            { name: "ManagementUris", kind: "collection", elementType: ManagementUri }
        ]),

        ManagementUri: $defineEntity(ManagementUri, [
            { name: "Type", type: String },
            { name: "Value", type: String },
            { name: "ManagementCredentialId", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String }
        ]),

        Node: $defineEntity(Node, [
            { name: "Type", type: String },
            { name: "Parameters", type: String },
            { name: "ParentId", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String },
            { name: "Children", kind: "collection", elementType: Node },
            { name: "IncomingLinks", kind: "collection", elementType: Link },
            { name: "OutgoingLinks", kind: "collection", elementType: Link }
        ]),

        OrderItem: $defineEntity(OrderItem, [
            { name: "OrderId", type: String },
            { name: "Quantity", type: Number },
            { name: "Version", type: String },
            { name: "Type", type: String },
            { name: "Parameters", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "RowVersion", type: String }
        ]),

        Order: $defineEntity(Order, [
            { name: "Status", type: String },
            { name: "Parameters", type: String },
            { name: "Id", type: String },
            { name: "Tid", type: String },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "Created", type: Date },
            { name: "Modified", type: Date },
            { name: "OrderItems", kind: "collection", elementType: OrderItem },
            { name: "Requester", type: String },
            { name: "RowVersion", type: String }
        ]),

        DiagnosticsData: $defineDataService(DiagnosticsData, lightSwitchApplication.rootUri + "/DiagnosticsData.svc", [
            { name: "Endpoints", elementType: Endpoint }
        ], [
            {
                name: "Endpoints_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Endpoints },
                        lightSwitchApplication.rootUri + "/DiagnosticsData.svc" + "/Endpoints(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            }
        ]),

        CoreData: $defineDataService(CoreData, lightSwitchApplication.rootUri + "/CoreData.svc", [
            { name: "Aces", elementType: Ace },
            { name: "Acls", elementType: Acl },
            { name: "ActiveDirectoryUsers", elementType: ActiveDirectoryUser },
            { name: "Approvals", elementType: Approval },
            { name: "CartItems", elementType: CartItem },
            { name: "Carts", elementType: Cart },
            { name: "CatalogueItems", elementType: CatalogueItem1 },
            { name: "Catalogues", elementType: Catalogue },
            { name: "EntityTypes", elementType: EntityType },
            { name: "Gates", elementType: Gate },
            { name: "Jobs", elementType: Job },
            { name: "KeyNameValues", elementType: KeyNameValue },
            { name: "Links", elementType: Link },
            { name: "ManagementCredentials", elementType: ManagementCredential },
            { name: "ManagementUris", elementType: ManagementUri },
            { name: "Nodes", elementType: Node },
            { name: "OrderItems", elementType: OrderItem },
            { name: "Orders", elementType: Order }
        ], [
            {
                name: "Aces_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Aces },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Aces(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "Acls_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Acls },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Acls(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "ActiveDirectoryUsers_SingleOrDefault", value: function (cn) {
                    return new $DataServiceQuery({ _entitySet: this.ActiveDirectoryUsers },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/ActiveDirectoryUsers(" + "cn=" + $toODataString(cn, "String?") + ")"
                    );
                }
            },
            {
                name: "Approvals_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Approvals },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Approvals(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "CartItems_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.CartItems },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/CartItems(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "Carts_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Carts },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Carts(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "CatalogueItems_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.CatalogueItems },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/CatalogueItems(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "Catalogues_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Catalogues },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Catalogues(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "EntityTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.EntityTypes },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/EntityTypes(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "Gates_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Gates },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Gates(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "Jobs_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Jobs },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Jobs(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "KeyNameValues_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.KeyNameValues },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/KeyNameValues(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "Links_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Links },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Links(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "ManagementCredentials_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ManagementCredentials },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/ManagementCredentials(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "ManagementUris_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.ManagementUris },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/ManagementUris(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "Nodes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Nodes },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Nodes(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "OrderItems_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.OrderItems },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/OrderItems(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "Orders_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Orders },
                        lightSwitchApplication.rootUri + "/CoreData.svc" + "/Orders(" + "Id=" + $toODataString(Id, "Int64?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "DiagnosticsData", type: DiagnosticsData },
            { name: "CoreData", type: CoreData }
        ])

    });

}(msls.application));
