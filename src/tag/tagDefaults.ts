import { clone, defaults } from 'lodash'
import ITag from './ITag'

interface IFunctionOptions {
  name: string
  color?: string
}

const defaultTag = {
  color: '#FFF'
}

export default <O extends IFunctionOptions>(options?: O) => <
  T extends object,
  U extends T & O & ITag
>(
  tag?: T
): U => defaults(clone(tag), options, defaultTag) as U
