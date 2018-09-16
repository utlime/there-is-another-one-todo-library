import { identityNotInCollection } from '@/identity';
import { collection } from './helpers';

describe('identityNotInCollection', () => {
  it('should be falsy when identity in collection', () => {
    expect(identityNotInCollection(collection('1,2'))({ id: '1' })).toBeFalsy();
  });

  it('should be truthy when identity not in collection', () => {
    expect(identityNotInCollection(collection('1,2'))({ id: '3' })).toBeTruthy();
  });

  it('should be truthy when collection is empty', () => {
    expect(identityNotInCollection([])({ id: '3' })).toBeTruthy();
  });
});
