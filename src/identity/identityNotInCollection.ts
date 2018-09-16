import { IIdentity } from './IIdentity';

/**
 * Check is collection not contain identity
 */
export function identityNotInCollection(collection: IIdentity[]): (identity: IIdentity) => boolean {
  return identity => !collection.some(({ id }) => id === identity.id);
}
