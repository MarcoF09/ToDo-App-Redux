import { Layout } from './Layout'
import { withNavigationHeader } from './withNavigationHeader'

describe('should insert the navigation of the home screen', () => {
  it('add correctly the navigation', () => {
    const Component = withNavigationHeader(Layout)
    expect(Component.navigationOptions).toBeDefined()
  })
})
