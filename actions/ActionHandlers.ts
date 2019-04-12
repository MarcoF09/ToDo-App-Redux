import {
  AddToDoSuccessAction,
  ChangeCheckBoxStateActionSuccessAction,
  ClearAllDoneSucessAction,
  DeleteItemSuccess,
  GetToDoDataSuccess,
  MarkAsDoneSuccessAction,
  MarkAsNotDoneSuccessAction
} from '../types';
import { State } from '../types/globalTypes';

export const addToDo = (state: State, action: AddToDoSuccessAction) => {
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

export const changeCheckBoxState = (
  state: State,
  action: ChangeCheckBoxStateActionSuccessAction
) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};

export const clearAllDone = (
  state: State,
  action: ClearAllDoneSucessAction
) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};

export const markAsNotDone = (
  state: State,
  action: MarkAsNotDoneSuccessAction
) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};

export const markAsDone = (state: State, action: MarkAsDoneSuccessAction) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};

export const getReturnedToDoData = (
  state: State,
  action: GetToDoDataSuccess
) => {
  return Object.assign({}, state, {
    todo: [...action.payload.todo]
  });
};

export const deleteItem = (state: State, action: DeleteItemSuccess) => {
  return Object.assign({}, state, {
    todo: action.payload.todo
  });
};
