import { tagDefaults } from '@/tag';

describe('todoDefaults', () => {
  it('should be created with tag name only', () => {
    expect(tagDefaults()({ name: 'tag' })).toMatchObject({
      name: 'tag',
      color: '#FFF',
    });
  });

  it('should be created with tag name only', () => {
    expect(tagDefaults({})({ name: 'tag' })).toMatchObject({
      name: 'tag',
      color: '#FFF',
    });
  });

  it('should be created with default color', () => {
    expect(tagDefaults({ color: '#000' })({ name: 'tag' })).toMatchObject({
      name: 'tag',
      color: '#000',
    });
  });

  it('should not update color', () => {
    expect(tagDefaults({ color: '#F00' })({ name: 'tag', color: '#000' })).toMatchObject({
      name: 'tag',
      color: '#000',
    });
  });
});
