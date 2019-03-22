import React, { Component } from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Animated,
  TouchableWithoutFeedback,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { Colors } from "../../colors/Colors";
import { Item } from "../../components/item";
import { Button } from "../../components/button";
import { styles } from "./styles";
import { Actions } from "../../actions/actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.moveAnimation = new Animated.ValueXY({ x: -100, y: 30 });
    this.state = {
      deleteButtonState: false,
      refreshing: false
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <View style={styles.headerLeftContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.getParam("animation")();
          }}
        >
          <Text style={styles.headerText}>Edit/Cancel</Text>
        </TouchableOpacity>
      </View>
    ),
    headerRight: (
      <View style={styles.headerRightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("NewTask")}>
          <Text style={styles.headerText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  });

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      animation: this.animateDeleteButton
    });
    this.props.getToDoData();
  }

  animateDeleteButton = () => {
    if (!this.state.deleteButtonState) {
      Animated.spring(this.moveAnimation, {
        toValue: { x: 6, y: 30 }
      }).start();
      this.setState({ deleteButtonState: true });
    } else {
      Animated.spring(this.moveAnimation, {
        toValue: { x: -100, y: 30 }
      }).start();
      this.setState({ deleteButtonState: false });
    }
  };

  renderItem = (item, navigation) => {
    return (
      <View>
        <Animated.View
          style={[styles.deleteContainer, this.moveAnimation.getLayout()]}
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
            navigation.push("Detail", {
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

  renderFooter = () => {
    return this.props.todo.length > 0 ? (
      <Button
        text="CLEAR ALL DONE"
        styleButton={styles.button}
        onPress={() => {
          this.props.clearAllDone(this.props.todo);
        }}
      />
    ) : (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={Colors.customBlue} />
      </View>
    );
  };

  render() {
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

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = dispatch => ({
  getToDoData: () => {
    dispatch(Actions.getToDoData());
  },
  clearAllDone: todos => {
    dispatch(Actions.clearAllDone(todos));
  },
  changeCheckBoxState: (todos, index) => {
    dispatch(Actions.changeCheckBoxState(todos, index));
  },
  deleteItem: (todos, index) => {
    dispatch(Actions.deleteItem(todos, index));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
