import React, { Component, FunctionComponent } from 'react'
import { View } from 'react-native'
import { NavigationRoute, NavigationScreenProp } from 'react-navigation'
import { Hoc } from '../../hocs/types'

export const withNavigationHeader: Hoc<
  {},
  {
    navigation: NavigationScreenProp<NavigationRoute>
  }
> = (WrappedComponent: FunctionComponent) => {
  return class extends Component {
    static navigationOptions = {
      title: 'Detail',
      headerRight: <View />
    }

    render() {
      return <WrappedComponent />
    }
  }
}
