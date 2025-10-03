// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FieldsAPI from './fields';
import {
  FieldRetrieveParams,
  FieldRetrieveResponse,
  FieldUpdateParams,
  FieldUpdateResponse,
  Fields as FieldsAPIFields,
} from './fields';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Boxes extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);

  /**
   * This call gives you a specific box based on the key you provide.
   */
  retrieve(boxKey: string, options?: RequestOptions): APIPromise<BoxRetrieveResponse> {
    return this._client.get(path`/boxes/${boxKey}`, options);
  }

  /**
   * This call lets you edit the properties of a [box](reference#get-a-box).
   */
  update(
    boxKey: string,
    body: BoxUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoxUpdateResponse> {
    return this._client.post(path`/boxes/${boxKey}`, { body, ...options });
  }

  /**
   * This call lets you delete a particular [box](reference#get-a-box). It also
   * deletes all of the relevant data such as [files](reference#files),
   * [emails](reference#threads), and [tasks](reference#read-a-task) for that box.
   */
  delete(boxKey: string, options?: RequestOptions): APIPromise<BoxDeleteResponse> {
    return this._client.delete(path`/boxes/${boxKey}`, options);
  }

  /**
   * This endpoint will give the historical changes for a particular
   * [box](reference#get-a-box). It is limited to the 50 most recent events.
   */
  getNewsfeed(
    key: string,
    query: BoxGetNewsfeedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoxGetNewsfeedResponse> {
    return this._client.get(path`/boxes/${key}/newsfeed`, { query, ...options });
  }

  /**
   * This call lets you get all the files associated with a particular
   * [box](reference#get-a-box).
   *
   * **You can only get the contents of files that are of the type `GMAIL_API`.**
   */
  listFiles(key: string, options?: RequestOptions): APIPromise<BoxListFilesResponse> {
    return this._client.get(path`/boxes/${key}/files`, options);
  }

  /**
   * This call lets you get all the [threads](reference#threads) in a particular
   * [box](reference#get-a-box).
   */
  listThreads(key: string, options?: RequestOptions): APIPromise<BoxListThreadsResponse> {
    return this._client.get(path`/boxes/${key}/threads`, options);
  }

  /**
   * [editor's note: This moved into "Update a box"]
   *
   * Editing a single field of a box can be achieved through its own
   * [endpoint](reference#update-a-field). However, this endpoint allows you to edit
   * multiple fields at once.
   */
  updateMultipleFields(
    key: string,
    body: BoxUpdateMultipleFieldsParams,
    options?: RequestOptions,
  ): APIPromise<BoxUpdateMultipleFieldsResponse> {
    return this._client.post(path`/boxes/${key}`, { body, ...options });
  }
}

export interface BoxRetrieveResponse {
  boxKey?: string;

  commentCount?: number;

  creationTimestamp?: number;

  creatorKey?: string;

  fields?: BoxRetrieveResponse.Fields;

  fileCount?: number;

  followerCount?: number;

  followerKeys?: Array<string>;

  gmailThreadCount?: number;

  key?: string;

  lastUpdatedTimestamp?: number;

  name?: string;

  pipelineKey?: string;

  stageKey?: string;

  taskTotal?: number;
}

export namespace BoxRetrieveResponse {
  export interface Fields {
    '1003'?: number;
  }
}

export interface BoxUpdateResponse {
  boxKey?: string;

  commentCount?: number;

  creationTimestamp?: number;

  creatorKey?: string;

  fields?: unknown;

  fileCount?: number;

  followerCount?: number;

  followerKeys?: Array<string>;

  gmailThreadCount?: number;

  key?: string;

  lastUpdatedTimestamp?: number;

  name?: string;

  pipelineKey?: string;

  stageKey?: string;

  taskTotal?: number;
}

export interface BoxDeleteResponse {
  success?: boolean;
}

export type BoxGetNewsfeedResponse = Array<BoxGetNewsfeedResponse.BoxGetNewsfeedResponseItem>;

export namespace BoxGetNewsfeedResponse {
  export interface BoxGetNewsfeedResponseItem {
    boxKey?: string;

    collapsedEntries?: Array<unknown>;

    creatorKey?: string;

    lastSavedTimestamp?: number;

    moved?: boolean;

    newsfeedEntryOperation?: string;

    newsfeedEntryScope?: string;

    newsfeedEntrySpecific?: string;

    newsfeedItemKey?: string;

    pipelineKey?: string;

    specificVariables?: BoxGetNewsfeedResponseItem.SpecificVariables;

    storyTextBox?: string;

    storyTextGlobal?: string;

    storyTextPipeline?: string;

    timestamp?: number;
  }

  export namespace BoxGetNewsfeedResponseItem {
    export interface SpecificVariables {
      BOX_NAME?: string;

      PIPELINE_NAME?: string;

      STAGE_KEY?: string;

      STORY_AUTHOR_DISPLAY_NAME?: string;
    }
  }
}

export type BoxListFilesResponse = Array<BoxListFilesResponse.BoxListFilesResponseItem>;

export namespace BoxListFilesResponse {
  export interface BoxListFilesResponseItem {
    boxKey?: string;

    creationTimestamp?: number;

    fileKey?: string;

    fileName?: string;

    fileOwner?: string;

    fileType?: string;

    gmailAPIFileId?: string;

    gmailMessageId?: string;

    isCurrentUserOwnerInDrive?: boolean;

    key?: string;

    lastSavedTimestamp?: number;

    lastUpdatedTimestamp?: number;

    mainFileName?: string;

    mimeType?: string;

    size?: string;
  }
}

export type BoxListThreadsResponse = Array<BoxListThreadsResponse.BoxListThreadsResponseItem>;

export namespace BoxListThreadsResponse {
  export interface BoxListThreadsResponseItem {
    boxKey?: string;

    creationTimestamp?: number;

    creatorKey?: string;

    emailAddresses?: Array<string>;

    fileKeys?: Array<unknown>;

    files?: Array<unknown>;

    gmailThreadKey?: string;

    key?: string;

    lastUpdatedTimestamp?: number;

    names?: Array<string>;

    pipelineKey?: string;

    threadGmailId?: string;
  }
}

export interface BoxUpdateMultipleFieldsResponse {
  boxKey?: string;

  contacts?: Array<BoxUpdateMultipleFieldsResponse.Contact>;

  creationTimestamp?: number;

  fields?: BoxUpdateMultipleFieldsResponse.Fields;

  lastSavedTimestamp?: number;

  lastUpdatedTimestamp?: number;

  name?: string;

  pipelineKey?: string;

  stageKey?: string;
}

export namespace BoxUpdateMultipleFieldsResponse {
  export interface Contact {
    isStarred?: boolean;

    key?: string;
  }

  export interface Fields {
    '1007'?: string;

    '1039'?: string;
  }
}

export interface BoxUpdateParams {
  /**
   * List of the keys of users assigned to the box. You can unassign a box by sending
   * an empty array.
   */
  assignedToSharingEntries?: Array<string>;

  /**
   * The only contacts associated with the box will be the ones you include here;
   * make sure to include any previously associated contacts as well as the new
   * one(s).
   */
  contacts?: Array<BoxUpdateParams.Contact>;

  /**
   * Field keys and corresponding values, e.g. { "1007": "String", "1039": 42}
   */
  fields?: string;

  /**
   * A JSON array of user keys who are following this box. When a user follows a box,
   * they receive notification emails upon major changes to the box
   */
  followerKeys?: Array<string>;

  /**
   * The list of box keys you would like to link to the current box.
   */
  linkedBoxKeys?: Array<string>;

  /**
   * The new name of the box
   */
  name?: string;

  /**
   * The notes of the box
   */
  notes?: string;

  /**
   * The only organizations associated with the box will be the ones you include
   * here; make sure to include any previously associated organizations as well as
   * the new one(s).
   */
  organizations?: Array<BoxUpdateParams.Organization>;

  /**
   * The key of the stage that this box should be in. A list of valid stage keys can
   * be found from the pipeline that this box belongs to
   */
  stageKey?: string;
}

export namespace BoxUpdateParams {
  export interface Contact {
    /**
     * Determines if the contact is "starred" in our interface
     */
    isStarred: boolean;

    /**
     * Contact key
     */
    key: string;

    /**
     * Determines if the contact has autoboxing enabled
     */
    isAutoboxed?: boolean;
  }

  export interface Organization {
    /**
     * Determines if the organization is "starred" in our interface
     */
    isStarred: boolean;

    /**
     * Organization key
     */
    key: string;

    /**
     * Determines if the organization has autoboxing enabled
     */
    'isAutoboxed*'?: boolean;
  }
}

export interface BoxGetNewsfeedParams {
  /**
   * This is similar to the specifics parameter but uses a predetermined set of
   * specifics to filter on. The possible values for this parameter are `ALL` or
   * `CONDENSED`. The `CONDENSED` value limits the results to only certain important
   * specific parameters determined by Streak.
   */
  detailLevel?: string;
}

export interface BoxUpdateMultipleFieldsParams {
  /**
   * Field keys and corresponding values. eg {"1007":"String", "1039":42}
   */
  fields: string;
}

Boxes.Fields = FieldsAPIFields;

export declare namespace Boxes {
  export {
    type BoxRetrieveResponse as BoxRetrieveResponse,
    type BoxUpdateResponse as BoxUpdateResponse,
    type BoxDeleteResponse as BoxDeleteResponse,
    type BoxGetNewsfeedResponse as BoxGetNewsfeedResponse,
    type BoxListFilesResponse as BoxListFilesResponse,
    type BoxListThreadsResponse as BoxListThreadsResponse,
    type BoxUpdateMultipleFieldsResponse as BoxUpdateMultipleFieldsResponse,
    type BoxUpdateParams as BoxUpdateParams,
    type BoxGetNewsfeedParams as BoxGetNewsfeedParams,
    type BoxUpdateMultipleFieldsParams as BoxUpdateMultipleFieldsParams,
  };

  export {
    FieldsAPIFields as Fields,
    type FieldRetrieveResponse as FieldRetrieveResponse,
    type FieldUpdateResponse as FieldUpdateResponse,
    type FieldRetrieveParams as FieldRetrieveParams,
    type FieldUpdateParams as FieldUpdateParams,
  };
}
