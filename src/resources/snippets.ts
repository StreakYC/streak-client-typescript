// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Snippets extends APIResource {
  /**
   * This call lets you get a single [snippet](reference#snippets).
   */
  retrieve(key: string, options?: RequestOptions): APIPromise<SnippetRetrieveResponse> {
    return this._client.get(path`/snippets/${key}`, options);
  }

  /**
   * This call lets you update a specific [snippet](reference#snippets).
   */
  update(
    key: string,
    body: SnippetUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnippetUpdateResponse> {
    return this._client.post(path`/snippets/${key}`, { body, ...options });
  }

  /**
   * This call lets you get all the [snippets](reference#snippets) for a
   * [user](reference#get-current-user).
   */
  list(options?: RequestOptions): APIPromise<SnippetListResponse> {
    return this._client.get('/snippets', options);
  }

  /**
   * This call lets you delete a [snippet](reference#snippets).
   */
  delete(key: string, options?: RequestOptions): APIPromise<SnippetDeleteResponse> {
    return this._client.delete(path`/snippets/${key}`, options);
  }
}

export type SnippetRetrieveResponse = Array<SnippetRetrieveResponse.SnippetRetrieveResponseItem>;

export namespace SnippetRetrieveResponse {
  export interface SnippetRetrieveResponseItem {
    creationDate?: number;

    key?: string;

    partOfPipeline?: boolean;

    snippetKey?: string;

    snippetName?: string;

    snippetText?: SnippetRetrieveResponseItem.SnippetText;

    snippetType?: string;

    userKey?: string;
  }

  export namespace SnippetRetrieveResponseItem {
    export interface SnippetText {
      value?: string;
    }
  }
}

export interface SnippetUpdateResponse {
  creationDate?: number;

  key?: string;

  lastSavedTimestamp?: number;

  partOfPipeline?: boolean;

  pipelineKey?: string;

  snippetKeyShortcut?: string;

  snippetName?: string;

  snippetText?: string;

  snippetType?: string;

  userKey?: string;
}

export type SnippetListResponse = Array<SnippetListResponse.SnippetListResponseItem>;

export namespace SnippetListResponse {
  export interface SnippetListResponseItem {
    creationDate?: number;

    key?: string;

    partOfPipeline?: boolean;

    snippetKey?: string;

    snippetName?: string;

    snippetText?: SnippetListResponseItem.SnippetText;

    snippetType?: string;

    userKey?: string;
  }

  export namespace SnippetListResponseItem {
    export interface SnippetText {
      value?: string;
    }
  }
}

export interface SnippetDeleteResponse {
  success?: boolean;
}

export interface SnippetUpdateParams {
  /**
   * The pipeline that the snippet will be shared in.
   */
  pipelineKey?: string;

  /**
   * A shortcut that activates the snippet
   */
  snippetKeyShortcut?: string;

  /**
   * Name of the snippet
   */
  snippetName?: string;

  /**
   * The snippet's text/body
   */
  snippetText?: string;

  /**
   * The snippet's subject line
   */
  subject?: string;
}

export declare namespace Snippets {
  export {
    type SnippetRetrieveResponse as SnippetRetrieveResponse,
    type SnippetUpdateResponse as SnippetUpdateResponse,
    type SnippetListResponse as SnippetListResponse,
    type SnippetDeleteResponse as SnippetDeleteResponse,
    type SnippetUpdateParams as SnippetUpdateParams,
  };
}
