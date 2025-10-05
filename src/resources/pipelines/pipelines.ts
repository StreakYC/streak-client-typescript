// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BoxesAPI from './boxes';
import { Boxes } from './boxes';
import * as FieldsAPI from './fields';
import { Fields } from './fields';
import * as NewsfeedAPI from './newsfeed';
import { Newsfeed } from './newsfeed';
import * as StagesAPI from './stages';
import { Stages } from './stages';

export class Pipelines extends APIResource {
  boxes: BoxesAPI.Boxes = new BoxesAPI.Boxes(this._client);
  stages: StagesAPI.Stages = new StagesAPI.Stages(this._client);
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
  newsfeed: NewsfeedAPI.Newsfeed = new NewsfeedAPI.Newsfeed(this._client);
}

Pipelines.Boxes = Boxes;
Pipelines.Stages = Stages;
Pipelines.Fields = Fields;
Pipelines.Newsfeed = Newsfeed;

export declare namespace Pipelines {
  export { Boxes as Boxes };

  export { Stages as Stages };

  export { Fields as Fields };

  export { Newsfeed as Newsfeed };
}
