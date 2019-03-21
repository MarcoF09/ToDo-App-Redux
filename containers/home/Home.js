import React, { Component } from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  FlatList
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
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <View />,
    headerRight: (
      <View style={styles.headerRightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("NewTask")}>
          <Text style={styles.headerRightText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  });

  componentDidMount() {
    this.props.getToDoData();
  }

  renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <Button> This is footer </Button>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <StatusBar backgroundColor={Colors.customBlue} />
        <FlatList
          data={this.props.todo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
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
          )}
          ListFooterComponent={
            this.props.todo.length > 0 ? (
              <Button
                text="CLEAR ALL DONE"
                styleButton={styles.button}
                onPress={() => {
                  this.props.clearAllDone(this.props.todo);
                }}
              />
            ) : (
              <Text style={styles.primaryText}>
                No task to display, please add a task!
              </Text>
            )
          }
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
