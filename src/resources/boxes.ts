// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Boxes extends APIResource {
  /**
   * See [here](reference#threads) for more information on threads.
   */
  addThread(
    key: string,
    body: BoxAddThreadParams,
    options?: RequestOptions,
  ): APIPromise<BoxAddThreadResponse> {
    return this._client.put(path`/boxes/${key}/threads`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export type BoxAddThreadResponse = Array<BoxAddThreadResponse.BoxAddThreadResponseItem>;

export namespace BoxAddThreadResponse {
  export interface BoxAddThreadResponseItem {
    boxKey?: string;

    creationTimestamp?: number;

    creatorKey?: string;

    emailAddresses?: Array<unknown>;

    fileKeys?: Array<unknown>;

    gmailThreadKey?: string;

    key?: string;

    lastSavedTimestamp?: number;

    lastUpdatedTimestamp?: number;

    names?: Array<unknown>;

    numberOfEmails?: number;

    pipelineKey?: string;

    threadGmailId?: string;
  }
}

export interface BoxAddThreadParams {
  /**
   * Box key
   */
  boxKey: string;

  /**
   * The Gmail thread you'd like to add to the box (eg `15d52837dc00ff8e`)
   */
  threadGmailId: string;
}

export declare namespace Boxes {
  export { type BoxAddThreadResponse as BoxAddThreadResponse, type BoxAddThreadParams as BoxAddThreadParams };
}
