import React, { Component } from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  ListRenderItemInfo,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  AnimatedValue,
  NavigationRoute,
  NavigationScreenProp
} from 'react-navigation';
import { connect } from 'react-redux';
import { Colors } from '../../colors/Colors';
import { Button } from '../../components/button';
import { Item } from '../../components/item';
import { State, Todo } from '../../types/globalTypes';
import { mapDispatchToProps } from './mapDispatchToProps';
import { mapStateToProps } from './mapStateToProps';
import { styles } from './styles';

interface Props {
  todo: Todo[];
  navigation: NavigationScreenProp<NavigationRoute>;
  getToDoData: () => void;
  clearAllDone: (todos: Todo[]) => void;
  changeCheckBoxState: (todos: Todo[], index: number) => void;
  deleteItem: (todos: Todo[], index: number) => void;
}

interface HomeState extends State {
  deleteButtonState: boolean;
  moveAnimation: AnimatedValue;
}

class Home extends Component<Props, HomeState> {
  public static navigationOptions = ({
    navigation
  }: NavigationScreenProp<NavigationRoute>) => ({
    title: 'Home',
    headerLeft: (
      <View style={styles.headerLeftContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.getParam('animation')();
          }}
        >
          <Text style={styles.headerText}>Edit/Cancel</Text>
        </TouchableOpacity>
      </View>
    ),
    headerRight: (
      <View style={styles.headerRightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('NewTask')}>
          <Text style={styles.headerText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  });

  constructor(props: Props) {
    super(props);
    this.state = {
      todo: [],
      moveAnimation: new Animated.ValueXY({ x: -100, y: 30 }),
      deleteButtonState: false
    };
  }

  public componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      animation: this.animateDeleteButton
    });
    this.props.getToDoData();
  }

  public animateDeleteButton = (): void => {
    if (!this.state.deleteButtonState) {
      Animated.spring(this.state.moveAnimation, {
        toValue: { x: 6, y: 30 }
      }).start();
      this.setState({ deleteButtonState: true });
    } else {
      Animated.spring(this.state.moveAnimation, {
        toValue: { x: -100, y: 30 }
      }).start();
      this.setState({ deleteButtonState: false });
    }
  };

  public renderItem = (
    item: ListRenderItemInfo<Todo>,
    navigation: NavigationScreenProp<NavigationRoute>
  ) => {
    return (
      <View>
        <Animated.View
          style={[styles.deleteContainer, this.state.moveAnimation.getLayout()]}
        >
          <TouchableWithoutFeedback
            style={styles.buttonDelete}
            onPress={() => {
              this.props.deleteItem(this.props.todo, item.index);
            }}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableWithoutFeedback>
        </Animated.View>

        <Item
          onPress={() => {
            navigation.push('Detail', {
              index: item.index
            });
          }}
          {...item.item}
          checkboxClick={() => {
            this.props.changeCheckBoxState(this.props.todo, item.index);
          }}
        />
      </View>
    );
  };

  public renderFooter = () => {
    return this.props.todo.length > 0 ? (
      <Button
        text="CLEAR ALL DONE"
        styleButton={styles.button}
        onPress={() => {
          this.props.clearAllDone(this.props.todo);
        }}
      />
    ) : (
      <View>
        <ActivityIndicator size="large" color={Colors.customBlue} />
      </View>
    );
  };

  public render() {
    const { navigation } = this.props;
    console.log(this.props.todo.length);
    return (
      <View>
        <StatusBar backgroundColor={Colors.customBlue} />
        <FlatList
          data={this.props.todo}
          extraData={this.props}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => this.renderItem(item, navigation)}
          ListFooterComponent={() => this.renderFooter()}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
