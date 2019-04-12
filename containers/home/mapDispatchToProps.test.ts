import { mapDispatchToProps } from './mapDispatchToProps'

describe('should return a list of method used in home', () => {
  const dispatch = jest.fn()
  it('methods returned correctly', () => {
    expect(mapDispatchToProps(dispatch)).toMatchSnapshot()
  })
})
