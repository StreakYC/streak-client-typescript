// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Snippets extends APIResource {
  /**
   * This call lets you create a [snippet](reference#snippets).
   */
  create(body: SnippetCreateParams, options?: RequestOptions): APIPromise<SnippetCreateResponse> {
    return this._client.put('/snippets', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface SnippetCreateResponse {
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

export interface SnippetCreateParams {
  /**
   * Name of the snippet
   */
  snippetName: string;

  /**
   * (optional) The pipeline that the snippet will be shared in.
   */
  pipelineKey?: string;

  /**
   * A shortcut that activates the snippet
   */
  snippetKeyShortcut?: string;

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
    type SnippetCreateResponse as SnippetCreateResponse,
    type SnippetCreateParams as SnippetCreateParams,
  };
}
