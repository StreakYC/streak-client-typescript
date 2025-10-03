// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * This call lets you get a specific [file](reference#files).
   */
  retrieve(key: string, options?: RequestOptions): APIPromise<FileRetrieveResponse> {
    return this._client.get(path`/files/${key}`, options);
  }

  /**
   * This call lets you get the binary contents of the [file](reference#files). The
   * mime type of the response contents is based on the file type.
   */
  retrieveContents(key: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/files/${key}/contents`, options);
  }
}

export interface FileRetrieveResponse {
  boxKey?: string;

  creationTimestamp?: number;

  fileKey?: string;

  fileName?: string;

  fileOwner?: string;

  fileType?: string;

  gmailAPIFileId?: string;

  gmailMessageId?: string;

  isCurrentUserOwnerInDrive?: boolean;

  key?: string;

  lastSavedTimestamp?: number;

  lastUpdatedTimestamp?: number;

  mainFileName?: string;

  mimeType?: string;

  size?: string;
}

export type FileRetrieveContentsResponse = unknown;

export declare namespace Files {
  export {
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileRetrieveContentsResponse as FileRetrieveContentsResponse,
  };
}
