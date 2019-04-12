import { Animated } from 'react-native'
import { Todo } from 'types/globalTypes'
import { renderItem } from './renderItem'

const initialTodo: Todo[] = [
  { title: 'Title1', description: 'Description1', completed: false, url: '' },
  { title: 'Title2', description: 'Description2', completed: true, url: '' }
]
const navigation = {
  navigate: jest.fn(),
  push: jest.fn()
}
describe('should render the footer', () => {
  const mockedFunction = jest.fn()
  const moveAnimation = new Animated.ValueXY({ x: -100, y: 30 })

  it('renders correctly the item', () => {
    expect(
      renderItem(
        {
          item: initialTodo[0],
          index: 0,
          separators: {
            highlight: jest.fn(),
            unhighlight: jest.fn(),
            updateProps: jest.fn()
          }
        },
        navigation,
        initialTodo,
        moveAnimation,
        mockedFunction,
        mockedFunction
      )
    ).toMatchSnapshot()
  })
})
