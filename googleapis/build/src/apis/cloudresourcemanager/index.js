"use strict";
// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPlus = exports.cloudresourcemanager_v3 = exports.cloudresourcemanager_v2beta1 = exports.cloudresourcemanager_v2 = exports.cloudresourcemanager_v1beta1 = exports.cloudresourcemanager_v1 = exports.auth = exports.cloudresourcemanager = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1_1 = require("./v1");
Object.defineProperty(exports, "cloudresourcemanager_v1", { enumerable: true, get: function () { return v1_1.cloudresourcemanager_v1; } });
const v1beta1_1 = require("./v1beta1");
Object.defineProperty(exports, "cloudresourcemanager_v1beta1", { enumerable: true, get: function () { return v1beta1_1.cloudresourcemanager_v1beta1; } });
const v2_1 = require("./v2");
Object.defineProperty(exports, "cloudresourcemanager_v2", { enumerable: true, get: function () { return v2_1.cloudresourcemanager_v2; } });
const v2beta1_1 = require("./v2beta1");
Object.defineProperty(exports, "cloudresourcemanager_v2beta1", { enumerable: true, get: function () { return v2beta1_1.cloudresourcemanager_v2beta1; } });
const v3_1 = require("./v3");
Object.defineProperty(exports, "cloudresourcemanager_v3", { enumerable: true, get: function () { return v3_1.cloudresourcemanager_v3; } });
exports.VERSIONS = {
    v1: v1_1.cloudresourcemanager_v1.Cloudresourcemanager,
    v1beta1: v1beta1_1.cloudresourcemanager_v1beta1.Cloudresourcemanager,
    v2: v2_1.cloudresourcemanager_v2.Cloudresourcemanager,
    v2beta1: v2beta1_1.cloudresourcemanager_v2beta1.Cloudresourcemanager,
    v3: v3_1.cloudresourcemanager_v3.Cloudresourcemanager,
};
function cloudresourcemanager(versionOrOptions) {
    return (0, googleapis_common_1.getAPI)('cloudresourcemanager', versionOrOptions, exports.VERSIONS, this);
}
exports.cloudresourcemanager = cloudresourcemanager;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
var googleapis_common_2 = require("googleapis-common");
Object.defineProperty(exports, "AuthPlus", { enumerable: true, get: function () { return googleapis_common_2.AuthPlus; } });
