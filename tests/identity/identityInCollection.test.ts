import { identityInCollection } from '@/identity';
import { collection } from './helpers';

describe('identityInCollection', () => {
  it('should be truthy when identity in collection', () => {
    expect(identityInCollection(collection('1,2'))({ id: '1' })).toBeTruthy();
  });

  it('should be falsy when identity not in collection', () => {
    expect(identityInCollection(collection('1,2'))({ id: '3' })).toBeFalsy();
  });

  it('should be falsy when collection is empty', () => {
    expect(identityInCollection([])({ id: '3' })).toBeFalsy();
  });
});
