import { ITodo } from './ITodo';

/**
 * Create new task with option
 */
export function todoUpdate(
  options: {
    task?: string;
    done?: boolean;
  } = {}
): (todo: ITodo) => ITodo {
  return todo => ({
    task: options.task || todo.task,
    done: options.done || todo.done,
  });
}
