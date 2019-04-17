import React from 'react'
import {
  Animated,
  ListRenderItemInfo,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import {
  AnimatedValue,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation'
import { Item } from '../../components/item'
import { Todo } from '../../types/globalTypes'
import { styles } from './styles'

export const renderItem = (
  item: ListRenderItemInfo<Todo>,
  navigation: NavigationScreenProp<NavigationRoute>,
  todo: Todo[],
  moveAnimation: AnimatedValue,
  deleteItem: (todos: Todo[], index: number) => void,
  changeCheckBoxState: (todos: Todo[], index: number) => void
) => {
  return (
    <View testID={`item${item.index}`}>
      <Animated.View
        style={[styles.deleteContainer, moveAnimation.getLayout()]}
      >
        <TouchableWithoutFeedback
          testID="deleteButton"
          style={styles.buttonDelete}
          onPress={() => {
            deleteItem(todo, item.index)
          }}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableWithoutFeedback>
      </Animated.View>

      <Item
        onPress={() => {
          navigation.push('Detail', {
            index: item.index
          })
        }}
        {...item.item}
        checkboxClick={() => {
          changeCheckBoxState(todo, item.index)
        }}
      />
    </View>
  )
}
