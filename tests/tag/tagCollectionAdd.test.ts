import tagCollectionAdd from '@/tag/tagCollectionAdd';

describe('tagCollectionAdd', () => {
  it('should add new tag', () => {
    expect(tagCollectionAdd([{ name: 'tag1', color: '' }])({ tags: [] }))
      .toMatchObject({ tags: [{ name: 'tag1', color: '' }]});
  });

  it('should add unique tag only', () => {
    expect(tagCollectionAdd([{ name: 'tag1', color: '' }])({ tags: [{ name: 'tag1', color: '' }] }))
      .toMatchObject({ tags: [{ name: 'tag1', color: '' }]});
  });

  it('should add more tags', () => {
    expect(tagCollectionAdd([{ name: 'tag1', color: '' }, { name: 'tag2', color: '' }])({ tags: [] }))
      .toMatchObject({ tags: [{ name: 'tag1', color: '' }, { name: 'tag2', color: '' }]});
  });

  it('should return extended object', () => {
    expect(tagCollectionAdd([])({ tags: [], test: 123 }))
      .toMatchObject({ test: 123 });
  });

  it('should be new object', () => {
    const collection = { test: 123, tags: [] };

    expect(tagCollectionAdd([])(collection))
      .not
      .toBe(collection);
  });
});
