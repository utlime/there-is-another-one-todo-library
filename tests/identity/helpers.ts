import { IIdentity } from '@/identity';

export function collection(ids: string): IIdentity[] {
  return ids.split(',').map(id => ({ id }));
}
