import { State } from 'types/globalTypes'
import { spectedResponse, todosBackend } from 'utils/createDummyResponses'
import {
  deleteData,
  getData,
  putData,
  updateData
} from '../networking/controllers/homeController'
import {
  Actions,
  addToDoFail,
  addToDoSuccess,
  changeCheckBoxStateFail,
  changeCheckBoxStateSuccess,
  clearAllDoneFail,
  clearAllDoneSuccess,
  deleteItemFail,
  deleteItemSuccess,
  getToDoFail,
  getToDoSuccess,
  markAsDoneFail,
  markAsDoneSuccess,
  markAsNotDoneFail,
  markAsNotDoneSuccess
} from './actions'
import { ActionsTypes } from './actionTypes'

jest.mock('../networking/controllers/homeController')

const getDataMock = getData as jest.Mock
const putDataMock = putData as jest.Mock
const updateDataMock = updateData as jest.Mock
const deleteDataMock = deleteData as jest.Mock

const state: State = {
  todo: [
    {
      id: '1',
      title: 'Title1',
      description: 'Description1',
      completed: false,
      url: ''
    },
    {
      id: '2',
      title: 'Title2',
      description: 'Description2',
      completed: true,
      url: ''
    }
  ]
}

describe('should modify state', () => {
  const dispatch = jest.fn()

  it('adds todo to the list of todos', async () => {
    const stateWithNewItem: State = {
      todo: [
        {
          id: '1',
          title: 'Title1',
          description: 'Description1',
          completed: true,
          url: ''
        },
        {
          id: '2',
          title: 'Title2',
          description: 'Description2',
          completed: true,
          url: ''
        },
        {
          id: '3',
          title: 'Title3',
          description: 'Description3',
          completed: false,
          url: ''
        }
      ]
    }
    const title: string = 'Title3'
    const description = 'Description3'
    await Actions.addToDo(title, description)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(addToDoSuccess(title, description))
  })
  it('adds todo to the list of todos fail', async () => {
    putDataMock.mockRejectedValue('error')
    const title: string = 'Title3'
    const description = 'Description3'
    await Actions.addToDo(title, description)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(addToDoFail())
  })
  it('changes checkbox todo state', async () => {
    const stateWithCheckBoxChanged: State = {
      todo: [
        {
          id: '1',
          title: 'Title1',
          description: 'Description1',
          completed: true,
          url: ''
        },
        {
          id: '2',
          title: 'Title2',
          description: 'Description2',
          completed: true,
          url: ''
        }
      ]
    }
    const index: number = 0
    await Actions.changeCheckBoxState(state.todo, index)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(
      changeCheckBoxStateSuccess(stateWithCheckBoxChanged.todo)
    )
  })
  it('changes checkbox todo state fails', async () => {
    updateDataMock.mockRejectedValue('error')
    const index: number = 0
    await Actions.changeCheckBoxState(state.todo, index)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(changeCheckBoxStateFail())
  })
  it('clears all todos', async () => {
    const stateWithClearAllDone: State = {
      todo: [
        {
          id: '1',
          title: 'Title1',
          description: 'Description1',
          completed: false,
          url: ''
        },
        {
          id: '2',
          title: 'Title2',
          description: 'Description2',
          completed: false,
          url: ''
        }
      ]
    }
    await Actions.clearAllDone(state.todo)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(
      clearAllDoneSuccess(stateWithClearAllDone.todo)
    )
  })
  it('clears all todos fail', async () => {
    // updateDataMock.mockRejectedValue('error')
    // await Actions.clearAllDone(state.todo)(dispatch)
    // expect(dispatch).toHaveBeenCalledWith(clearAllDoneFail())
  })
  it('marks a todo as not done', async () => {
    // const stateWithChangeInCompletedItem: State = {
    //   todo: [
    //     {
    //       id: '1',
    //       title: 'Title1',
    //       description: 'Description1',
    //       completed: false,
    //       url: ''
    //     },
    //     {
    //       id: '2',
    //       title: 'Title2',
    //       description: 'Description2',
    //       completed: false,
    //       url: ''
    //     }
    //   ]
    // }
    // const index = 1
    // await Actions.markAsNotDone(state.todo, index)(dispatch)
    // expect(dispatch).toHaveBeenCalledWith(
    //   markAsNotDoneSuccess(stateWithChangeInCompletedItem.todo)
    // )
  })
  it('marks a todo as not done fail', async () => {
    updateDataMock.mockRejectedValue('error')
    const index = 1
    await Actions.markAsNotDone(state.todo, index)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(markAsNotDoneFail())
  })
  it('marks a todo as done', async () => {
    // const stateWithChangeInCompletedItem: State = {
    //   todo: [
    //     {
    //       id: '1',
    //       title: 'Title1',
    //       description: 'Description1',
    //       completed: true,
    //       url: ''
    //     },
    //     {
    //       id: '2',
    //       title: 'Title2',
    //       description: 'Description2',
    //       completed: true,
    //       url: ''
    //     }
    //   ]
    // }
    // const index = 1
    // await Actions.markAsDone(state.todo, index)(dispatch)
    // expect(dispatch).toHaveBeenCalledWith(
    //   markAsDoneSuccess(stateWithChangeInCompletedItem.todo)
    // )
  })
  it('marks a todo as done fail', async () => {
    updateDataMock.mockRejectedValue('error')
    const index = 1
    await Actions.markAsDone(state.todo, index)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(markAsDoneFail())
  })
  it('gets todos', async () => {
    getDataMock.mockResolvedValue({ data: todosBackend })
    await Actions.getToDoData()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(getToDoSuccess(spectedResponse))
  })
  it('gets todos fail', async () => {
    getDataMock.mockRejectedValue('error')
    await Actions.getToDoData()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(getToDoFail())
  })
  it('deletes a todo', async () => {
    const index = 0
    const stateUpdated: State = {
      todo: [
        {
          id: '2',
          title: 'Title2',
          description: 'Description2',
          completed: true,
          url: ''
        }
      ]
    }
    await Actions.deleteItem(state.todo, index)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(deleteItemSuccess(stateUpdated.todo))
  })
  it('deletes a todo fail', async () => {
    deleteDataMock.mockRejectedValue('error')
    const index = 1
    await Actions.deleteItem(state.todo, index)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(deleteItemFail())
  })
})

