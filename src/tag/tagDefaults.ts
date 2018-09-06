import ITag from '@/tag/ITag';
import { clone, defaults } from 'lodash';

interface IFunctionOptions {
  name: string;
  color?: string;
}

const defaultTodo = {
  color: '#FFF',
};

export default <O extends IFunctionOptions>(options?: O) =>
  <T extends object, U extends T & O & ITag>(tag?: T): U => (
    defaults(clone(tag), options, defaultTodo) as U
  );
