import { Colors } from 'colors/Colors'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { createHocTestComponent } from 'hocs/hocs'
import React from 'react'
import { withDispatchAddToDo } from './withDispatchAddToDo'

const createTestProps = (props: object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('should return a method used to add todos', () => {
  const mockedFunction = jest.fn()
  let props: any
  const title = ''
  const description = ''
  it('returns correctly the method', () => {
    const mockedAddToDo: () => void = jest.fn()
    props = createTestProps({
      mockedFunction,
      mockedAddToDo,
      title,
      description
    })
    const Component = createHocTestComponent(withDispatchAddToDo, props => {
      props.addToDo()
      expect(mockedAddToDo).toBeDefined()
      expect(mockedAddToDo).toBeCalled()
    })

    expect(
      toJson(
        shallow(
          <Component
            firstInputColor={Colors.blue}
            secondInputColor={Colors.blue}
            onFocusTitle={props.mockedFunction}
            onBlurTitle={props.mockedFunction}
            onFocusDescription={props.mockedFunction}
            onBlurDescription={props.mockedFunction}
            onChangeTitle={props.mockedFunction}
            onChangeDescription={props.mockedFunction}
            addToDo={mockedAddToDo}
            navigation={props.navigation}
            title={props.title}
            description={props.description}
          />
        ).dive()
      )
    ).toMatchSnapshot()
  })
})
