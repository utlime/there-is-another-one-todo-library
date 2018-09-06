import todoUpdate from '@/todo/todoUpdate';

describe('todoUpdate', () => {
  it('should update task field', () => {
    expect(todoUpdate({ task: 'todo2' })({ task: 'todo', done: false }))
      .toMatchObject({ task: 'todo2' });
  });

  it('should update done field', () => {
    expect(todoUpdate({ done: true })({ task: 'todo', done: false }))
      .toMatchObject({ done: true });
  });

  it('should update only provided field', () => {
    expect(todoUpdate({ done: true })({ task: 'todo', done: false }))
      .toMatchObject({ task: 'todo', done: true });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', done: false };

    expect(todoUpdate({ task: 'todo' })(todo))
      .not
      .toBe(todo);
  });
});
