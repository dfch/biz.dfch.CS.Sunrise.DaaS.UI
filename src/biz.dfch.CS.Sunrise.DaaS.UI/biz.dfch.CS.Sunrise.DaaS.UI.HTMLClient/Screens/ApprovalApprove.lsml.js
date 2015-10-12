/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ApprovalApprove.created = function (screen)
{
    screen.details.properties.HelpText.value = "The request will be approved when you click the 'Save' button. You can optionally add a explanation or reason for approval.";
};

myapp.ApprovalApprove.Description_postRender = function (element, contentItem)
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

myapp.ApprovalApprove.beforeApplyChanges = function (screen)
{
    screen.Approval.Status = "Approved";
};