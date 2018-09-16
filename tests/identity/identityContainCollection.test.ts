import { identityContainCollection, IIdentity } from '@/identity';
import { collection } from './helpers';

describe('identityContainCollection', () => {
  it('should be truthy when at least one in collection by default', () => {
    expect(identityContainCollection()(collection('1,2,3'))(collection('1,4')));
  });

  it('should be truthy when at least one in collection', () => {
    expect(identityContainCollection(true)(collection('1,2,3'))(collection('1,4')));
  });

  it('should be falsy when at least one not in collection', () => {
    expect(identityContainCollection(true)(collection('1,2,3'))(collection('4,5')));
  });

  it('should be truthy when all in collection', () => {
    expect(identityContainCollection(false)(collection('1,2,3'))(collection('1,2,3,4,5')));
  });

  it('should be falsy when not all in collection', () => {
    expect(identityContainCollection(false)(collection('1,2,3'))(collection('1,3,4,5')));
  });
});
