import todoIsDone from '@/todo/todoIsDone';

describe('FTodoIsDone', () => {
  it('should be truthy if task is done', () => {
    expect(todoIsDone(false)({ task: 'todo', done: false }))
      .toBeTruthy();
  });

  it('should be falsy if task is not done', () => {
    expect(todoIsDone(true)({ task: 'todo', done: false }))
      .toBeFalsy();
  });

  it('should be truthy if task is done', () => {
    expect(todoIsDone(true)({ task: 'todo', done: true }))
      .toBeTruthy();
  });

  it('should be falsy if task is not done', () => {
    expect(todoIsDone(false)({ task: 'todo', done: true }))
      .toBeFalsy();
  });
});
