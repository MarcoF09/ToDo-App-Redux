import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import checkboxActive from '../../resources/images/iconCheckboxActive.png';
import checkboxinactive from '../../resources/images/iconCheckboxInactive.png';
import { styles } from './styles';

export interface Props {
  checked: boolean;
  click: () => void;
}

export const CheckBox = ({ checked, click }: Props) => (
  <View style={styles.checkBoxContainer}>
    <TouchableOpacity onPress={click}>
      {checked ? (
        <Image source={checkboxActive} />
      ) : (
        <Image source={checkboxinactive} />
      )}
    </TouchableOpacity>
  </View>
);
