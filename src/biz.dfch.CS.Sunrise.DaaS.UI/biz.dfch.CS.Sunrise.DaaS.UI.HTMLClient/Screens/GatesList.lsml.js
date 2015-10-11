/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.GatesList.Name_postRender = function (element, contentItem) {
    // Write code here.
    $element = $(element);
    $element.prop('title', "my title '" + contentItem.stringValue + "'");
};

myapp.GatesList.rows_postRender = function (element, contentItem) {
    // Write code here.
    $element = $(element);
};