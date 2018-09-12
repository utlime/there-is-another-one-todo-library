import { intersectionWith, isEqual } from 'lodash';
import ITag from './ITag';
import ITagCollection from './ITagCollection';

export default (atLeastOne: boolean) =>
  (tags: ITag[]) =>
    (collection: ITagCollection): boolean =>
      intersectionWith(collection.tags, tags, isEqual).length >= (atLeastOne ? 1 : tags.length);
