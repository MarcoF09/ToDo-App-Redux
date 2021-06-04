import { mapDispatchToProps } from './mapDispatchToProps'

describe('should return a method used to add todos', () => {
  const dispatch = jest.fn()
  it('returns correctly the method', () => {
    expect(mapDispatchToProps(dispatch)).toMatchSnapshot()
  })
})
