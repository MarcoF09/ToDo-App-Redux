import React, { FunctionComponent } from 'react'
import { StatusBar, TextInput, View } from 'react-native'
import { Colors } from '../../colors/Colors'
import { Strings } from '../../strings'
import { styles } from './styles'
import { LayoutProps } from './types'

export const Layout: FunctionComponent<LayoutProps> = ({
  firstInputColor,
  secondInputColor,
  onFocusTitle,
  onBlurTitle,
  onFocusDescription,
  onBlurDescription,
  onChangeTitle,
  onChangeDescription
}: LayoutProps) => {
  return (
    <View style={styles.container} testID="layout">
      <StatusBar backgroundColor={Colors.customBlue} />
      <TextInput
        testID="title"
        onFocus={() => onFocusTitle()}
        onBlur={() => onBlurTitle()}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: firstInputColor,
          fontSize: 36,
          color: Colors.black,
          fontFamily: 'SourceSansPro-Regular'
        }}
        placeholder={Strings.titlePlaceHolder}
        multiline={false}
        onChangeText={text => onChangeTitle(text)}
      />
      <TextInput
        testID="description"
        onFocus={() => onFocusDescription()}
        onBlur={() => onBlurDescription()}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: secondInputColor,
          textAlignVertical: 'top',
          height: 90,
          fontFamily: 'SourceSansPro-Regular',
          fontSize: 14
        }}
        placeholder={Strings.descriptionPlaceHolder}
        multiline={true}
        numberOfLines={5}
        onChangeText={text => onChangeDescription(text)}
      />
    </View>
  )
}
