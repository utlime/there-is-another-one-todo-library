import { assign, clone } from 'lodash';
import ITodo from './ITodo';

interface IFunctionOptions {
  task?: string;
  done?: boolean;
}

export default (options: IFunctionOptions) =>
  <T extends ITodo>(todo?: T): T => (
    assign(clone(todo), options)
  );
