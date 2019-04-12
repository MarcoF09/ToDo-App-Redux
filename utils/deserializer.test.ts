import { ResponseBackend, Todo } from 'types/globalTypes'
import { deserializer } from './deserializer'

const todo: ResponseBackend = {
  title: 'Title|Description',
  order: 1,
  completed: false,
  url: 'http://todo-backend-express.herokuapp.com/20738'
}

const spectedResponse: Todo = {
  id: '20738',
  title: 'Title',
  description: 'Description',
  completed: false,
  url: 'http://todo-backend-express.herokuapp.com/20738'
}
describe('should modify the entry accord to the format who accepts the local app', () => {
  it('modify the todo and compare the result', () => {
    const result = deserializer(todo)
    expect(result).toEqual(spectedResponse)
  })
})
