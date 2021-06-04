import { Todo } from 'types/globalTypes'
import { renderFooter } from './renderFooter'

const initialTodo: Todo[] = [
  { title: 'Title1', description: 'Description1', completed: false, url: '' },
  { title: 'Title2', description: 'Description2', completed: true, url: '' }
]
const clearAllDoneMocked = jest.fn()

describe('should render the footer', () => {
  it('renders correctly the button', () => {
    expect(renderFooter(initialTodo, clearAllDoneMocked)).toMatchSnapshot()
  })

  it('renders correctly the loading indicator', () => {
    expect(renderFooter([], clearAllDoneMocked)).toMatchSnapshot()
  })
})
