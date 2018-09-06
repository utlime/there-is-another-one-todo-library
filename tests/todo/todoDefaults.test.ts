import todoDefaults from '@/todo/todoDefaults';

describe('todoDefaults', () => {
  it('should be created with task only', () => {
    expect(todoDefaults({ task: 'todo' })())
      .toMatchObject({ task: 'todo', done: false });
  });

  it('should be new object', () => {
    const todo = { test: 123, task: 'todo', done: false };

    expect(todoDefaults({ task: 'todo' })(todo))
      .not
      .toBe(todo);
  });

  it('should be extended', () => {
    expect(todoDefaults({ task: 'todo' })({ test: 123  }))
      .toMatchObject({ test: 123  });
  });
});
