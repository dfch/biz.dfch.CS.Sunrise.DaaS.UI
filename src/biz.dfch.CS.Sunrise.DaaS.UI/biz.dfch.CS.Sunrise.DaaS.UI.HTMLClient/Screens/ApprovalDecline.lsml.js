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
    screen.Approval.Status = "Cancel";
};

/**
 * Copyright 2015 d-fens GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */