import React, { FunctionComponent } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationRoute, NavigationScreenProp } from 'react-navigation'
import { Strings } from '../../strings'
import { styles } from './styles'

export const withNavigationHeader = (WrappedComponent: FunctionComponent) => {
  return class extends React.Component {
    public static navigationOptions = ({
      navigation
    }: NavigationScreenProp<NavigationRoute>) => ({
      title: Strings.newTaskTitle,
      headerRight: (
        <View style={styles.headerContainerRight}>
          <TouchableOpacity
            testID="saveTodo"
            onPress={() => {
              navigation.getParam('addToDo')()
              navigation.pop()
            }}
            style={styles.textContainerRight}
          >
            <Text style={styles.statusBarText}>{Strings.save}</Text>
          </TouchableOpacity>
        </View>
      ),
      headerLeft: (
        <View style={styles.headerContainerLeft}>
          <TouchableOpacity
            testID="cancelAddTodo"
            onPress={() => navigation.goBack()}
            style={styles.textContainerLeft}
          >
            <Text style={styles.statusBarText}>{Strings.cancel}</Text>
          </TouchableOpacity>
        </View>
      )
    })
    public render() {
      return <WrappedComponent />
    }
  }
}
