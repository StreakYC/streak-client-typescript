// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Newsfeed extends APIResource {
  /**
   * This endpoint will give you not only the historical changes for a particular
   * [pipeline](reference#getting-a-specific-pipeline), but also the historical
   * changes for all [boxes](reference#get-a-box) contained within the pipeline. It
   * is limited to the 50 most recent events.
   */
  retrieve(
    key: string,
    query: NewsfeedRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NewsfeedRetrieveResponse> {
    return this._client.get(path`/pipelines/${key}/newsfeed`, { query, ...options });
  }

  /**
   * This endpoint will export the historical changes for all boxes contained within
   * a pipeline.
   */
  exportFull(
    key: string,
    params: NewsfeedExportFullParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { includeSpecifics, startTimestamp } = params ?? {};
    return this._client.put(path`/pipelines/${key}/newsfeed/export/full`, {
      query: { includeSpecifics, startTimestamp },
      ...options,
    });
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

export type NewsfeedExportFullResponse = unknown;

export interface NewsfeedRetrieveParams {
  /**
   * This is similar to the specifics parameter but uses a predetermined set of
   * specifics to filter on. The possible values for this parameter are `ALL` or
   * `CONDENSED`. The `CONDENSED` value limits the results to only certain important
   * specific parameters determined by Streak.
   */
  detailLevel?: string;
}

export interface NewsfeedExportFullParams {
  /**
   * Filter events based on newsfeedEntrySpecific, such as `EDIT_STAGE`. Comma
   * separate each value to filter on multiple specific values. For example:
   * `EDIT_STAGE`,`NEW_BOX`
   */
  includeSpecifics?: string;

  /**
   * Unix timestamp in milliseconds to filter for events after the `startTimestamp`
   * (eg 1504213700003)
   */
  startTimestamp?: number;
}

export declare namespace Newsfeed {
  export {
    type NewsfeedRetrieveResponse as NewsfeedRetrieveResponse,
    type NewsfeedExportFullResponse as NewsfeedExportFullResponse,
    type NewsfeedRetrieveParams as NewsfeedRetrieveParams,
    type NewsfeedExportFullParams as NewsfeedExportFullParams,
  };
}
