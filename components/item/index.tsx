import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../colors/Colors'
import { CheckBox } from '../checkbox'
import { styles } from './styles'

export interface Props {
  onPress: any
  title: string
  description?: string
  completed: boolean
  checkboxClick: () => void
}

export const Item = (props: Props) => (
  <TouchableOpacity
    style={{ backgroundColor: Colors.white }}
    onPress={props.onPress}
  >
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.primaryText}>{props.title}</Text>
        <Text style={styles.secondaryText}>{props.description}</Text>
      </View>
      <CheckBox checked={props.completed} click={props.checkboxClick} />
    </View>
  </TouchableOpacity>
)
