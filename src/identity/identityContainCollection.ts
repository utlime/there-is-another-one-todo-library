import { IIdentity } from './IIdentity';
import { identityInCollection } from './identityInCollection';

/**
 * Check if collection is subset of identities
 */
export function identityContainCollection(
  atLeastOne: boolean = true
): (collection: IIdentity[]) => (identities: IIdentity[]) => boolean {
  if (atLeastOne) {
    return collection => identities => identities.some(identityInCollection(collection));
  }

  return collection => identities => collection.filter(identityInCollection(identities)).length === collection.length;
}
