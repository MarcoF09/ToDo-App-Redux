import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Animated } from 'react-native'
import { Todo } from 'types/globalTypes'
import { Layout } from './Layout'

const createTestProps = (props: object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('should render home screen', () => {
  const mockedFunction = jest.fn()
  const initialTodo: Todo[] = [
    { title: 'Title1', description: 'Description1', completed: false, url: '' },
    { title: 'Title2', description: 'Description2', completed: true, url: '' }
  ]
  const moveAnimation = new Animated.ValueXY({ x: -100, y: 30 })
  let props: any

  it('renders correctly without delete button', () => {
    props = createTestProps({ mockedFunction, initialTodo, moveAnimation })
    const component = shallow(
      <Layout
        todo={props.initialTodo}
        navigation={props.navigation}
        clearAllDone={props.mockedFunction}
        moveAnimation={props.moveAnimation}
        deleteItem={props.mockedFunction}
        changeCheckBoxState={props.mockedFunction}
        getToDoData={props.mockedFunction}
        animateDeleteButton={props.mockedFunction}
        deleteButtonState={false}
      />
    )
    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correctly with delete button', () => {
    props = createTestProps({ mockedFunction, initialTodo, moveAnimation })
    const component = shallow(
      <Layout
        todo={props.initialTodo}
        navigation={props.navigation}
        clearAllDone={props.mockedFunction}
        moveAnimation={props.moveAnimation}
        deleteItem={props.mockedFunction}
        changeCheckBoxState={props.mockedFunction}
        getToDoData={props.mockedFunction}
        animateDeleteButton={props.mockedFunction}
        deleteButtonState={true}
      />
    )
    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correctly without todos', () => {
    props = createTestProps({ mockedFunction, moveAnimation })
    const component = shallow(
      <Layout
        todo={props.initialTodo}
        navigation={props.navigation}
        clearAllDone={props.mockedFunction}
        moveAnimation={props.moveAnimation}
        deleteItem={props.mockedFunction}
        changeCheckBoxState={props.mockedFunction}
        getToDoData={props.mockedFunction}
        animateDeleteButton={props.mockedFunction}
        deleteButtonState={true}
      />
    )
    expect(toJson(component)).toMatchSnapshot()
  })
})
