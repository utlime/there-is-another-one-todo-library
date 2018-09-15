import { ITag } from './ITag';

/**
 * Create new tag with default options
 */
export function tagDefaults(
  options: {
    color?: string;
  } = { color: '#FFF' }
): (tag: { name: string; color?: string }) => ITag {
  return tag => ({
    color: tag.color || options.color || '#FFF',
    name: tag.name,
  });
}
