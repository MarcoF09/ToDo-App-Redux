import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { CheckBox } from './index'

describe('should render button', () => {
  it('renders correctly with checked', () => {
    const component = shallow(<CheckBox checked={true} click={jest.fn()} />)
    expect(toJson(component)).toMatchSnapshot()
  })
  it('renders correctly without checked', () => {
    const component = shallow(<CheckBox checked={false} click={jest.fn()} />)
    expect(toJson(component)).toMatchSnapshot()
  })
})
