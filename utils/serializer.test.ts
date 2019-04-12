import { ResponseBackend, Todo } from 'types/globalTypes'
import { serializer } from './serializer'

const spectedResponse: ResponseBackend = {
  title: 'Title|Description',
  order: 5,
  completed: false,
  url: 'http://todo-backend-express.herokuapp.com/20738'
}

const todo: Todo = {
  id: '20738',
  title: 'Title',
  description: 'Description',
  completed: false,
  url: 'http://todo-backend-express.herokuapp.com/20738'
}
describe('should modify the entry accord to the format who accepts the api', () => {
  it('modify the todo and compare the result', () => {
    const result = serializer(todo)
    expect(result).toEqual(spectedResponse)
  })
})
