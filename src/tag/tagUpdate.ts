import { assign, clone } from 'lodash';
import ITag from './ITag';

interface IFunctionOptions {
  name?: string;
  color?: string;
}

export default (options: IFunctionOptions) =>
  <T extends ITag>(tag?: T): T => (
    assign(clone(tag), options)
  );
