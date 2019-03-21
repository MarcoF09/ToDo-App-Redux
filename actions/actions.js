import { ActionsTypes } from "./actionTypes";
import {
  getData,
  putData,
  deleteData,
  updateData
} from "../networking/controllers/homeController";
import { serializer } from "../utils/serializer";
import { deserializer } from "../utils/deserializer";

const clearAllDone = todos => {
  return async dispatch => {
    try {
      const todosNotDone = await todos.map((element, index) => {
        let item = Object.assign({}, element, {
          completed: false
        });
        updateData(serializer(item), element.id);
        return item;
      });
      dispatch(clearAllDoneSuccess(todosNotDone));
    } catch (error) {
      dispatch(clearAllDoneFail());
    }
  };
};

const clearAllDoneSuccess = todos => ({
  payload: {
    todo: todos
  },
  type: ActionsTypes.CLEAR_ALL_DONE_SUCCESS
});

const clearAllDoneFail = () => ({
  type: ActionsTypes.CLEAR_ALL_DONE_FAIL
});

const changeCheckBoxState = (todos, index) => {
  return async dispatch => {
    try {
      const todosWithChange = todos.map((item, indx) => {
        if (indx === index) {
          item.completed = !item.completed;
        }
        return item;
      });
      await updateData(
        serializer(todosWithChange[index]),
        todosWithChange[index].id
      );
      dispatch(changeCheckBoxStateSuccess(todosWithChange));
    } catch (error) {
      dispatch(changeCheckBoxStateFail());
    }
  };
};

const changeCheckBoxStateSuccess = todos => ({
  payload: { todo: todos },
  type: ActionsTypes.CHANGE_CHECKBOX_STATE_SUCCESS
});

const changeCheckBoxStateFail = () => ({
  type: ActionsTypes.CHANGE_CHECKBOX_STATE_FAIL
});

const addToDo = (title, description) => {
  return async dispatch => {
    try {
      await putData(
        serializer({
          title: title,
          description: description,
          completed: false
        })
      );
      dispatch(addToDoSuccess(title, description));
    } catch (error) {
      dispatch(addToDoFail());
    }
  };
};

const addToDoSuccess = (title, description) => ({
  payload: {
    title: title,
    description: description
  },
  type: ActionsTypes.HANDLE_ADD_DATA_SUCCESS
});

const addToDoFail = () => ({
  type: ActionsTypes.HANDLE_ADD_DATA_FAIL
});

const markAsNotDone = (todos, index) => {
  return async dispatch => {
    try {
      const todosWithChange = todos.map((item, indx) => {
        if (indx === index) {
          item.completed = false;
        }
        return item;
      });
      await updateData(
        serializer(todosWithChange[index]),
        todosWithChange[index].id
      );
      dispatch(markAsNotDoneSuccess(todosWithChange));
    } catch (error) {
      dispatch(markAsNotDoneFail());
    }
  };
};

const markAsNotDoneSuccess = todos => ({
  payload: {
    todo: todos
  },
  type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_SUCCESS
});

const markAsNotDoneFail = () => ({
  type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_FAIL
});

const markAsDone = (todos, index) => {
  return async dispatch => {
    try {
      const todosWithChange = todos.map((item, indx) => {
        if (indx === index) {
          item.completed = true;
        }
        return item;
      });
      await updateData(
        serializer(todosWithChange[index]),
        todosWithChange[index].id
      );
      dispatch(markAsDoneSuccess(todosWithChange));
    } catch (error) {
      dispatch(markAsDoneFail());
    }
  };
};

const markAsDoneSuccess = todos => ({
  payload: {
    todo: todos
  },
  type: ActionsTypes.HANDLE_MARK_AS_DONE_SUCCESS
});

const markAsDoneFail = () => ({
  type: ActionsTypes.HANDLE_MARK_AS_DONE_FAIL
});

const getToDoData = () => {
  return async dispatch => {
    try {
      let response = await getData();
      let deserializedData = Object.keys(response.data).reduce(
        (result, key) => {
          let item = response.data[key];
          result.push(deserializer(item));
          return result;
        },
        []
      );
      dispatch(getToDoSuccess(deserializedData));
    } catch (error) {
      dispatch(getToDoFail(error.message));
    }
  };
};

const getToDoSuccess = res => ({
  payload: {
    todo: res
  },
  type: ActionsTypes.GET_TO_DO_DATA_SUCCESS
});

const getToDoFail = () => ({
  payload: {},
  type: ActionsTypes.GET_TO_DO_DATA_SUCCESS
});

export const Actions = {
  clearAllDone,
  changeCheckBoxState,
  addToDo,
  markAsNotDone,
  markAsDone,
  getToDoData
};
