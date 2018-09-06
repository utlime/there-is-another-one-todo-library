import tagUpdate from '@/tag/tagUpdate';

describe('tagUpdate', () => {
  it('should update name field', () => {
    expect(tagUpdate({ name: 'tag2' })({ name: 'tag', color: '' }))
      .toMatchObject({ name: 'tag2' });
  });

  it('should update color field', () => {
    expect(tagUpdate({ color: 'true' })({ name: 'tag', color: 'false' }))
      .toMatchObject({ color: 'true' });
  });

  it('should update only provided field', () => {
    expect(tagUpdate({ color: 'true' })({ name: 'tag', color: 'false' }))
      .toMatchObject({ color: 'true', name: 'tag' });
  });

  it('should be new object', () => {
    const tag = { name: 'tag', color: '' };

    expect(tagUpdate({ name: 'tag' })(tag))
      .not
      .toBe(tag);
  });
});
