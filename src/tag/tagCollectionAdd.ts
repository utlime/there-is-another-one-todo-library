import ITag from '@/tag/ITag';
import ITagCollection from '@/tag/ITagCollection';
import { assign, clone, isEqual, uniqWith } from 'lodash';

export default (tags: ITag[]) =>
  <T extends ITagCollection>(collection: T): T => (
    assign(clone(collection), { tags: uniqWith([...collection.tags, ...tags], isEqual) })
  );
