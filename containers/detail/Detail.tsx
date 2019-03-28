import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { Colors } from '../../colors/Colors';
import { Button } from '../../components/button';
import { State, Todo } from '../../types/globalTypes';
import { mapDispatchToProps } from './mapDispatchToProps';
import { mapStateToProps } from './mapStateToProps';
import { styles } from './styles';

interface Props {
  todo: Todo[];
  navigation: NavigationScreenProp<NavigationRoute>;
  markAsNotDone: (todos: Todo[], index: number) => void;
  markAsDone: (todos: Todo[], index: number) => void;
}

class Detail extends Component<Props, State> {
  public static navigationOptions = {
    title: 'Detail',
    headerRight: <View />
  };

  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.customBlue} />
        <View style={styles.topButtonContainer}>
          <Button
            text="Not done"
            onPress={() => {
              this.props.markAsNotDone(
                this.props.todo,
                navigation.getParam('index')
              );
              navigation.pop();
            }}
          />
        </View>
        <Text style={styles.primaryText}>
          {this.props.todo[navigation.getParam('index')].title}
        </Text>
        <Text style={styles.secondaryText}>
          {this.props.todo[navigation.getParam('index')].description}
        </Text>
        <Button
          text="MARK AS DONE"
          onPress={() => {
            this.props.markAsDone(
              this.props.todo,
              navigation.getParam('index')
            );
            navigation.pop();
          }}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
