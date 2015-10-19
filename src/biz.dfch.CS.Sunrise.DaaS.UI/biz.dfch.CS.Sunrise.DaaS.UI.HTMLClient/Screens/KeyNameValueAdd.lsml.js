myapp.KeyNameValueAdd.beforeApplyChanges = function (screen) {
    if (null == screen.KeyNameValue.Tid) {
        screen.KeyNameValue.Tid = "00000000-0000-0000-0000-000000000000";
    }
};
myapp.KeyNameValueAdd.created = function (screen) {
    if (null == screen.KeyNameValue.Id) {
        screen.KeyNameValue.Id = 0;
    }
    if (null == screen.KeyNameValue.Tid) {
        screen.KeyNameValue.Tid = "00000000-0000-0000-0000-000000000000";
    }
    if (null == screen.KeyNameValue.Created) {
        screen.KeyNameValue.Created = new Date(2015, 01, 01);
    }
    if (null == screen.KeyNameValue.CreatedBy) {
        screen.KeyNameValue.CreatedBy = "USER";
    }
    if (null == screen.KeyNameValue.Modified) {
        screen.KeyNameValue.Modified = new Date(2015, 01, 01);
    }
    if (null == screen.KeyNameValue.ModifiedBy) {
        screen.KeyNameValue.ModifiedBy = "USER";
    }
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