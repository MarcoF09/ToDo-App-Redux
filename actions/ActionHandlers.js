export const addToDo = (state, action) => {
  return Object.assign({}, state, {
    todo: [
      ...state.todo,
      {
        id: state.todo.length + 1,
        title: action.payload.title,
        description: action.payload.description,
        completed: false
      }
    ]
  });
};

export const changeCheckBoxState = (state, action) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};

export const clearAllDone = (state, action) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};

export const markAsNotDone = (state, action) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};

export const markAsDone = (state, action) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};

export const getReturnedToDoData = (state, action) => {
  return Object.assign({}, state, {
    todo: [...action.payload.todo]
  });
};

export const deleteItem = (state, action) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};
