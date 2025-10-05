// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FieldsAPI from './fields';
import { Fields } from './fields';

export class Boxes extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
}

Boxes.Fields = Fields;

export declare namespace Boxes {
  export { Fields as Fields };
}
