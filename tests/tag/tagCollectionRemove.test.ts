import tagCollectionRemove from '@/tag/tagCollectionRemove';

describe('tagCollectionRemove', () => {
  it('should remove tag', () => {
    expect(tagCollectionRemove([{ name: 'tag1', color: '' }])({ tags: [{ name: 'tag1', color: '' }] }))
      .toMatchObject({ tags: []});
  });

  it('should not remove if is not matched', () => {
    expect(tagCollectionRemove([{ name: 'tag2', color: '' }])({ tags: [{ name: 'tag1', color: '' }] }))
      .toMatchObject({ tags: [{ name: 'tag1', color: '' }]});
  });

  it('should be extended', () => {
    expect(tagCollectionRemove([])({ tags: [], test: 123 }))
      .toMatchObject({ test: 123 });
  });

  it('should be new object', () => {
    const collection = { test: 123, tags: [] };

    expect(tagCollectionRemove([])(collection))
      .not
      .toBe(collection);
  });
});
