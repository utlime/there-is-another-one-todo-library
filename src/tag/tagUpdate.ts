import ITag from '@/tag/ITag';
import { assign, clone } from 'lodash';

interface IFunctionOptions {
  name?: string;
  color?: string;
}

export default (options: IFunctionOptions) =>
  <T extends ITag>(tag?: T): T => (
    assign(clone(tag), options)
  );
