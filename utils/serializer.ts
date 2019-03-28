import { ResponseBackend, Todo } from '../types/globalTypes';

export const serializer = (toDo: Todo) => {
  return {
    title: `${toDo.title}|${toDo.description}`,
    order: toDo.title.length,
    completed: toDo.completed,
    url: toDo.url
  };
};
