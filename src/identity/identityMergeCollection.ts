import { IIdentity } from './IIdentity';
import { identityExcludeCollection } from './identityExcludeCollection';

/**
 * Merge two collections of identities, without duplicates
 */
export function identityMergeCollection(collection1: IIdentity[]): (collection2: IIdentity[]) => IIdentity[] {
  const excludeDuplicates = identityExcludeCollection(collection1);
  return collection2 => collection1.concat(excludeDuplicates(collection2));
}
