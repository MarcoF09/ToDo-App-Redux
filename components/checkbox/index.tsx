import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import checkboxActive from '../../resources/images/iconCheckboxActive.png'
import checkboxinactive from '../../resources/images/iconCheckboxInactive.png'
import { styles } from './styles'

export interface Props {
  checked: boolean
  click: () => void
}

export const CheckBox = ({ checked, click }: Props) => (
  <View style={styles.checkBoxContainer}>
    <TouchableOpacity onPress={click} testID="buttonCheckbox">
      {checked ? (
        <Image source={checkboxActive} testID="checkboxActive" />
      ) : (
        <Image source={checkboxinactive} testID="checkboxInactive" />
      )}
    </TouchableOpacity>
  </View>
)
