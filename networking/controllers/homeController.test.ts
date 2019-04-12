import { ResponseBackend, Todo } from 'types/globalTypes'
import HttpService from '../httpService'
import { deleteData, getData, putData, updateData } from './homeController'

jest.mock('../httpService')

const getHttpServiceMock = HttpService.get as jest.Mock
const putHttpServiceMock = HttpService.post as jest.Mock
const updateHttpServiceMock = HttpService.patch as jest.Mock
const deleteHttpServiceMock = HttpService.delete as jest.Mock

const url = 'http://todo-backend-express.herokuapp.com/'

const todo: Todo = {
  title: 'Title3',
  description: 'Description3',
  completed: false,
  url: ''
}

describe('home controller', () => {
  it('should get data in backend', () => {
    getData()
    expect(getHttpServiceMock).toHaveBeenCalledWith(url, {})
  })

  it('should put data in backend', () => {
    putData(todo)
    expect(putHttpServiceMock).toHaveBeenCalledWith(url, todo)
  })

  it('should update data in backend', () => {
    const id: string = '1'
    const responseBackendTodo: ResponseBackend = {
      title: 'title1',
      order: 1,
      completed: false,
      url: ''
    }
    updateData(responseBackendTodo, id)
    expect(updateHttpServiceMock).toHaveBeenCalledWith(
      `${url}${id}`,
      responseBackendTodo
    )
  })

  it('should delete data in backend', () => {
    const id: string = '1'
    deleteData(id)
    expect(deleteHttpServiceMock).toHaveBeenCalledWith(`${url}${id}`)
  })
})
