// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SearchName extends APIResource {
  /**
   * [Box](reference#get-a-box) name is an exact search.
   */
  retrieve(
    name: string,
    query: SearchNameRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchNameRetrieveResponse> {
    return this._client.get(path`/search?name=${name}`, { query, ...options });
  }
}

export interface SearchNameRetrieveResponse {
  page?: number;

  results?: SearchNameRetrieveResponse.Results;
}

export namespace SearchNameRetrieveResponse {
  export interface Results {
    boxes?: Array<Results.Box>;
  }

  export namespace Results {
    export interface Box {
      assignedToKeys?: Array<string>;

      boxKey?: string;

      lastUpdatedTimestamp?: number;

      name?: string;

      pipelineKey?: string;

      stageKey?: string;
    }
  }
}

export interface SearchNameRetrieveParams {
  /**
   * Limit your search to boxes on particular pipelines. `pipelineKey` is repeatable
   * in order to search content on multiple pipelines.
   */
  pipelineKey?: string;

  /**
   * Limit your search to boxes on a particular stage. `stageKey` is repeatable in
   * order to search content in multiple stages.
   */
  stageKey?: string;
}

export declare namespace SearchName {
  export {
    type SearchNameRetrieveResponse as SearchNameRetrieveResponse,
    type SearchNameRetrieveParams as SearchNameRetrieveParams,
  };
}
