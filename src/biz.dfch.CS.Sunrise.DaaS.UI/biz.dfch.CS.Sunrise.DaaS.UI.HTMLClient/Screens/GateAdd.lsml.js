/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.GateAdd.beforeApplyChanges = function (screen) {
    // Write code here.
    var x = 1;
};

myapp.GateAdd.created = function (screen) {
    screen.Gate.Tid = "00000000-0000-0000-0000-000000000000";
    screen.Gate.Id = 0;
    screen.Gate.Status = "Free";
    screen.Gate.CreatedBy = "USER";
    screen.Gate.ModifiedBy = "USER";
    screen.Gate.Parameters = '{}';
    screen.Gate.Created = new Date();
    screen.Gate.Modified = new Date();
};