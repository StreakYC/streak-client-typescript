// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * This call will return the public details for the user specified.
   */
  retrieve(userKey: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/users/${userKey}`, options);
  }

  /**
   * Each Streak user has a corresponding user object. Creation of users is done when
   * a user signs up for Streak and these objects can not be altered through the API.
   * Since API keys are associated with the user, each API key only has privileges to
   * access its own user object.
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<UserRetrieveCurrentResponse> {
    return this._client.get('/users/me', options);
  }
}

export interface UserRetrieveResponse {
  creationTimestamp?: number;

  displayName?: string;

  email?: string;

  isOauthComplete?: boolean;

  key?: string;

  lastSeenTimestamp?: number;

  lastUpdatedTimestamp?: number;

  lowercaseEmail?: string;

  userKey?: string;
}

export interface UserRetrieveCurrentResponse {
  creationTimestamp?: number;

  displayName?: string;

  email?: string;

  isOauthComplete?: boolean;

  key?: string;

  lastSeenTimestamp?: number;

  lastUpdatedTimestamp?: number;

  lowercaseEmail?: string;

  userKey?: string;
}

export declare namespace Users {
  export {
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserRetrieveCurrentResponse as UserRetrieveCurrentResponse,
  };
}
