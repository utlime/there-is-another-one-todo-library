import { IIdentity } from './IIdentity';

/**
 * Check is collection contain identity
 */
export function identityInCollection(collection: IIdentity[]): (identity: IIdentity) => boolean {
  return identity => collection.some(({ id }) => id === identity.id);
}
