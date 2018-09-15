import { todoDefaults } from '@/todo';

describe('todoDefaults', () => {
  it('should be created with task only', () => {
    expect(todoDefaults()({ task: 'todo' })).toMatchObject({
      task: 'todo',
      done: false,
    });
  });

  it('should be created with done true', () => {
    expect(todoDefaults({ done: true })({ task: 'todo' })).toMatchObject({
      task: 'todo',
      done: true,
    });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', done: false };

    expect(todoDefaults({})(todo)).not.toBe(todo);
  });
});
