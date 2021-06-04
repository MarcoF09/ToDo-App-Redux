import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Todo } from 'types/globalTypes'
import { Layout } from './Layout'

const createTestProps = (props: object) => ({
  navigation: {
    navigate: jest.fn(),
    getParam: () => 0
  },
  ...props
})

describe('should render detail screen', () => {
  const mockedFunction = jest.fn()
  const initialTodo: Todo[] = [
    { title: 'Title1', description: 'Description1', completed: false, url: '' }
  ]
  let props: any
  it('renders correctly', () => {
    props = createTestProps({ mockedFunction, initialTodo })
    const component = shallow(
      <Layout
        markAsDone={props.mockedFunction}
        markAsNotDone={props.mockedFunction}
        todo={props.initialTodo}
        navigation={props.navigation}
      />
    )
    expect(toJson(component)).toMatchSnapshot()
  })
})
