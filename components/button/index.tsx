import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { Colors } from '../../colors/Colors'
import { styles } from './styles'

export interface Props {
  text: string
  styleButton?: object
  onPress: () => void
}
export const Button = ({ text, styleButton, onPress }: Props) => (
  <View style={styles.container}>
    <TouchableHighlight
      onPress={onPress}
      underlayColor={Colors.white}
      testID="button"
    >
      <View style={styleButton}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  </View>
)
