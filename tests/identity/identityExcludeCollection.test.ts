import { collection } from './helpers';
import { identityExcludeCollection } from '@/identity';

describe('identityExcludeCollection', () => {
  it('should not contains collection', () => {
    expect(identityExcludeCollection(collection('3,4'))(collection('1,2,3,4'))).toEqual(collection('1,2'));
  });

  it('should not change if no intersections', () => {
    expect(identityExcludeCollection(collection('5,6'))(collection('1,2,3,4'))).toEqual(collection('1,2,3,4'));
  });
});
