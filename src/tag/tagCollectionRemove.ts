import ITag from '@/tag/ITag';
import ITagCollection from '@/tag/ITagCollection';
import { assign, clone, differenceWith, isEqual } from 'lodash';

export default (tags: ITag[]) =>
  <T extends ITagCollection>(collection: T): T => (
    assign(clone(collection), { tags: differenceWith(collection.tags, tags, isEqual) })
  );
