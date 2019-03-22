import React from "react";
import { styles } from "./styles";
import { Colors } from "../../colors/Colors";
import { TouchableHighlight, Text, View } from "react-native";

export const Button = ({ text, styleButton, onPress }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={onPress} underlayColor={Colors.white}>
      <View style={styleButton}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  </View>
);
