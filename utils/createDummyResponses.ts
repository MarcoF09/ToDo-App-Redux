import { ResponseBackend, Todo } from 'types/globalTypes'

export const todosBackend: ResponseBackend[] = [
  {
    title: 'Title1|Description1',
    order: 1,
    completed: false,
    url: 'http://todo-backend-express.herokuapp.com/20738'
  },
  {
    title: 'Title2|Description2',
    order: 1,
    completed: true,
    url: 'http://todo-backend-express.herokuapp.com/20739'
  }
]

export const spectedResponse: Todo[] = [
  {
    id: '20738',
    title: 'Title1',
    description: 'Description1',
    completed: false,
    url: 'http://todo-backend-express.herokuapp.com/20738'
  },
  {
    id: '20739',
    title: 'Title2',
    description: 'Description2',
    completed: true,
    url: 'http://todo-backend-express.herokuapp.com/20739'
  }
]
