// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Fields extends APIResource {
  /**
   * This call lets you get a specific field defined in a
   * [pipeline](reference#getting-a-specific-pipeline).
   */
  retrieve(
    fieldKey: string,
    params: FieldRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FieldRetrieveResponse> {
    const { pipelineKey } = params;
    return this._client.get(path`/pipelines/${pipelineKey}/fields/${fieldKey}`, options);
  }

  /**
   * This call lets you edit the `name` of a field. Note that editing the `type` of a
   * field is not currently permitted and will give you the error
   * `Can't change the type of a field`. See
   * [here](reference#list-all-fields-in-a-pipeline) for more information on field
   * types.
   */
  update(
    fieldKey: string,
    params: FieldUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FieldUpdateResponse> {
    const { pipelineKey, ...body } = params;
    return this._client.post(path`/pipelines/${pipelineKey}/fields/${fieldKey}`, { body, ...options });
  }

  /**
   * Fields allow users to define custom schema on their
   * [boxes](reference#get-a-box).
   *
   * That is, a field is user defined metadata on a box. In the web UI of Streak, a
   * field shows up as an additional column in the pipeline view and box views.
   * Fields are defined on a per [pipeline](reference#getting-a-specific-pipeline)
   * basis. This means that all boxes in the same pipeline have the same custom
   * fields (schema).
   *
   * Fields have a `name` and a `type`. The type can be any of: `TEXT_INPUT`, `DATE`,
   * `TAG`, `FORMULA`, `DROPDOWN`, `CHECKBOX`, or `TEAM_CONTACT'.
   *
   * This call lists the fields defined in a pipeline. Remember, this is only the
   * definition of the fields - to change the value of the field for a specific box,
   * use the [edit field for box](reference#update-field-value-for-a-box) endpoint.
   */
  list(pipelineKey: string, options?: RequestOptions): APIPromise<FieldListResponse> {
    return this._client.get(path`/pipelines/${pipelineKey}/fields`, options);
  }

  /**
   * This call lets you delete a field defined in a
   * [pipeline](reference#getting-a-specific-pipeline). Note: this will also remove
   * the values of this field for every [box](reference#get-a-box) in the pipeline.
   */
  delete(
    fieldKey: string,
    params: FieldDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FieldDeleteResponse> {
    const { pipelineKey } = params;
    return this._client.delete(path`/pipelines/${pipelineKey}/fields/${fieldKey}`, options);
  }
}

export interface FieldRetrieveResponse {
  key?: string;

  name?: string;

  type?: string;
}

export interface FieldUpdateResponse {
  key?: string;

  name?: string;

  type?: string;
}

export type FieldListResponse = Array<FieldListResponse.FieldListResponseItem>;

export namespace FieldListResponse {
  export interface FieldListResponseItem {
    key?: string;

    lastUpdatedTimestamp?: number;

    name?: string;

    type?: string;
  }
}

export interface FieldDeleteResponse {
  success?: boolean;
}

export interface FieldRetrieveParams {
  /**
   * The key of the pipeline
   */
  pipelineKey: string;
}

export interface FieldUpdateParams {
  /**
   * Path param: The key of the pipeline
   */
  pipelineKey: string;

  /**
   * Body param: The new name of the field
   */
  name: string;
}

export interface FieldDeleteParams {
  /**
   * The key of the pipeline
   */
  pipelineKey: string;
}

export declare namespace Fields {
  export {
    type FieldRetrieveResponse as FieldRetrieveResponse,
    type FieldUpdateResponse as FieldUpdateResponse,
    type FieldListResponse as FieldListResponse,
    type FieldDeleteResponse as FieldDeleteResponse,
    type FieldRetrieveParams as FieldRetrieveParams,
    type FieldUpdateParams as FieldUpdateParams,
    type FieldDeleteParams as FieldDeleteParams,
  };
}
