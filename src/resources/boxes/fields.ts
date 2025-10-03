// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Fields extends APIResource {
  /**
   * This call gets a specific [field](reference#get-a-field) value for the
   * [box](reference#get-a-box) specified.
   */
  retrieve(
    fieldKey: string,
    params: FieldRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FieldRetrieveResponse> {
    const { boxKey } = params;
    return this._client.get(path`/boxes/${boxKey}/fields/${fieldKey}`, options);
  }

  /**
   * This call lets you edit the value of a [field](reference#get-a-field) for a
   * particular [box](reference#get-a-box).
   */
  update(
    fieldKey: string,
    params: FieldUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FieldUpdateResponse> {
    const { boxKey, ...body } = params;
    return this._client.post(path`/boxes/${boxKey}/fields/${fieldKey}`, { body, ...options });
  }

  /**
   * This call lists the field values for the [box](reference#get-a-box) specified.
   */
  list(boxKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/boxes/${boxKey}/fields`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FieldRetrieveResponse {
  key?: string;

  value?: number;
}

export interface FieldUpdateResponse {
  key?: string;

  value?: number;
}

export interface FieldRetrieveParams {
  /**
   * The key of the box
   */
  boxKey: string;
}

export interface FieldUpdateParams {
  /**
   * Path param: The key of the box
   */
  boxKey: string;

  /**
   * Body param: The new value for the field
   */
  value?: string;
}

export declare namespace Fields {
  export {
    type FieldRetrieveResponse as FieldRetrieveResponse,
    type FieldUpdateResponse as FieldUpdateResponse,
    type FieldRetrieveParams as FieldRetrieveParams,
    type FieldUpdateParams as FieldUpdateParams,
  };
}
