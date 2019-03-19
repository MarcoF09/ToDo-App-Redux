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
    todo: state.todo.map((item, index) => {
      if (index === action.payload.index) {
        return Object.assign({}, item, {
          completed: !item.completed
        });
      }
      return item;
    })
  });
};

export const clearAllDone = (state, action) => {
  return Object.assign({}, state, {
    todo: state.todo.map((item, index) => {
      return Object.assign({}, item, {
        completed: false
      });
    })
  });
};

export const markAsNotDone = (state, action) => {
  return Object.assign({}, state, {
    todo: state.todo.map((item, index) => {
      if (index === action.payload.index) {
        return Object.assign({}, item, {
          completed: false
        });
      }
      return item;
    })
  });
};

export const markAsDone = (state, action) => {
  return Object.assign({}, state, {
    todo: state.todo.map((item, index) => {
      if (index === action.payload.index) {
        return Object.assign({}, item, {
          completed: true
        });
      }
      return item;
    })
  });
};
