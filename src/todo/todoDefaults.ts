import { clone, defaults } from 'lodash';
import ITodo from './ITodo';

interface IFunctionOptions {
  task: string;
  done?: boolean;
}

const defaultTodo = {
  done: false
};

export default (options?: IFunctionOptions) =>
  <T extends object, U extends T & ITodo>(todo?: T): U =>
    defaults(clone(todo), options, defaultTodo) as U;
