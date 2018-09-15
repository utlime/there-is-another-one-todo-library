import { ITag } from './ITag';

/**
 * Create new tag with option
 */
export function tagUpdate(
  options: {
    name?: string;
    color?: string;
  } = {}
): (tag: ITag) => ITag {
  return tag => ({
    color: options.color || tag.color,
    name: options.name || tag.name,
  });
}
