// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * User management operations
 */
export class Users extends APIResource {
  /**
   * Returns information about the currently authenticated user
   */
  getMe(options?: RequestOptions): APIPromise<User> {
    return this._client.get('/users/me', options);
  }
}

export interface User {
  archiveKeysetFileLink?: string | null;

  automaticallySendInvoiceEmails?: boolean | null;

  canceledTrial?: boolean | null;

  /**
   * Epoch timestamp in milliseconds since 1970-01-01T00:00:00Z.
   */
  creationTimestamp?: number | null;

  customerSpecifiedInvoiceData?: string | null;

  displayName?: string | null;

  email?: string | null;

  emailsToSendInvoiceTo?: Array<string> | null;

  experiments?: { [key: string]: unknown } | null;

  externalSharingRestrictionOnTeamsPipelines?: boolean | null;

  firstExtension?: string | null;

  /**
   * Epoch timestamp in milliseconds since 1970-01-01T00:00:00Z.
   */
  firstOauthTimestamp?: number | null;

  googleAnalyticsClientId?: string | null;

  googleDriveId?: string | null;

  googleProfileFirstName?: string | null;

  googleProfileFullName?: string | null;

  googleProfileGender?: string | null;

  googleProfileId?: string | null;

  googleProfileLastName?: string | null;

  googleProfileLink?: string | null;

  googleProfileLocale?: string | null;

  googleProfilePhotoUrl?: string | null;

  hasCancellationDiscount?: boolean | null;

  integrationSegment?: number | null;

  intercomHmac?: string | null;

  intercomJwt?: string | null;

  isOauthComplete?: boolean;

  key?: string | null;

  /**
   * Epoch timestamp in milliseconds since 1970-01-01T00:00:00Z.
   */
  lastProPlusTrialStart?: number | null;

  /**
   * Epoch timestamp in milliseconds since 1970-01-01T00:00:00Z.
   */
  lastSavedTimestamp?: number | null;

  /**
   * Epoch timestamp in milliseconds since 1970-01-01T00:00:00Z.
   */
  lastSeenTimestamp?: number | null;

  lastTrialLength?: number;

  /**
   * Epoch timestamp in milliseconds since 1970-01-01T00:00:00Z.
   */
  lastTrialStart?: number | null;

  /**
   * Epoch timestamp in milliseconds since 1970-01-01T00:00:00Z.
   */
  lastUpdatedTimestamp?: number | null;

  onTrialWithoutCreditCard?: boolean | null;

  orgKey?: string | null;

  phoneNumber?: string | null;

  securityReportOnTeamsPipelines?: boolean | null;

  streakCalendarId?: string | null;

  timezoneId?: string | null;

  tourId?: string | null;

  usedPlatforms?: Array<User.UsedPlatform> | null;

  userId?: number | null;

  userKey?: string | null;

  userSettingsKey?: string | null;

  userSource?:
    | 'UNKNOWN'
    | 'WEB'
    | 'MOBILE'
    | 'SHARING'
    | 'GOOGLE_APPS_MARKETPLACE'
    | 'ANDROID'
    | 'GMAIL_ADDON'
    | 'WEB_MAIL_MERGE'
    | 'WEB_STREAK_SHARE'
    | 'WEB_EMAIL_TRACKING'
    | null;

  userType?: 'HUMAN' | 'AGENT' | null;

  wantsTaskDigestEmail?: boolean | null;
}

export namespace User {
  export interface UsedPlatform {
    /**
     * Epoch timestamp in milliseconds since 1970-01-01T00:00:00Z.
     */
    firstDateOfUse: number;

    /**
     * Epoch timestamp in milliseconds since 1970-01-01T00:00:00Z.
     */
    lastDateOfUse: number;

    platform:
      | 'WEB'
      | 'IOS'
      | 'IOS_IN_HOUSE'
      | 'ANDROID'
      | 'ZAPIER'
      | 'STRIPE'
      | 'API'
      | 'SHEETS'
      | 'GOOGLE_IMAGE_PROXY'
      | 'GOOGLE_WEBHOOK'
      | 'TASK_QUEUE'
      | 'CLEARBIT'
      | 'HANGOUTS_CHAT'
      | 'UNKNOWN'
      | 'GMAIL_ADDON_IOS'
      | 'GMAIL_ADDON_ANDROID'
      | 'GMAIL_ADDON_WEB'
      | 'SLACK'
      | 'MCP'
      | 'RETOOL';
  }
}

export declare namespace Users {
  export { type User as User };
}
