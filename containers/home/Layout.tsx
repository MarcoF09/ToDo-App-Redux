import React, { FunctionComponent } from 'react'
import { FlatList, StatusBar, View } from 'react-native'
import { Colors } from '../../colors/Colors'
import { renderFooter } from './renderFooter'
import { renderItem } from './renderItem'
import { LayoutProps } from './types'

export const Layout: FunctionComponent<LayoutProps> = ({
  todo,
  navigation,
  clearAllDone,
  moveAnimation,
  deleteItem,
  changeCheckBoxState
}: LayoutProps) => {
  return (
    <View testID="homeLayout">
      <StatusBar backgroundColor={Colors.customBlue} />
      <FlatList
        data={todo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={item =>
          renderItem(
            item,
            navigation,
            todo,
            moveAnimation,
            deleteItem,
            changeCheckBoxState
          )
        }
        ListFooterComponent={() => renderFooter(todo, clearAllDone)}
      />
    </View>
  )
}
