import { State } from 'types/globalTypes'
import { mapStateToProps } from './mapStateToProps'

describe('should return a list of todos', () => {
  const state: State = {
    todo: [
      {
        title: 'Title1',
        description: 'Description1',
        completed: false,
        url: ''
      }
    ]
  }
  it('returns correctly the list of todos', () => {
    expect(mapStateToProps(state, null)).toMatchSnapshot()
  })
})
