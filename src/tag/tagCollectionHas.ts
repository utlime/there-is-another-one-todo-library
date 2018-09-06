import ITag from '@/tag/ITag';
import ITagCollection from '@/tag/ITagCollection';
import { intersectionWith, isEqual } from 'lodash';

export default (atLeastOne: boolean) =>
  (tags: ITag[]) =>
    (collection: ITagCollection): boolean => (
      intersectionWith(collection.tags, tags, isEqual).length >= (atLeastOne ? 1 : tags.length)
    );
