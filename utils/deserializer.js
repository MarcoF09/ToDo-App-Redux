export const deserializer = toDo => {
  let titleAndDescription = toDo.title != null ? toDo.title.split("|") : [];
  let id = toDo.url.split("/")[3];
  return {
    id: id,
    title:
      titleAndDescription.length >= 2 ? titleAndDescription[0] : toDo.title,
    description: titleAndDescription.length >= 2 ? titleAndDescription[1] : "",
    completed: toDo.completed
  };
};
