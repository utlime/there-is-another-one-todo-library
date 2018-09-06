import ITodo from '@/todo/ITodo';
import { assign, clone } from 'lodash';

interface IFunctionOptions {
  task?: string;
  done?: boolean;
}

export default (options: IFunctionOptions) =>
  <T extends ITodo>(todo?: T): T => (
    assign(clone(todo), options)
  );
