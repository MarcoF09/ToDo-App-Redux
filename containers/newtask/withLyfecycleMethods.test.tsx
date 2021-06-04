import { shallow } from 'enzyme'
import { createHocTestComponent } from 'hocs/hocs'
import React from 'react'
import { withLifecycleMethods } from './withLifecycleMethods'

const createTestProps = (props: object) => ({
  navigation: {
    navigate: jest.fn(),
    setParams: props.mockedSetParams
  },
  ...props
})

describe('should save parameters in the navigation', () => {
  let props: any
  const mockedSetParams = jest.fn()
  it('add the parameters correctly', () => {
    props = createTestProps({ mockedSetParams })
    const ComponentWithDidMountMethod = createHocTestComponent(
      withLifecycleMethods
    )
    shallow(<ComponentWithDidMountMethod {...props} />)
    expect(mockedSetParams).toBeCalled()
  })
})
