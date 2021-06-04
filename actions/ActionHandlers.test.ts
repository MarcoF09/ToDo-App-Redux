import { Actions } from 'types'
import { State } from 'types/globalTypes'
import {
  addToDo,
  changeCheckBoxState,
  clearAllDone,
  deleteItem,
  getReturnedToDoData,
  markAsDone,
  markAsNotDone
} from './ActionHandlers'
import { ActionsTypes } from './actionTypes'

const initialState: State = {
  todo: [
    { title: 'Title1', description: 'Description1', completed: false, url: '' },
    { title: 'Title2', description: 'Description2', completed: true, url: '' }
  ]
}

const getActionWithTodo = (props: object) => ({
  type: props.type,
  payload: {
    todo: initialState.todo
  }
})

describe('should modify state', () => {
  it('adds todo to the list of todos', () => {
    const action: Actions = {
      type: ActionsTypes.HANDLE_ADD_DATA_SUCCESS,
      payload: {
        title: 'title3',
        description: 'description3'
      }
    }
    expect(addToDo(initialState, action)).toEqual({
      todo: [
        {
          title: 'Title1',
          description: 'Description1',
          completed: false,
          url: ''
        },
        {
          title: 'Title2',
          description: 'Description2',
          completed: true,
          url: ''
        },
        {
          id: 3,
          title: 'title3',
          description: 'description3',
          completed: false
        }
      ]
    })
  })
  it('changes checkbox todo state', () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.CHANGE_CHECKBOX_STATE_SUCCESS
    })
    expect(changeCheckBoxState(initialState, action))
  })
  it('clears all todos checkbox state', () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.CLEAR_ALL_DONE_SUCCESS
    })
    expect(clearAllDone(initialState, action))
  })
  it('marks a todo as not done', () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_SUCCESS
    })
    expect(markAsNotDone(initialState, action))
  })
  it('marks a todo as done', () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.HANDLE_MARK_AS_DONE_SUCCESS
    })
    expect(markAsNotDone(initialState, action))
  })
  it('gets todos', () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.GET_TO_DO_DATA_SUCCESS
    })
    expect(getReturnedToDoData(initialState, action))
  })
  it('deletes a todo', () => {
    const action: Actions = getActionWithTodo({
      type: ActionsTypes.DELETE_ITEM_SUCCESS
    })
    expect(deleteItem(initialState, action))
  })
})
