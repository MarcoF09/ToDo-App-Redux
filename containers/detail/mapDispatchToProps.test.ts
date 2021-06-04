import { mapDispatchToProps } from './mapDispatchToProps'

describe('should return two method to handle if a todo is done or not', () => {
  const dispatch = jest.fn()
  it('methods returned correctly', () => {
    expect(mapDispatchToProps(dispatch)).toMatchSnapshot()
  })
})
