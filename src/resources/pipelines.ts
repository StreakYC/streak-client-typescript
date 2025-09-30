// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Pipelines extends APIResource {
  /**
   * Create a pipeline
   */
  create(body: PipelineCreateParams, options?: RequestOptions): APIPromise<PipelineCreateResponse> {
    return this._client.put('/pipelines', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * This call lets you create a field for a
   * [pipeline](reference#getting-a-specific-pipeline). This defines the field in the
   * pipeline so that you can add values for that field for each
   * [box](reference#get-a-box) in the pipeline.
   */
  createField(
    pipelineKey: string,
    body: PipelineCreateFieldParams,
    options?: RequestOptions,
  ): APIPromise<PipelineCreateFieldResponse> {
    return this._client.put(path`/pipelines/${pipelineKey}/fields`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * This call lets you create a [stage](reference#get-a-stage) defined in a
   * [pipeline](reference#getting-a-specific-pipeline).
   */
  createStage(
    pipelineKey: string,
    body: PipelineCreateStageParams,
    options?: RequestOptions,
  ): APIPromise<PipelineCreateStageResponse> {
    return this._client.put(path`/pipelines/${pipelineKey}/stages`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface PipelineCreateResponse {
  aclEntries?: Array<unknown>;

  creationTimestamp?: number;

  creatorKey?: string;

  fields?: Array<unknown>;

  key?: string;

  lastUpdatedTimestamp?: number;

  name?: string;

  owner?: PipelineCreateResponse.Owner;

  pipelineKey?: string;

  stageOrder?: Array<unknown>;

  stages?: unknown;

  teamWide?: boolean;
}

export namespace PipelineCreateResponse {
  export interface Owner {
    email?: string;

    isOwner?: boolean;
  }
}

export interface PipelineCreateFieldResponse {
  key?: string;

  name?: string;

  type?: string;
}

export interface PipelineCreateStageResponse {
  key?: string;

  name?: string;
}

export interface PipelineCreateParams {
  /**
   * The name of the pipeline you are creating
   */
  name: string;

  /**
   * The key of the team the pipeline will be shared with
   */
  teamKey: string;

  /**
   * The fields each box within the pipeline can have. Fields should be given as a
   * comma-separated array of names and a comma-separated array of corresponding
   * field types (of equal length). To modify after creation use the Field endpoint.
   * Example: `["Sleepy", "Sneezy", "Doc"]`.
   */
  fieldNames?: string;

  /**
   * The type of the field. Can be any of: `TEXT_INPUT`, `DATE`, `TAG`, `FORMULA`,
   * `DROPDOWN`, `CHECKBOX`, or `TEAM_CONTACT`. Should be an array of strings, ie
   * `["TAG", "CHECKBOX", "DROPDOWN"]`.
   */
  fieldTypes?: string;

  /**
   * The possible stages a box within a pipeline can be in, separated by comma. To
   * modify after creation use the Stage endpoint. As an example, try
   * `["Snow", "White"]`.
   */
  stageNames?: string;

  /**
   * Whether the pipeline will be shared with all users in the team
   */
  teamWide?: boolean;
}

export interface PipelineCreateFieldParams {
  /**
   * The name of the field
   */
  name: string;

  /**
   * The type of the field. Can be any of: `TEXT_INPUT`, `DATE`, `TAG`, `FORMULA`,
   * `DROPDOWN`, `CHECKBOX`, or `TEAM_CONTACT`.
   */
  type: string;
}

export interface PipelineCreateStageParams {
  /**
   * The name of the stage you'd like to add to the pipeline
   */
  name: string;
}

export declare namespace Pipelines {
  export {
    type PipelineCreateResponse as PipelineCreateResponse,
    type PipelineCreateFieldResponse as PipelineCreateFieldResponse,
    type PipelineCreateStageResponse as PipelineCreateStageResponse,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineCreateFieldParams as PipelineCreateFieldParams,
    type PipelineCreateStageParams as PipelineCreateStageParams,
  };
}
