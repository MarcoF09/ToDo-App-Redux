import { Action } from 'redux';
import { ActionsTypes } from '../actions/actionTypes';
import { Todo } from './globalTypes';

export interface ClearAllDoneSucessAction extends Action {
  type: ActionsTypes.CLEAR_ALL_DONE_SUCCESS;
  payload: {
    todo: Todo[];
  };
}

export interface ClearAllDoneFailAction extends Action {
  type: ActionsTypes.CLEAR_ALL_DONE_FAIL;
}

export interface ChangeCheckBoxStateActionSuccessAction extends Action {
  type: ActionsTypes.CHANGE_CHECKBOX_STATE_SUCCESS;
  payload: { todo: Todo[] };
}

export interface ChangeCheckBoxStateActionFailAction extends Action {
  type: ActionsTypes.CHANGE_CHECKBOX_STATE_FAIL;
}

export interface AddToDoSuccessAction extends Action {
  type: ActionsTypes.HANDLE_ADD_DATA_SUCCESS;
  payload: { title: string; description: string };
}

export interface AddToDoFailAction extends Action {
  type: ActionsTypes.HANDLE_ADD_DATA_FAIL;
}

export interface MarkAsNotDoneSuccessAction extends Action {
  type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_SUCCESS;
  payload: {
    todo: Todo[];
  };
}

export interface MarkAsNotDoneFailAction extends Action {
  type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_FAIL;
}

export interface MarkAsDoneSuccessAction extends Action {
  type: ActionsTypes.HANDLE_MARK_AS_DONE_SUCCESS;
  payload: {
    todo: Todo[];
  };
}

export interface MarkAsDoneFailAction extends Action {
  type: ActionsTypes.HANDLE_MARK_AS_DONE_FAIL;
}

export interface GetToDoDataSuccess extends Action {
  type: ActionsTypes.GET_TO_DO_DATA_SUCCESS;
  payload: {
    todo: Todo[];
  };
}

export interface GetToDoDataFail extends Action {
  type: ActionsTypes.GET_TO_DO_DATA_FAIL;
}

export interface DeleteItemSuccess extends Action {
  type: ActionsTypes.DELETE_ITEM_SUCCESS;
  payload: {
    todo: Todo[];
  };
}

export interface DeleteItemFail extends Action {
  type: ActionsTypes.DELETE_ITEM_FAIL;
}

export type Actions =
  | ClearAllDoneSucessAction
  | ClearAllDoneFailAction
  | ChangeCheckBoxStateActionSuccessAction
  | ChangeCheckBoxStateActionFailAction
  | AddToDoSuccessAction
  | AddToDoFailAction
  | MarkAsNotDoneSuccessAction
  | MarkAsNotDoneFailAction
  | MarkAsDoneSuccessAction
  | MarkAsDoneFailAction
  | GetToDoDataSuccess
  | GetToDoDataFail
  | DeleteItemSuccess
  | DeleteItemFail;
