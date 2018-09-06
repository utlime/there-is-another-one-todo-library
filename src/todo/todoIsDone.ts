import ITodo from '@/todo/ITodo';

export default (done: boolean) => (todo: ITodo): boolean => todo.done === done;
