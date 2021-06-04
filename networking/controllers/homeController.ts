import { ResponseBackend, Todo } from '../../types/globalTypes'
import httpService from '../httpService'

export const getData = () => {
  return httpService.get('http://todo-backend-express.herokuapp.com/', {})
}

export const putData = (newData: Todo) => {
  httpService.post('http://todo-backend-express.herokuapp.com/', newData)
}

export const updateData = (todo: ResponseBackend, id: string) => {
  httpService.patch(`http://todo-backend-express.herokuapp.com/${id}`, todo)
}

export const deleteData = (id: string) => {
  httpService.delete(`http://todo-backend-express.herokuapp.com/${id}`)
}
