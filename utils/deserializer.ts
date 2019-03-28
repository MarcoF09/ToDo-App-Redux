import { ResponseBackend, Todo } from '../types/globalTypes';

export const deserializer = (toDo: ResponseBackend): Todo => {
  const titleAndDescription = toDo.title != null ? toDo.title.split('|') : [];
  const id = toDo.url.split('/')[3];
  return {
    id,
    title:
      titleAndDescription.length >= 2 ? titleAndDescription[0] : toDo.title,
    description: titleAndDescription.length >= 2 ? titleAndDescription[1] : '',
    completed: toDo.completed,
    url: toDo.url
  };
};
