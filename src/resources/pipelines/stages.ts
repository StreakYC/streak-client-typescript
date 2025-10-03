// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Stages extends APIResource {
  /**
   * This call gives you a specific stage defined in a
   * [pipeline](reference#getting-a-specific-pipeline).
   */
  retrieve(
    stageKey: string,
    params: StageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<StageRetrieveResponse> {
    const { pipelineKey } = params;
    return this._client.get(path`/pipelines/${pipelineKey}/stages/${stageKey}`, options);
  }

  /**
   * This call lets you edit the name of a [stage](reference#get-a-stage).
   */
  update(
    stageKey: string,
    params: StageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<StageUpdateResponse> {
    const { pipelineKey, ...body } = params;
    return this._client.post(path`/pipelines/${pipelineKey}/stages/${stageKey}`, { body, ...options });
  }

  /**
   * Stages are different possible states a [box](reference#get-a-box) can be in. The
   * list of valid stages a box can be in are defined in the
   * [pipeline](reference#list-all-pipelines) it belongs to. All boxes in the same
   * pipeline all have the same set of permissible stages. Listing the stages for a
   * given pipeline can be done by (getting a specific
   * pipeline)[reference#getting-a-specific-pipeline] or using the list stages
   * endpoint below. To set what stage a given box is in, update the `stageKey`
   * property of a box using the [edit box endpoint](reference#edit-a-box).
   *
   * This call lists the stages defined in a pipeline. Remember, this is only the
   * definition of the stages - to change what stage a box is in, simply
   * [update the box](reference#edit-a-box) with a new `stageKey`.
   */
  list(pipelineKey: string, options?: RequestOptions): APIPromise<StageListResponse> {
    return this._client.get(path`/pipelines/${pipelineKey}/stages`, options);
  }

  /**
   * This call lets you delete a [stage](reference#get-a-stage) defined in a
   * [pipeline](reference#getting-a-specific-pipeline).
   *
   * **This call will only succeed if there are no boxes tagged with the key of this
   * stage, else it throws a `400`.**
   */
  delete(
    stageKey: string,
    params: StageDeleteParams,
    options?: RequestOptions,
  ): APIPromise<StageDeleteResponse> {
    const { pipelineKey } = params;
    return this._client.delete(path`/pipelines/${pipelineKey}/stages/${stageKey}`, options);
  }
}

export interface StageRetrieveResponse {
  key?: string;

  name?: string;
}

export interface StageUpdateResponse {
  key?: string;

  name?: string;
}

export interface StageListResponse {
  '5001'?: StageListResponse._5001;

  '5002'?: StageListResponse._5002;

  '5003'?: StageListResponse._5003;

  '5005'?: StageListResponse._5005;

  '5006'?: StageListResponse._5006;

  '5007'?: StageListResponse._5007;
}

export namespace StageListResponse {
  export interface _5001 {
    key?: string;

    name?: string;
  }

  export interface _5002 {
    key?: string;

    name?: string;
  }

  export interface _5003 {
    key?: string;

    name?: string;
  }

  export interface _5005 {
    key?: string;

    name?: string;
  }

  export interface _5006 {
    key?: string;

    name?: string;
  }

  export interface _5007 {
    key?: string;

    name?: string;
  }
}

export interface StageDeleteResponse {
  success?: boolean;
}

export interface StageRetrieveParams {
  /**
   * The key of the pipeline
   */
  pipelineKey: string;
}

export interface StageUpdateParams {
  /**
   * Path param: The key of the pipeline
   */
  pipelineKey: string;

  /**
   * Body param: The new name for the stage
   */
  name: string;
}

export interface StageDeleteParams {
  /**
   * The key of the pipeline
   */
  pipelineKey: string;
}

export declare namespace Stages {
  export {
    type StageRetrieveResponse as StageRetrieveResponse,
    type StageUpdateResponse as StageUpdateResponse,
    type StageListResponse as StageListResponse,
    type StageDeleteResponse as StageDeleteResponse,
    type StageRetrieveParams as StageRetrieveParams,
    type StageUpdateParams as StageUpdateParams,
    type StageDeleteParams as StageDeleteParams,
  };
}
