import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { Button } from './index'

describe('should render button', () => {
  it('renders correctly', () => {
    const component = shallow(<Button text="Dummy" onPress={jest.fn()} />)
    expect(toJson(component)).toMatchSnapshot()
  })

  // it('should call onPress', () => {
  //   const mockOnPress = jest.fn();
  //   const wrapper = shallow(<Button text="Dummy" onPress={mockOnPress} />);
  //   const instance = wrapper.instance();

  //   instance.onPress();

  //   expect(mockOnPress).toHaveBeenCalled();
  //   expect(mockOnPress).toHaveBeenCalledTimes(1);
  // });
})
