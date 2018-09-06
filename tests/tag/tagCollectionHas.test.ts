import tagCollectionHas from '@/tag/tagCollectionHas';

describe('tagCollectionRemove', () => {
  it('should be truthy if match at least one', () => {
    expect(tagCollectionHas(true)([{ name: 'tag1', color: '' }])({ tags: [{ name: 'tag1', color: '' }] }))
      .toBeTruthy();
  });

  it('should be falsy if is not match at least one', () => {
    expect(tagCollectionHas(true)([{ name: 'tag2', color: '' }])({ tags: [{ name: 'tag1', color: '' }] }))
      .toBeFalsy();
  });

  it('should be truthy if match all', () => {
    expect(
      tagCollectionHas(false)
      ([{ name: 'tag1', color: '' }, { name: 'tag2', color: '' }])
      ({ tags: [{ name: 'tag1', color: '' }, { name: 'tag2', color: '' }] }),
    ).toBeTruthy();
  });

  it('should be falsy if is not match all', () => {
    expect(
      tagCollectionHas(false)
      ([{ name: 'tag3', color: '' }, { name: 'tag2', color: '' }])
      ({ tags: [{ name: 'tag1', color: '' }, { name: 'tag2', color: '' }] }),
    ).toBeFalsy();
  });
});
