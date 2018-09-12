import { assign, clone, isEqual, uniqWith } from 'lodash';
import ITag from './ITag';
import ITagCollection from './ITagCollection';

export default (tags: ITag[]) =>
  <T extends ITagCollection>(collection: T): T =>
    assign(clone(collection), { tags: uniqWith([...collection.tags, ...tags], isEqual) });
