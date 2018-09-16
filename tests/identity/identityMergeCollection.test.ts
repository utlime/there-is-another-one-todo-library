import { collection } from './helpers';
import { identityMergeCollection } from '@/identity';

describe('identityMergeCollection', () => {
  it('should contains all identities', () => {
    expect(identityMergeCollection(collection('1,2'))(collection('3,4'))).toEqual(collection('1,2,3,4'));
  });

  it('should not contains duplicates', () => {
    expect(identityMergeCollection(collection('1,2,3'))(collection('3,4'))).toEqual(collection('1,2,3,4'));
  });
});
