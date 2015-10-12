/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ApprovalDecline.created = function (screen)
{
    screen.details.properties.HelpText.value = "The request will be declined when you click the 'Save' button. You can optionally add a explanation or reason for approval.";
};

myapp.ApprovalDecline.Description_postRender = function (element, contentItem)
{
    if (contentItem.screen.Approval.Status != "Created")
    {
        //$("[data-ls-tap='tap:{data.shell.discardCommand.command}']").hide();
        $("[data-ls-tap='tap:{data.shell.saveCommand.command}']").hide();
        $("[data-ls-tap='tap:{data.shell.okCommand.command}']").hide();
        //$("[data-ls-tap='tap:{data.shell.cancelCommand.command}']").hide();

        contentItem.screen.details.properties.HelpText.value = "Request has already been processed. Cannot proceed.";
    }
};

myapp.ApprovalDecline.beforeApplyChanges = function (screen)
{
    screen.Approval.Status = "Declined";
};