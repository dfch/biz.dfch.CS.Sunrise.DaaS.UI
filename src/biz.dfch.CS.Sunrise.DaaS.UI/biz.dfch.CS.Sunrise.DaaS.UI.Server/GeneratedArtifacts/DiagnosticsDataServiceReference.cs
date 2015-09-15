﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34209
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Original file name:
// Generation date: 9/15/2015 11:22:43 AM
namespace DiagnosticsData.DiagnosticsDataService
{
    
    /// <summary>
    /// There are no comments for Diagnostics in the schema.
    /// </summary>
    public partial class Diagnostics : global::System.Data.Services.Client.DataServiceContext
    {
        /// <summary>
        /// Initialize a new Diagnostics object.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public Diagnostics(global::System.Uri serviceRoot) : 
                base(serviceRoot, global::System.Data.Services.Common.DataServiceProtocolVersion.V3)
        {
            this.ResolveName = new global::System.Func<global::System.Type, string>(this.ResolveNameFromType);
            this.ResolveType = new global::System.Func<string, global::System.Type>(this.ResolveTypeFromName);
            this.OnContextCreated();
            this.Format.LoadServiceModel = GeneratedEdmModel.GetInstance;
        }
        partial void OnContextCreated();
        /// <summary>
        /// Since the namespace configured for this service reference
        /// in Visual Studio is different from the one indicated in the
        /// server schema, use type-mappers to map between the two.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        protected global::System.Type ResolveTypeFromName(string typeName)
        {
            global::System.Type resolvedType = this.DefaultResolveType(typeName, "biz.dfch.CS.Sunrise.DaaS.Endpoints.OdataServices.Diagnostics", "DiagnosticsData.DiagnosticsDataService");
            if ((resolvedType != null))
            {
                return resolvedType;
            }
            return null;
        }
        /// <summary>
        /// Since the namespace configured for this service reference
        /// in Visual Studio is different from the one indicated in the
        /// server schema, use type-mappers to map between the two.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        protected string ResolveNameFromType(global::System.Type clientType)
        {
            if (clientType.Namespace.Equals("DiagnosticsData.DiagnosticsDataService", global::System.StringComparison.Ordinal))
            {
                return string.Concat("biz.dfch.CS.Sunrise.DaaS.Endpoints.OdataServices.Diagnostics.", clientType.Name);
            }
            return null;
        }
        /// <summary>
        /// There are no comments for Endpoints in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Data.Services.Client.DataServiceQuery<Endpoint> Endpoints
        {
            get
            {
                if ((this._Endpoints == null))
                {
                    this._Endpoints = base.CreateQuery<Endpoint>("Endpoints");
                }
                return this._Endpoints;
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Data.Services.Client.DataServiceQuery<Endpoint> _Endpoints;
        /// <summary>
        /// There are no comments for Endpoints in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public void AddToEndpoints(Endpoint endpoint)
        {
            base.AddObject("Endpoints", endpoint);
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private abstract class GeneratedEdmModel
        {
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
            private static global::Microsoft.Data.Edm.IEdmModel ParsedModel = LoadModelFromString();
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
            private const string ModelPart0 = @"<edmx:Edmx Version=""1.0"" xmlns:edmx=""http://schemas.microsoft.com/ado/2007/06/edmx""><edmx:DataServices m:DataServiceVersion=""3.0"" m:MaxDataServiceVersion=""3.0"" xmlns:m=""http://schemas.microsoft.com/ado/2007/08/dataservices/metadata""><Schema Namespace=""biz.dfch.CS.Sunrise.DaaS.Endpoints.OdataServices.Diagnostics"" xmlns=""http://schemas.microsoft.com/ado/2009/11/edm""><EntityType Name=""Endpoint""><Key><PropertyRef Name=""Id"" /></Key><Property Name=""Id"" Type=""Edm.Int32"" Nullable=""false"" /><Property Name=""Tid"" Type=""Edm.String"" /><Property Name=""Name"" Type=""Edm.String"" Nullable=""false"" /><Property Name=""Version"" Type=""Edm.String"" Nullable=""false"" /><Property Name=""RouteTemplate"" Type=""Edm.String"" Nullable=""false"" /><Property Name=""RoutePrefix"" Type=""Edm.String"" Nullable=""false"" /><Property Name=""ServerRole"" Type=""Edm.String"" Nullable=""false"" /><Property Name=""Priority"" Type=""Edm.Int32"" Nullable=""false"" /><Property Name=""Created"" Type=""Edm.DateTimeOffset"" /><Property Name=""CreatedBy"" Type=""Edm.String"" /><Property Name=""Modified"" Type=""Edm.DateTimeOffset"" /><Property Name=""ModifiedBy"" Type=""Edm.String"" /></EntityType></Schema><Schema Namespace=""Default"" xmlns=""http://schemas.microsoft.com/ado/2009/11/edm""><EntityContainer Name=""Diagnostics"" m:IsDefaultEntityContainer=""true""><EntitySet Name=""Endpoints"" EntityType=""biz.dfch.CS.Sunrise.DaaS.Endpoints.OdataServices.Diagnostics.Endpoint"" /></EntityContainer></Schema></edmx:DataServices></edmx:Edmx>";
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
            private static string GetConcatenatedEdmxString()
            {
                return string.Concat(ModelPart0);
            }
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
            public static global::Microsoft.Data.Edm.IEdmModel GetInstance()
            {
                return ParsedModel;
            }
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
            private static global::Microsoft.Data.Edm.IEdmModel LoadModelFromString()
            {
                string edmxToParse = GetConcatenatedEdmxString();
                global::System.Xml.XmlReader reader = CreateXmlReader(edmxToParse);
                try
                {
                    return global::Microsoft.Data.Edm.Csdl.EdmxReader.Parse(reader);
                }
                finally
                {
                    ((global::System.IDisposable)(reader)).Dispose();
                }
            }
            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
            private static global::System.Xml.XmlReader CreateXmlReader(string edmxToParse)
            {
                return global::System.Xml.XmlReader.Create(new global::System.IO.StringReader(edmxToParse));
            }
        }
    }
    /// <summary>
    /// There are no comments for biz.dfch.CS.Sunrise.DaaS.Endpoints.OdataServices.Diagnostics.Endpoint in the schema.
    /// </summary>
    /// <KeyProperties>
    /// Id
    /// </KeyProperties>
    [global::System.Data.Services.Common.DataServiceKeyAttribute("Id")]
    public partial class Endpoint
    {
        /// <summary>
        /// Create a new Endpoint object.
        /// </summary>
        /// <param name="ID">Initial value of Id.</param>
        /// <param name="name">Initial value of Name.</param>
        /// <param name="version">Initial value of Version.</param>
        /// <param name="routeTemplate">Initial value of RouteTemplate.</param>
        /// <param name="routePrefix">Initial value of RoutePrefix.</param>
        /// <param name="serverRole">Initial value of ServerRole.</param>
        /// <param name="priority">Initial value of Priority.</param>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public static Endpoint CreateEndpoint(int ID, string name, string version, string routeTemplate, string routePrefix, string serverRole, int priority)
        {
            Endpoint endpoint = new Endpoint();
            endpoint.Id = ID;
            endpoint.Name = name;
            endpoint.Version = version;
            endpoint.RouteTemplate = routeTemplate;
            endpoint.RoutePrefix = routePrefix;
            endpoint.ServerRole = serverRole;
            endpoint.Priority = priority;
            return endpoint;
        }
        /// <summary>
        /// There are no comments for Property Id in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public int Id
        {
            get
            {
                return this._Id;
            }
            set
            {
                this.OnIdChanging(value);
                this._Id = value;
                this.OnIdChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private int _Id;
        partial void OnIdChanging(int value);
        partial void OnIdChanged();
        /// <summary>
        /// There are no comments for Property Tid in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Tid
        {
            get
            {
                return this._Tid;
            }
            set
            {
                this.OnTidChanging(value);
                this._Tid = value;
                this.OnTidChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Tid;
        partial void OnTidChanging(string value);
        partial void OnTidChanged();
        /// <summary>
        /// There are no comments for Property Name in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Name
        {
            get
            {
                return this._Name;
            }
            set
            {
                this.OnNameChanging(value);
                this._Name = value;
                this.OnNameChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Name;
        partial void OnNameChanging(string value);
        partial void OnNameChanged();
        /// <summary>
        /// There are no comments for Property Version in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string Version
        {
            get
            {
                return this._Version;
            }
            set
            {
                this.OnVersionChanging(value);
                this._Version = value;
                this.OnVersionChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _Version;
        partial void OnVersionChanging(string value);
        partial void OnVersionChanged();
        /// <summary>
        /// There are no comments for Property RouteTemplate in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string RouteTemplate
        {
            get
            {
                return this._RouteTemplate;
            }
            set
            {
                this.OnRouteTemplateChanging(value);
                this._RouteTemplate = value;
                this.OnRouteTemplateChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _RouteTemplate;
        partial void OnRouteTemplateChanging(string value);
        partial void OnRouteTemplateChanged();
        /// <summary>
        /// There are no comments for Property RoutePrefix in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string RoutePrefix
        {
            get
            {
                return this._RoutePrefix;
            }
            set
            {
                this.OnRoutePrefixChanging(value);
                this._RoutePrefix = value;
                this.OnRoutePrefixChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _RoutePrefix;
        partial void OnRoutePrefixChanging(string value);
        partial void OnRoutePrefixChanged();
        /// <summary>
        /// There are no comments for Property ServerRole in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string ServerRole
        {
            get
            {
                return this._ServerRole;
            }
            set
            {
                this.OnServerRoleChanging(value);
                this._ServerRole = value;
                this.OnServerRoleChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _ServerRole;
        partial void OnServerRoleChanging(string value);
        partial void OnServerRoleChanged();
        /// <summary>
        /// There are no comments for Property Priority in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public int Priority
        {
            get
            {
                return this._Priority;
            }
            set
            {
                this.OnPriorityChanging(value);
                this._Priority = value;
                this.OnPriorityChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private int _Priority;
        partial void OnPriorityChanging(int value);
        partial void OnPriorityChanged();
        /// <summary>
        /// There are no comments for Property Created in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<global::System.DateTimeOffset> Created
        {
            get
            {
                return this._Created;
            }
            set
            {
                this.OnCreatedChanging(value);
                this._Created = value;
                this.OnCreatedChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<global::System.DateTimeOffset> _Created;
        partial void OnCreatedChanging(global::System.Nullable<global::System.DateTimeOffset> value);
        partial void OnCreatedChanged();
        /// <summary>
        /// There are no comments for Property CreatedBy in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string CreatedBy
        {
            get
            {
                return this._CreatedBy;
            }
            set
            {
                this.OnCreatedByChanging(value);
                this._CreatedBy = value;
                this.OnCreatedByChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _CreatedBy;
        partial void OnCreatedByChanging(string value);
        partial void OnCreatedByChanged();
        /// <summary>
        /// There are no comments for Property Modified in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public global::System.Nullable<global::System.DateTimeOffset> Modified
        {
            get
            {
                return this._Modified;
            }
            set
            {
                this.OnModifiedChanging(value);
                this._Modified = value;
                this.OnModifiedChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private global::System.Nullable<global::System.DateTimeOffset> _Modified;
        partial void OnModifiedChanging(global::System.Nullable<global::System.DateTimeOffset> value);
        partial void OnModifiedChanged();
        /// <summary>
        /// There are no comments for Property ModifiedBy in the schema.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        public string ModifiedBy
        {
            get
            {
                return this._ModifiedBy;
            }
            set
            {
                this.OnModifiedByChanging(value);
                this._ModifiedBy = value;
                this.OnModifiedByChanged();
            }
        }
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Data.Services.Design", "1.0.0")]
        private string _ModifiedBy;
        partial void OnModifiedByChanging(string value);
        partial void OnModifiedByChanged();
    }
}
