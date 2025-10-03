// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BoxesAPI from './boxes';
import { BoxBatchGetParams, BoxListParams, BoxListResponse, Boxes } from './boxes';
import * as FieldsAPI from './fields';
import {
  FieldDeleteParams,
  FieldDeleteResponse,
  FieldListResponse,
  FieldRetrieveParams,
  FieldRetrieveResponse,
  FieldUpdateParams,
  FieldUpdateResponse,
  Fields,
} from './fields';
import * as NewsfeedAPI from './newsfeed';
import {
  Newsfeed,
  NewsfeedExportFullParams,
  NewsfeedExportFullResponse,
  NewsfeedRetrieveParams,
  NewsfeedRetrieveResponse,
} from './newsfeed';
import * as StagesAPI from './stages';
import {
  StageDeleteParams,
  StageDeleteResponse,
  StageListResponse,
  StageRetrieveParams,
  StageRetrieveResponse,
  StageUpdateParams,
  StageUpdateResponse,
  Stages,
} from './stages';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pipelines extends APIResource {
  boxes: BoxesAPI.Boxes = new BoxesAPI.Boxes(this._client);
  stages: StagesAPI.Stages = new StagesAPI.Stages(this._client);
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
  newsfeed: NewsfeedAPI.Newsfeed = new NewsfeedAPI.Newsfeed(this._client);

  /**
   * This call will give you a single [pipeline](reference#list-all-pipelines) given
   * the key.
   */
  retrieve(pipelineKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/pipelines/${pipelineKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This call lets you edit the properties of a
   * [pipeline](reference#list-all-pipelines).
   */
  update(
    pipelineKey: string,
    body: PipelineUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PipelineUpdateResponse> {
    return this._client.post(path`/pipelines/${pipelineKey}`, { body, ...options });
  }

  /**
   * Pipelines are a core data object in Streak. They represent a business process
   * that a user or set of users would like managed. Pipelines are typically used for
   * Sales, Hiring, Product Development, Bug Tracking, Project Management,
   * Fundraising, Dealflow and others.
   *
   * A pipeline defines the schema for the boxes it contains. It defines the set of
   * stages that contained boxes can be in as well as the set of custom fields. A
   * pipeline is created by a single user but can be shared to other users or to an
   * entire organization.
   *
   * Pipelines have several fields that describe the schema of the pipeline and hence
   * describe the schema of any boxes contained within it.
   *
   * The stages and fields properties are embedded in the pipeline object for
   * convenience, however, to update these properties you must use the respective
   * endpoints listed in the Stages and Fields sections.
   */
  list(query: PipelineListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/pipelines', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This call lets you delete a [pipeline](reference#list-all-pipelines). You can
   * only delete pipelines that are empty and have no boxes in them.
   */
  delete(pipelineKey: string, options?: RequestOptions): APIPromise<PipelineDeleteResponse> {
    return this._client.delete(path`/pipelines/${pipelineKey}`, options);
  }
}

export interface PipelineUpdateResponse {
  aclEntries?: Array<unknown>;

  creationTimestamp?: number;

  creatorKey?: string;

  description?: string;

  fields?: Array<unknown>;

  key?: string;

  lastUpdatedTimestamp?: number;

  name?: string;

  orgWide?: boolean;

  owner?: PipelineUpdateResponse.Owner;

  pipelineKey?: string;

  stageOrder?: Array<unknown>;

  stages?: unknown;
}

export namespace PipelineUpdateResponse {
  export interface Owner {
    email?: string;

    isOwner?: boolean;
  }
}

export interface PipelineDeleteResponse {
  success?: boolean;
}

export interface PipelineUpdateParams {
  /**
   * This is a JSON array of objects representing who the pipeline is currently
   * shared with. You can add and remove objects in a single update. Each object in
   * this array is required to have 1 property - email. Adding a user to the
   * aclEntries causes them to receive an email informing them that the pipeline has
   * been shared with them.
   */
  aclEntries?: Array<PipelineUpdateParams.ACLEntry>;

  /**
   * The new name of the pipeline
   */
  name?: string;

  /**
   * A boolean indicating whether this pipeline is shared to everyone in the
   * organization. For Google apps customers this means any other user with the same
   * domain in their email address. This field has no effect for regular Gmail users.
   */
  orgWide?: boolean;

  /**
   * A JSON array containing ordering of stage keys. The elements of this array are
   * allowed to be re-ordered only. The order of this array affects the UI of the
   * pipeline in the Web UI.
   */
  stageOrder?: Array<string>;

  /**
   * A new team to share this pipeline
   */
  teamKey?: string;
}

export namespace PipelineUpdateParams {
  export interface ACLEntry {
    /**
     * Email address of new sharing entity
     */
    email?: string;
  }
}

export interface PipelineListParams {
  /**
   * What order to sort the pipelines by. There are two valid sorts:
   * `creationTimestamp` and `lastUpdatedTimestamp`. Both are in descending order.
   */
  sortBy?: string;
}

Pipelines.Boxes = Boxes;
Pipelines.Stages = Stages;
Pipelines.Fields = Fields;
Pipelines.Newsfeed = Newsfeed;

export declare namespace Pipelines {
  export {
    type PipelineUpdateResponse as PipelineUpdateResponse,
    type PipelineDeleteResponse as PipelineDeleteResponse,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineListParams as PipelineListParams,
  };

  export {
    Boxes as Boxes,
    type BoxListResponse as BoxListResponse,
    type BoxListParams as BoxListParams,
    type BoxBatchGetParams as BoxBatchGetParams,
  };

  export {
    Stages as Stages,
    type StageRetrieveResponse as StageRetrieveResponse,
    type StageUpdateResponse as StageUpdateResponse,
    type StageListResponse as StageListResponse,
    type StageDeleteResponse as StageDeleteResponse,
    type StageRetrieveParams as StageRetrieveParams,
    type StageUpdateParams as StageUpdateParams,
    type StageDeleteParams as StageDeleteParams,
  };

  export {
    Fields as Fields,
    type FieldRetrieveResponse as FieldRetrieveResponse,
    type FieldUpdateResponse as FieldUpdateResponse,
    type FieldListResponse as FieldListResponse,
    type FieldDeleteResponse as FieldDeleteResponse,
    type FieldRetrieveParams as FieldRetrieveParams,
    type FieldUpdateParams as FieldUpdateParams,
    type FieldDeleteParams as FieldDeleteParams,
  };

  export {
    Newsfeed as Newsfeed,
    type NewsfeedRetrieveResponse as NewsfeedRetrieveResponse,
    type NewsfeedExportFullResponse as NewsfeedExportFullResponse,
    type NewsfeedRetrieveParams as NewsfeedRetrieveParams,
    type NewsfeedExportFullParams as NewsfeedExportFullParams,
  };
}
