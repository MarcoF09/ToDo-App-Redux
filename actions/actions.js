import { ActionsTypes } from "./actionTypes";

const clearAllDone = () => ({
  type: ActionsTypes.CLEAR_ALL_DONE
});

const changeCheckBoxState = index => ({
  payload: { index: index },
  type: ActionsTypes.CHANGE_CHECKBOX_STATE
});

const addToDo = (title, description) => ({
  payload: {
    title: title,
    description: description
  },
  type: ActionsTypes.HANDLE_ADD_DATA
});

const markAsNotDone = index => ({
  payload: {
    index: index
  },
  type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE
});

const markAsDone = index => ({
  payload: {
    index: index
  },
  type: ActionsTypes.HANDLE_MARK_AS_DONE
});

export const Actions = {
  clearAllDone,
  changeCheckBoxState,
  addToDo,
  markAsNotDone,
  markAsDone
};
