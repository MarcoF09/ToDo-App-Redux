import { shallow } from 'enzyme'
import { createHocTestComponent } from 'hocs/hocs'
import React from 'react'
import { withLifecycleMethods } from './withLifecyclesMethods'

const createTestProps = (props: object) => ({
  navigation: {
    navigate: jest.fn(),
    setParams: props.mockedSetParams
  },
  ...props
})

describe('should get the toDo data', () => {
  let props: any
  const mockedSetParams = jest.fn()
  const getToDoData = jest.fn(() =>
    Promise.resolve({
      todo: [
        {
          title: 'Title2',
          description: 'Description2',
          completed: true,
          url: ''
        }
      ]
    })
  )
  it('get data correctly', async () => {
    props = createTestProps({ mockedSetParams, getToDoData })
    const ComponentWithDidMountMethod = createHocTestComponent(
      withLifecycleMethods
    )
    const wrapper = shallow(<ComponentWithDidMountMethod {...props} />)
    expect(wrapper.props().getToDoData).toBeCalled()
  })
})
