import { IIdentity } from './IIdentity';
import { identityNotInCollection } from './identityNotInCollection';

/**
 * Return sub collection from collection2, exclude identities from collection1
 */
export function identityExcludeCollection(collection1: IIdentity[]): (collection2: IIdentity[]) => IIdentity[] {
  const exclude = identityNotInCollection(collection1);
  return collection2 => collection2.filter(exclude);
}
