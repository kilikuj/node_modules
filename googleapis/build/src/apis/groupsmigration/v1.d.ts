/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace groupsmigration_v1 {
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
     * Groups Migration API
     *
     * The Groups Migration API allows domain administrators to archive emails into Google groups.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const groupsmigration = google.groupsmigration('v1');
     * ```
     */
    export class Groupsmigration {
        context: APIRequestContext;
        archive: Resource$Archive;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * JSON response template for groups migration API.
     */
    export interface Schema$Groups {
        /**
         * The kind of insert resource this is.
         */
        kind?: string | null;
        /**
         * The status of the insert request.
         */
        responseCode?: string | null;
    }
    export class Resource$Archive {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Inserts a new mail into the archive of the Google group.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/groupsmigration.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const groupsmigration = google.groupsmigration('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/apps.groups.migration'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await groupsmigration.archive.insert({
         *     // The group ID
         *     groupId: 'placeholder-value',
         *
         *     requestBody: {
         *       // request body parameters
         *     },
         *     media: {
         *       mimeType: 'placeholder-value',
         *       body: 'placeholder-value',
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "kind": "my_kind",
         *   //   "responseCode": "my_responseCode"
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
        insert(params: Params$Resource$Archive$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Archive$Insert, options?: MethodOptions): GaxiosPromise<Schema$Groups>;
        insert(params: Params$Resource$Archive$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Archive$Insert, options: MethodOptions | BodyResponseCallback<Schema$Groups>, callback: BodyResponseCallback<Schema$Groups>): void;
        insert(params: Params$Resource$Archive$Insert, callback: BodyResponseCallback<Schema$Groups>): void;
        insert(callback: BodyResponseCallback<Schema$Groups>): void;
    }
    export interface Params$Resource$Archive$Insert extends StandardParameters {
        /**
         * The group ID
         */
        groupId?: string;
        /**
         * Request body metadata
         */
        requestBody?: {};
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export {};
}