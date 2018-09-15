import { ITodo } from './ITodo';

/**
 * Create new task with default options
 */
export function todoDefaults(
  options: { done?: boolean } = { done: false }
): (todo: { task: string; done?: boolean }) => ITodo {
  return todo => ({
    done: todo.done || options.done || false,
    task: todo.task,
  });
}
