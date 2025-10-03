// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Threads extends APIResource {
  /**
   * This call lets you get a specific [thread](reference#threads).
   */
  retrieve(key: string, options?: RequestOptions): APIPromise<ThreadRetrieveResponse> {
    return this._client.get(path`/threads/${key}`, options);
  }

  /**
   * Remove a thread
   */
  delete(key: string, options?: RequestOptions): APIPromise<ThreadDeleteResponse> {
    return this._client.delete(path`/threads/${key}`, options);
  }
}

export interface ThreadRetrieveResponse {
  boxKey?: string;

  creationTimestamp?: number;

  creatorKey?: string;

  emailAddresses?: Array<string>;

  fileKeys?: Array<unknown>;

  files?: Array<unknown>;

  gmailThreadKey?: string;

  key?: string;

  lastEmailTimestamp?: number;

  lastUpdatedTimestamp?: number;

  names?: Array<string>;

  pipelineKey?: string;

  subject?: string;

  threadGmailId?: string;
}

export interface ThreadDeleteResponse {
  success?: boolean;
}

export declare namespace Threads {
  export {
    type ThreadRetrieveResponse as ThreadRetrieveResponse,
    type ThreadDeleteResponse as ThreadDeleteResponse,
  };
}
