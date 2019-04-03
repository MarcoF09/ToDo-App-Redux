import React, { FunctionComponent } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Colors } from '../../colors/Colors';
import { Button } from '../../components/button';
import { Strings } from '../../strings';
import { styles } from './styles';
import { LayoutProps } from './types';

export const Layout: FunctionComponent<LayoutProps> = ({
  markAsDone,
  todo,
  navigation,
  markAsNotDone
}: LayoutProps) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.customBlue} />
      <View style={styles.topButtonContainer}>
        <Button
          text={Strings.notDone}
          onPress={() => {
            markAsNotDone(todo, navigation.getParam('index'));
            navigation.pop();
          }}
        />
      </View>
      <Text style={styles.primaryText}>
        {todo[navigation.getParam('index')].title}
      </Text>
      <Text style={styles.secondaryText}>
        {todo[navigation.getParam('index')].description}
      </Text>
      <Button
        text={Strings.markAsDone}
        onPress={() => {
          markAsDone(todo, navigation.getParam('index'));
          navigation.pop();
        }}
      />
    </View>
  );
};
