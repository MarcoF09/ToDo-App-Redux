import { Colors } from 'colors/Colors'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { createHocTestComponent } from 'hocs/hocs'
import React from 'react'
import {
  withDescriptionColorHandler,
  withDescriptionHandlers,
  withTitleColorHandler,
  withTitleHandlers
} from './withStateHandlers'

describe('should add text inputs handlers', () => {
  it('add title input handlers', () => {
    const ComponentWithTitleHandler = createHocTestComponent(withTitleHandlers)

    const wrapper = shallow(<ComponentWithTitleHandler />)
    wrapper.props().onChangeTitle('title')
    expect(wrapper.props().title).toEqual('title')
  })

  it('add description input handlers', () => {
    const ComponentWithDescriptionHandler = createHocTestComponent(
      withDescriptionHandlers
    )
    const wrapper = shallow(<ComponentWithDescriptionHandler />)
    wrapper.props().onChangeDescription('description')
    expect(wrapper.props().description).toEqual('description')
  })
})

describe('should add inputs border color handlers', () => {
  it('add title boder color handlers', () => {
    const ComponentWithTitleBorderColorHandler = createHocTestComponent(
      withTitleColorHandler
    )
    const wrapper = shallow(<ComponentWithTitleBorderColorHandler />)
    wrapper.props().onFocusTitle()
    expect(wrapper.props().firstInputColor).toEqual(Colors.pink)
    wrapper.props().onBlurTitle()
    expect(wrapper.props().firstInputColor).toEqual(Colors.lightGrey)
  })

  it('add description border color handlers', () => {
    const ComponentWithDescriptionBorderColorHandler = createHocTestComponent(
      withDescriptionColorHandler
    )
    const wrapper = shallow(<ComponentWithDescriptionBorderColorHandler />)
    wrapper.props().onFocusDescription()
    expect(wrapper.props().secondInputColor).toEqual(Colors.pink)
    wrapper.props().onBlurDescription()
    expect(wrapper.props().secondInputColor).toEqual(Colors.lightGrey)
  })
})
