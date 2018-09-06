import tagDefaults from '@/tag/tagDefaults';

describe('todoDefaults', () => {
  it('should be created with task only', () => {
    expect(tagDefaults({ name: 'tag' })())
      .toMatchObject({ name: 'tag', color: '#FFF' });
  });

  it('should be new object', () => {
    const tag = { test: 123 };

    expect(tagDefaults({ name: 'tag' })(tag))
      .not
      .toBe(tag);
  });

  it('should be extended', () => {
    expect(tagDefaults({ name: 'todo' })({ test: 123  }))
      .toMatchObject({ test: 123  });
  });
});
