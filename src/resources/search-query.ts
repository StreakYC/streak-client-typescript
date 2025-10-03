// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SearchQuery extends APIResource {
  /**
   * _Any search by query will return results on
   * [orgs](reference#get-an-organization), [boxes](reference#get-a-box), and
   * [contacts](reference#read-a-contact-1)._
   */
  performSearch(
    query: string,
    query: SearchQueryPerformSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/search?query=${query}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SearchQueryPerformSearchParams {
  /**
   * Limit your search to boxes on particular pipelines. _Valid for boxes results
   * only._ `pipelineKey` is repeatable in order to search content on multiple
   * pipelines.
   */
  pipelineKey?: string;

  /**
   * Limit your search to boxes on a particular stage. `stageKey`s come in the format
   * of `5001`, `5002`, `5003`, etc. _Valid for boxes results only._ `stageKey` is
   * repeatable in order to search content in multiple stages.
   */
  stageKey?: string;
}

export declare namespace SearchQuery {
  export { type SearchQueryPerformSearchParams as SearchQueryPerformSearchParams };
}
