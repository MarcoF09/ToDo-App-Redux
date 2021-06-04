import { Colors } from 'colors/Colors'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Layout } from './Layout'

const createTestProps = (props: object) => ({
  navigation: {
    navigate: jest.fn(),
    getParam: () => 0
  },
  ...props
})

describe('should render new task screen', () => {
  const mockedFunction = jest.fn()
  let props: any
  const title = ''
  const description = ''
  it('renders correctly', () => {
    props = createTestProps({ mockedFunction, title, description })
    const component = shallow(
      <Layout
        firstInputColor={Colors.blue}
        secondInputColor={Colors.blue}
        onFocusTitle={props.mockedFunction}
        onBlurTitle={props.mockedFunction}
        onFocusDescription={props.mockedFunction}
        onBlurDescription={props.mockedFunction}
        onChangeTitle={props.mockedFunction}
        onChangeDescription={props.mockedFunction}
        addToDo={props.mockedFunction}
        navigation={props.navigation}
        title={props.title}
        description={props.description}
      />
    )
    expect(toJson(component)).toMatchSnapshot()
  })
})
