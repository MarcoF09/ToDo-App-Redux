export const serializer = toDo => {
  return {
    title: toDo.title + "|" + toDo.description,
    order: toDo.title.length,
    completed: toDo.completed
  };
};
