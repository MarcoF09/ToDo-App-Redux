import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Item } from './index'

describe('should render button', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Item
        title="Title"
        description="Description"
        completed={true}
        onPress={jest.fn()}
        checkboxClick={jest.fn()}
      />
    )
    expect(toJson(component)).toMatchSnapshot()
  })
})
