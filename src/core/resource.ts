// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Streak } from '../client';

export abstract class APIResource {
  protected _client: Streak;

  constructor(client: Streak) {
    this._client = client;
  }
}
