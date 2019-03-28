import { ActionCreator, Dispatch } from 'redux';
import {
  deleteData,
  getData,
  putData,
  updateData
} from '../networking/controllers/homeController';
import { ResponseBackend, Todo } from '../types/globalTypes';
import {
  AddToDoFailAction,
  AddToDoSuccessAction,
  ChangeCheckBoxStateActionFailAction,
  ChangeCheckBoxStateActionSuccessAction,
  ClearAllDoneFailAction,
  ClearAllDoneSucessAction,
  DeleteItemFail,
  DeleteItemSuccess,
  GetToDoDataFail,
  GetToDoDataSuccess,
  MarkAsDoneFailAction,
  MarkAsDoneSuccessAction,
  MarkAsNotDoneFailAction,
  MarkAsNotDoneSuccessAction
} from '../types/types';
import { deserializer } from '../utils/deserializer';
import { serializer } from '../utils/serializer';
import { ActionsTypes } from './actionTypes';

const clearAllDone = (todos: Todo[]) => {
  return async (dispatch: Dispatch) => {
    try {
      const todosNotDone: Todo[] = await todos.map(
        (element: Todo, index: number) => {
          const item: Todo = Object.assign({}, element, {
            completed: false
          });
          if (element.id !== undefined) {
            updateData(serializer(item), element.id);
          }
          return item;
        }
      );
      dispatch(clearAllDoneSuccess(todosNotDone));
    } catch (error) {
      dispatch(clearAllDoneFail());
    }
  };
};

const clearAllDoneSuccess: ActionCreator<ClearAllDoneSucessAction> = (
  todos: Todo[]
) => ({
  payload: {
    todo: todos
  },
  type: ActionsTypes.CLEAR_ALL_DONE_SUCCESS
});

const clearAllDoneFail: ActionCreator<ClearAllDoneFailAction> = () => ({
  type: ActionsTypes.CLEAR_ALL_DONE_FAIL
});

const changeCheckBoxState = (todos: Todo[], index: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const todosWithChange = todos.map((item: Todo, indx: number) => {
        if (indx === index) {
          item.completed = !item.completed;
        }
        return item;
      });
      const identifier: string | undefined = todosWithChange[index].id;
      if (identifier !== undefined) {
        await updateData(serializer(todosWithChange[index]), identifier);
      }
      dispatch(changeCheckBoxStateSuccess(todosWithChange));
    } catch (error) {
      dispatch(changeCheckBoxStateFail());
    }
  };
};

const changeCheckBoxStateSuccess: ActionCreator<
  ChangeCheckBoxStateActionSuccessAction
> = (todos: Todo[]) => ({
  payload: { todo: todos },
  type: ActionsTypes.CHANGE_CHECKBOX_STATE_SUCCESS
});

const changeCheckBoxStateFail: ActionCreator<
  ChangeCheckBoxStateActionFailAction
> = () => ({
  type: ActionsTypes.CHANGE_CHECKBOX_STATE_FAIL
});

const addToDo = (title: string, description: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const todo: Todo = {
        title,
        description,
        completed: false,
        url: ''
      };
      await putData(serializer(todo));
      dispatch(addToDoSuccess(title, description));
    } catch (error) {
      dispatch(addToDoFail());
    }
  };
};

const addToDoSuccess: ActionCreator<AddToDoSuccessAction> = (
  title: string,
  description: string
) => ({
  payload: {
    title,
    description
  },
  type: ActionsTypes.HANDLE_ADD_DATA_SUCCESS
});

const addToDoFail: ActionCreator<AddToDoFailAction> = () => ({
  type: ActionsTypes.HANDLE_ADD_DATA_FAIL
});

const markAsNotDone = (todos: Todo[], index: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const todosWithChange: Todo[] = todos.map((item: Todo, indx: number) => {
        if (indx === index) {
          item.completed = false;
        }
        return item;
      });
      const identifier: string | undefined = todosWithChange[index].id;
      if (identifier !== undefined) {
        await updateData(serializer(todosWithChange[index]), identifier);
      }
      dispatch(markAsNotDoneSuccess(todosWithChange));
    } catch (error) {
      dispatch(markAsNotDoneFail());
    }
  };
};

const markAsNotDoneSuccess: ActionCreator<MarkAsNotDoneSuccessAction> = (
  todos: Todo[]
) => ({
  payload: {
    todo: todos
  },
  type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_SUCCESS
});

const markAsNotDoneFail: ActionCreator<MarkAsNotDoneFailAction> = () => ({
  type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_FAIL
});

const markAsDone = (todos: Todo[], index: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const todosWithChange: Todo[] = todos.map((item: Todo, indx: number) => {
        if (indx === index) {
          item.completed = true;
        }
        return item;
      });
      const identifier: string | undefined = todosWithChange[index].id;
      if (identifier !== undefined) {
        await updateData(serializer(todosWithChange[index]), identifier);
      }
      dispatch(markAsDoneSuccess(todosWithChange));
    } catch (error) {
      dispatch(markAsDoneFail());
    }
  };
};

const markAsDoneSuccess: ActionCreator<MarkAsDoneSuccessAction> = (
  todos: Todo[]
) => ({
  payload: {
    todo: todos
  },
  type: ActionsTypes.HANDLE_MARK_AS_DONE_SUCCESS
});

const markAsDoneFail: ActionCreator<MarkAsDoneFailAction> = () => ({
  type: ActionsTypes.HANDLE_MARK_AS_DONE_FAIL
});

const getToDoData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await getData();
      const deserializedData = Object.keys(response.data).reduce(
        (result: Todo[], key: string) => {
          const item: ResponseBackend = response.data[key];
          result.push(deserializer(item));
          return result;
        },
        []
      );
      dispatch(getToDoSuccess(deserializedData));
    } catch (error) {
      dispatch(getToDoFail());
    }
  };
};

const getToDoSuccess: ActionCreator<GetToDoDataSuccess> = (res: Todo[]) => ({
  payload: {
    todo: res
  },
  type: ActionsTypes.GET_TO_DO_DATA_SUCCESS
});

const getToDoFail: ActionCreator<GetToDoDataFail> = () => ({
  payload: {},
  type: ActionsTypes.GET_TO_DO_DATA_FAIL
});

const deleteItem = (todos: Todo[], index: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const item: Todo = todos[index];
      const identifier: string | undefined = item.id;
      if (identifier !== undefined) {
        await deleteData(identifier);
      }
      const todosWithChange = [...todos];
      todosWithChange.splice(index, 1);
      dispatch(deleteItemSuccess(todosWithChange));
    } catch (error) {
      dispatch(deleteItemFail());
    }
  };
};

const deleteItemSuccess: ActionCreator<DeleteItemSuccess> = (
  todos: Todo[]
) => ({
  payload: {
    todo: todos
  },
  type: ActionsTypes.DELETE_ITEM_SUCCESS
});

const deleteItemFail: ActionCreator<DeleteItemFail> = () => ({
  type: ActionsTypes.DELETE_ITEM_FAIL
});

export const Actions = {
  clearAllDone,
  changeCheckBoxState,
  addToDo,
  markAsNotDone,
  markAsDone,
  getToDoData,
  deleteItem
};
