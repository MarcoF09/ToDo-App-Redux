import { ActionsTypes } from "../actions/actionTypes";
import {
  addToDo,
  changeCheckBoxState,
  clearAllDone,
  markAsNotDone,
  markAsDone
} from "../actions/ActionHandlers";

const initialState = {
  todo: [
    {
      id: 1,
      title: "Description",
      description: "Second Description",
      completed: false
    },
    {
      id: 2,
      title: "Description",
      description: "Second Description",
      completed: false
    },
    {
      id: 3,
      title: "Description",
      description: "Second Description",
      completed: false
    },
    {
      id: 4,
      title: "Description",
      description: "Second Description",
      completed: true
    },
    {
      id: 5,
      title: "Description",
      description: "Second Description",
      completed: false
    }
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsTypes.CLEAR_ALL_DONE:
      return clearAllDone(state, action);
    case ActionsTypes.CHANGE_CHECKBOX_STATE:
      return changeCheckBoxState(state, action);
    case ActionsTypes.HANDLE_ADD_DATA:
      return addToDo(state, action);
    case ActionsTypes.HANDLE_MARK_AS_NOT_DONE:
      return markAsNotDone(state, action);
    case ActionsTypes.HANDLE_MARK_AS_DONE:
      return markAsDone(state, action);
    default:
      return state;
  }
}

export default rootReducer;
