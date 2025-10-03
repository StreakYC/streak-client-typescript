// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Newsfeed extends APIResource {
  /**
   * This endpoint will give you not only the historical changes for all
   * [pipelines](reference#getting-a-specific-pipeline), but also the historical
   * changes for all [boxes](reference#get-a-box) contained within all the pipelines
   * this [user](reference#get-current-user) has access to. It is limited to the 50
   * most recent events.
   */
  retrieve(
    query: NewsfeedRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsfeedRetrieveResponse> {
    return this._client.get('/newsfeed', { query, ...options });
  }
}

export type NewsfeedRetrieveResponse = Array<NewsfeedRetrieveResponse.NewsfeedRetrieveResponseItem>;

export namespace NewsfeedRetrieveResponse {
  export interface NewsfeedRetrieveResponseItem {
    boxKey?: string;

    collapsedEntries?: Array<unknown>;

    creatorKey?: string;

    lastSavedTimestamp?: number;

    moved?: boolean;

    newsfeedEntryOperation?: string;

    newsfeedEntryScope?: string;

    newsfeedEntrySpecific?: string;

    newsfeedItemKey?: string;

    pipelineKey?: string;

    specificVariables?: NewsfeedRetrieveResponseItem.SpecificVariables;

    storyTextBox?: string;

    storyTextGlobal?: string;

    storyTextPipeline?: string;

    timestamp?: number;
  }

  export namespace NewsfeedRetrieveResponseItem {
    export interface SpecificVariables {
      BOX_NAME?: string;

      PIPELINE_NAME?: string;

      STAGE_KEY?: string;

      STORY_AUTHOR_DISPLAY_NAME?: string;
    }
  }
}

export interface NewsfeedRetrieveParams {
  /**
   * This is similar to the specifics parameter but uses a predetermined set of
   * specifics to filter on. The possible values for this parameter are `ALL` or
   * `CONDENSED`. The `CONDENSED` value limits the results to only certain important
   * specific parameters determined by Streak.
   */
  detailLevel?: string;
}

export declare namespace Newsfeed {
  export {
    type NewsfeedRetrieveResponse as NewsfeedRetrieveResponse,
    type NewsfeedRetrieveParams as NewsfeedRetrieveParams,
  };
}