describe('should create actions creators', () => {
  it('should create clear all done success', () => {
    expect(clearAllDoneSuccess(state.todo)).toEqual({
      payload: {
        todo: state.todo
      },
      type: ActionsTypes.CLEAR_ALL_DONE_SUCCESS
    })
  })
  it('should create clear all done fail', () => {
    expect(clearAllDoneFail()).toEqual({
      type: ActionsTypes.CLEAR_ALL_DONE_FAIL
    })
  })
  it('should create change checkbox state success', () => {
    expect(changeCheckBoxStateSuccess(state.todo)).toEqual({
      payload: { todo: state.todo },
      type: ActionsTypes.CHANGE_CHECKBOX_STATE_SUCCESS
    })
  })
  it('should create change checkbox state fail', () => {
    expect(changeCheckBoxStateFail()).toEqual({
      type: ActionsTypes.CHANGE_CHECKBOX_STATE_FAIL
    })
  })
  it('should create add todo success', () => {
    expect(addToDoSuccess('Title3', 'Description')).toEqual({
      payload: {
        title: 'Title3',
        description: 'Description'
      },
      type: ActionsTypes.HANDLE_ADD_DATA_SUCCESS
    })
  })
  it('should create add todo fail', () => {
    expect(addToDoFail()).toEqual({
      type: ActionsTypes.HANDLE_ADD_DATA_FAIL
    })
  })
  it('should create mark as not done success ', () => {
    expect(markAsNotDoneSuccess(state.todo)).toEqual({
      payload: {
        todo: state.todo
      },
      type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_SUCCESS
    })
  })
  it('should create mark as not done fail', () => {
    expect(markAsNotDoneFail()).toEqual({
      type: ActionsTypes.HANDLE_MARK_AS_NOT_DONE_FAIL
    })
  })
  it('should create mark as done success', () => {
    expect(markAsDoneSuccess(state.todo)).toEqual({
      payload: {
        todo: state.todo
      },
      type: ActionsTypes.HANDLE_MARK_AS_DONE_SUCCESS
    })
  })
  it('should create mark as done fail', () => {
    expect(markAsDoneFail()).toEqual({
      type: ActionsTypes.HANDLE_MARK_AS_DONE_FAIL
    })
  })
  it('should create get todo success', () => {
    expect(getToDoSuccess(state.todo)).toEqual({
      payload: {
        todo: state.todo
      },
      type: ActionsTypes.GET_TO_DO_DATA_SUCCESS
    })
  })
  it('should create get todo fail', () => {
    expect(getToDoFail()).toEqual({
      payload: {},
      type: ActionsTypes.GET_TO_DO_DATA_FAIL
    })
  })
  it('should create delete item success', () => {
    expect(deleteItemSuccess(state.todo)).toEqual({
      payload: {
        todo: state.todo
      },
      type: ActionsTypes.DELETE_ITEM_SUCCESS
    })
  })
  it('should create delete item fail', () => {
    expect(deleteItemFail(state.todo)).toEqual({
      type: ActionsTypes.DELETE_ITEM_FAIL
    })
  })
})
