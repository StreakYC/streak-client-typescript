// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Boxes extends APIResource {
  /**
   * This call lets you get all boxes contained in the specified
   * [pipeline](reference#list-all-pipelines). Use limits and pages to refine your
   * request.
   */
  list(
    pipelineKey: string,
    query: BoxListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BoxListResponse> {
    return this._client.get(path`/pipelines/${pipelineKey}/boxes`, { query, ...options });
  }

  /**
   * Batch get boxes from a pipeline.
   */
  batchGet(
    pipelineKey: string,
    body: BoxBatchGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/pipelines/${pipelineKey}/boxes/batch/`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type BoxListResponse = Array<BoxListResponse.BoxListResponseItem>;

export namespace BoxListResponse {
  export interface BoxListResponseItem {
    boxKey?: string;

    commentCount?: number;

    creationTimestamp?: number;

    creatorKey?: string;

    fields?: BoxListResponseItem.Fields;

    fileCount?: number;

    followerCount?: number;

    followerKeys?: Array<string>;

    gmailThreadCount?: number;

    key?: string;

    lastUpdatedTimestamp?: number;

    name?: string;

    notes?: string;

    pipelineKey?: string;

    stageKey?: string;

    taskTotal?: number;
  }

  export namespace BoxListResponseItem {
    export interface Fields {
      '1002'?: string;
    }
  }
}

export interface BoxListParams {
  /**
   * The number of boxes to receive back on each `page`.
   */
  limit?: number;

  /**
   * The page number you'd like to view. If there are more results to show,
   * `hasNextPage` will be `true`. Pages are 0 indexed.
   */
  page?: number;

  /**
   * What order to sort the boxes by. There are two valid sorts: `creationTimestamp`
   * and `lastUpdatedTimestamp`. Both are in descending order.
   */
  sortBy?: string;

  /**
   * Stage to search (not repeatable)
   */
  stageKey?: string;
}

export interface BoxBatchGetParams {
  /**
   * Enter box keys individually here
   */
  RAW_BODY?: Array<string>;
}

export declare namespace Boxes {
  export {
    type BoxListResponse as BoxListResponse,
    type BoxListParams as BoxListParams,
    type BoxBatchGetParams as BoxBatchGetParams,
  };
}
