import { ITodo } from './ITodo';

/**
 * Return boolean value if task status is equal to done
 */
export function todoIsDone(done: boolean): (todo: ITodo) => boolean {
  return todo => todo.done === done;
}
