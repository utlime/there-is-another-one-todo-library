import { assign, clone, differenceWith, isEqual } from 'lodash';
import ITag from './ITag';
import ITagCollection from './ITagCollection';

export default (tags: ITag[]) =>
  <T extends ITagCollection>(collection: T): T =>
    assign(clone(collection), { tags: differenceWith(collection.tags, tags, isEqual) });
