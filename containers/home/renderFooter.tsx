import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../../colors/Colors';
import { Button } from '../../components/button';
import { Strings } from '../../strings';
import { Todo } from '../../types/globalTypes';
import { styles } from './styles';

export const renderFooter = (
  todo: Todo[],
  clearAllDone: (todos: Todo[]) => void
) => {
  return todo.length > 0 ? (
    <Button
      text={Strings.clearAllDone}
      styleButton={styles.button}
      onPress={() => {
        clearAllDone(todo);
      }}
    />
  ) : (
    <View>
      <ActivityIndicator size="large" color={Colors.customBlue} />
    </View>
  );
};
