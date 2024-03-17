/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace licensing_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Enterprise License Manager API
     *
     * The Google Enterprise License Manager API lets you manage Google Workspace and related licenses for all users of a customer that you manage.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const licensing = google.licensing('v1');
     * ```
     */
    export class Licensing {
        context: APIRequestContext;
        licenseAssignments: Resource$Licenseassignments;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * Representation of a license assignment.
     */
    export interface Schema$LicenseAssignment {
        /**
         * ETag of the resource.
         */
        etags?: string | null;
        /**
         * Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`.
         */
        kind?: string | null;
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs.
         */
        productId?: string | null;
        /**
         * Display Name of the product.
         */
        productName?: string | null;
        /**
         * Link to this page.
         */
        selfLink?: string | null;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string | null;
        /**
         * Display Name of the sku of the product.
         */
        skuName?: string | null;
        /**
         * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
         */
        userId?: string | null;
    }
    /**
     * Representation of a license assignment.
     */
    export interface Schema$LicenseAssignmentInsert {
        /**
         * Email id of the user
         */
        userId?: string | null;
    }
    export interface Schema$LicenseAssignmentList {
        /**
         * ETag of the resource.
         */
        etag?: string | null;
        /**
         * The LicenseAssignments in this page of results.
         */
        items?: Schema$LicenseAssignment[];
        /**
         * Identifies the resource as a collection of LicenseAssignments.
         */
        kind?: string | null;
        /**
         * The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The `maxResults` query string is related to the `nextPageToken` since `maxResults` determines how many entries are returned on each next page.
         */
        nextPageToken?: string | null;
    }
    export class Resource$Licenseassignments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Revoke a license.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.delete({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *     // The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
         *     userId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Licenseassignments$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Licenseassignments$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Licenseassignments$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Licenseassignments$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Licenseassignments$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Get a specific user's license by product SKU.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.get({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *     // The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
         *     userId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etags": "my_etags",
         *   //   "kind": "my_kind",
         *   //   "productId": "my_productId",
         *   //   "productName": "my_productName",
         *   //   "selfLink": "my_selfLink",
         *   //   "skuId": "my_skuId",
         *   //   "skuName": "my_skuName",
         *   //   "userId": "my_userId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Licenseassignments$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Licenseassignments$Get, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignment>;
        get(params: Params$Resource$Licenseassignments$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Licenseassignments$Get, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        get(params: Params$Resource$Licenseassignments$Get, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        get(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        /**
         * Assign a license.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.insert({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "userId": "my_userId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etags": "my_etags",
         *   //   "kind": "my_kind",
         *   //   "productId": "my_productId",
         *   //   "productName": "my_productName",
         *   //   "selfLink": "my_selfLink",
         *   //   "skuId": "my_skuId",
         *   //   "skuName": "my_skuName",
         *   //   "userId": "my_userId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Licenseassignments$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Licenseassignments$Insert, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignment>;
        insert(params: Params$Resource$Licenseassignments$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Licenseassignments$Insert, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        insert(params: Params$Resource$Licenseassignments$Insert, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        insert(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        /**
         * List all users assigned licenses for a specific product SKU.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.listForProduct({
         *     // The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
         *     customerId: 'placeholder-value',
         *     // The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         *     maxResults: 'placeholder-value',
         *     // Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         *     pageToken: 'placeholder-value',
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etag": "my_etag",
         *   //   "items": [],
         *   //   "kind": "my_kind",
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        listForProduct(params: Params$Resource$Licenseassignments$Listforproduct, options: StreamMethodOptions): GaxiosPromise<Readable>;
        listForProduct(params?: Params$Resource$Licenseassignments$Listforproduct, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignmentList>;
        listForProduct(params: Params$Resource$Licenseassignments$Listforproduct, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        listForProduct(params: Params$Resource$Licenseassignments$Listforproduct, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignmentList>, callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        listForProduct(params: Params$Resource$Licenseassignments$Listforproduct, callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        listForProduct(callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        /**
         * List all users assigned licenses for a specific product SKU.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.listForProductAndSku({
         *     // The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
         *     customerId: 'placeholder-value',
         *     // The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         *     maxResults: 'placeholder-value',
         *     // Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         *     pageToken: 'placeholder-value',
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etag": "my_etag",
         *   //   "items": [],
         *   //   "kind": "my_kind",
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        listForProductAndSku(params: Params$Resource$Licenseassignments$Listforproductandsku, options: StreamMethodOptions): GaxiosPromise<Readable>;
        listForProductAndSku(params?: Params$Resource$Licenseassignments$Listforproductandsku, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignmentList>;
        listForProductAndSku(params: Params$Resource$Licenseassignments$Listforproductandsku, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        listForProductAndSku(params: Params$Resource$Licenseassignments$Listforproductandsku, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignmentList>, callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        listForProductAndSku(params: Params$Resource$Licenseassignments$Listforproductandsku, callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        listForProductAndSku(callback: BodyResponseCallback<Schema$LicenseAssignmentList>): void;
        /**
         * Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.patch({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *     // The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
         *     userId: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "etags": "my_etags",
         *       //   "kind": "my_kind",
         *       //   "productId": "my_productId",
         *       //   "productName": "my_productName",
         *       //   "selfLink": "my_selfLink",
         *       //   "skuId": "my_skuId",
         *       //   "skuName": "my_skuName",
         *       //   "userId": "my_userId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etags": "my_etags",
         *   //   "kind": "my_kind",
         *   //   "productId": "my_productId",
         *   //   "productName": "my_productName",
         *   //   "selfLink": "my_selfLink",
         *   //   "skuId": "my_skuId",
         *   //   "skuName": "my_skuName",
         *   //   "userId": "my_userId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Licenseassignments$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Licenseassignments$Patch, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignment>;
        patch(params: Params$Resource$Licenseassignments$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Licenseassignments$Patch, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        patch(params: Params$Resource$Licenseassignments$Patch, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        patch(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        /**
         * Reassign a user's product SKU with a different SKU in the same product.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/licensing.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const licensing = google.licensing('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.licensing'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await licensing.licenseAssignments.update({
         *     // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         *     productId: 'placeholder-value',
         *     // A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         *     skuId: 'placeholder-value',
         *     // The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
         *     userId: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "etags": "my_etags",
         *       //   "kind": "my_kind",
         *       //   "productId": "my_productId",
         *       //   "productName": "my_productName",
         *       //   "selfLink": "my_selfLink",
         *       //   "skuId": "my_skuId",
         *       //   "skuName": "my_skuName",
         *       //   "userId": "my_userId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "etags": "my_etags",
         *   //   "kind": "my_kind",
         *   //   "productId": "my_productId",
         *   //   "productName": "my_productName",
         *   //   "selfLink": "my_selfLink",
         *   //   "skuId": "my_skuId",
         *   //   "skuName": "my_skuName",
         *   //   "userId": "my_userId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Licenseassignments$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Licenseassignments$Update, options?: MethodOptions): GaxiosPromise<Schema$LicenseAssignment>;
        update(params: Params$Resource$Licenseassignments$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Licenseassignments$Update, options: MethodOptions | BodyResponseCallback<Schema$LicenseAssignment>, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        update(params: Params$Resource$Licenseassignments$Update, callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
        update(callback: BodyResponseCallback<Schema$LicenseAssignment>): void;
    }
    export interface Params$Resource$Licenseassignments$Delete extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
         */
        userId?: string;
    }
    export interface Params$Resource$Licenseassignments$Get extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
         */
        userId?: string;
    }
    export interface Params$Resource$Licenseassignments$Insert extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LicenseAssignmentInsert;
    }
    export interface Params$Resource$Licenseassignments$Listforproduct extends StandardParameters {
        /**
         * The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
         */
        customerId?: string;
        /**
         * The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         */
        maxResults?: number;
        /**
         * Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         */
        pageToken?: string;
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
    }
    export interface Params$Resource$Licenseassignments$Listforproductandsku extends StandardParameters {
        /**
         * The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
         */
        customerId?: string;
        /**
         * The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
         */
        maxResults?: number;
        /**
         * Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
         */
        pageToken?: string;
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
    }
    export interface Params$Resource$Licenseassignments$Patch extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
         */
        userId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LicenseAssignment;
    }
    export interface Params$Resource$Licenseassignments$Update extends StandardParameters {
        /**
         * A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
         */
        productId?: string;
        /**
         * A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
         */
        skuId?: string;
        /**
         * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
         */
        userId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LicenseAssignment;
    }
    export {};
}
