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