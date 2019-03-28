import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import { Colors } from '../../colors/Colors';
import { mapDispatchToProps } from './mapDispatchToProps';
import { styles } from './styles';

interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
  addToDo: (title: string, description: string) => void;
}

interface NewTaskState {
  firstInputColor: string;
  secondInputColor: string;
  title: string;
  description: string;
}

class NewTask extends Component<Props, NewTaskState> {
  public static navigationOptions = ({
    navigation
  }: NavigationScreenProp<NavigationRoute>) => ({
    title: 'New Task',
    headerRight: (
      <View style={styles.headerContainerRight}>
        <TouchableOpacity
          onPress={() => {
            navigation.getParam('addToDo')();
            navigation.pop();
          }}
          style={styles.textContainerRight}
        >
          <Text style={styles.statusBarText}>Save</Text>
        </TouchableOpacity>
      </View>
    ),
    headerLeft: (
      <View style={styles.headerContainerLeft}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.textContainerLeft}
        >
          <Text style={styles.statusBarText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )
  });

  constructor(props: Props) {
    super(props);
    this.state = {
      firstInputColor: Colors.lightGrey,
      secondInputColor: Colors.lightGrey,
      title: '',
      description: ''
    };
  }

  public componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      addToDo: this.dispatchAddToDo
    });
  }

  public dispatchAddToDo = () => {
    this.props.addToDo(this.state.title, this.state.description);
  };

  public onChangeTitle = (text: string) => {
    this.setState({ title: text });
  };

  public onChangeDescription = (text: string) => {
    this.setState({ description: text });
  };

  public onFocus = (input: string) => {
    if (input === 'first') {
      this.setState({
        firstInputColor: Colors.pink
      });
    } else {
      this.setState({
        secondInputColor: Colors.pink
      });
    }
  };
  public onBlur = (input: string) => {
    if (input === 'first') {
      this.setState({
        firstInputColor: Colors.lightGrey
      });
    } else {
      this.setState({
        secondInputColor: Colors.lightGrey
      });
    }
  };

  public render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.customBlue} />
        <TextInput
          onFocus={() => this.onFocus('first')}
          onBlur={() => this.onBlur('first')}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: this.state.firstInputColor,
            fontSize: 36,
            color: Colors.black,
            fontFamily: 'SourceSansPro-Regular'
          }}
          placeholder="Task title"
          multiline={false}
          onChangeText={text => this.onChangeTitle(text)}
        />
        <TextInput
          onFocus={() => this.onFocus('second')}
          onBlur={() => this.onBlur('second')}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: this.state.secondInputColor,
            textAlignVertical: 'top',
            height: 90,
            fontFamily: 'SourceSansPro-Regular',
            fontSize: 14
          }}
          placeholder="Task Description"
          multiline={true}
          numberOfLines={5}
          onChangeText={text => this.onChangeDescription(text)}
        />
      </View>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewTask);
