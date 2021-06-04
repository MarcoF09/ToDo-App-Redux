import { shallow } from 'enzyme'
import { createHocTestComponent } from 'hocs/hocs'
import { defer } from 'lodash'
import React from 'react'
import { withDeleteButtonHandler } from './withStateHandlers'

describe('should animate the delete button', () => {
  const ComponentWithDeleteButtonHandler = createHocTestComponent(
    withDeleteButtonHandler
  )
  const wrapper = shallow(<ComponentWithDeleteButtonHandler />)
  it('brings the button', async () => {
    expect(wrapper.props().moveAnimation).toMatchSnapshot()
    expect(wrapper.props().deleteButtonState).toEqual(false)
    wrapper.props().animateDeleteButton(false, wrapper.props().moveAnimation)
    await Promise.resolve(defer)
    expect(wrapper.props().deleteButtonState).toEqual(true)
  })

  it('returns the button', async () => {
    wrapper.props().animateDeleteButton(true, wrapper.props().moveAnimation)
    await Promise.resolve(defer)
    expect(wrapper.props().deleteButtonState).toEqual(false)
  })
})
