import React, { Component, FunctionComponent } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationRoute, NavigationScreenProp } from 'react-navigation'
import { Hoc } from '../../hocs/types'
import { styles } from './styles'

export const withNavigationHeader: Hoc<
  {},
  {
    navigation: NavigationScreenProp<NavigationRoute>
  }
> = (WrappedComponent: FunctionComponent) => {
  return class extends Component {
    public static navigationOptions = ({
      navigation
    }: NavigationScreenProp<NavigationRoute>) => ({
      title: 'Home',
      headerLeft: (
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity
            testID="deleteOrCancel"
            onPress={() => {
              navigation.getParam('animation')()
            }}
          >
            <Text style={styles.headerText}>Edit/Cancel</Text>
          </TouchableOpacity>
        </View>
      ),
      headerRight: (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity
            testID="goToNewtask"
            onPress={() => navigation.navigate('NewTask')}
          >
            <Text style={styles.headerText}>+</Text>
          </TouchableOpacity>
        </View>
      )
    })
    public render() {
      return <WrappedComponent />
    }
  }
}
