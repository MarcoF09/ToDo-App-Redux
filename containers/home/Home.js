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

  render() {
    return (
      <View>
        <StatusBar backgroundColor={Colors.customBlue} />

        <FlatList
          data={this.props.todo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <Item
              {...item.item}
              checkboxClick={() => {
                this.props.changeCheckBoxState(item.index);
              }}
            />
          )}
        />

        {this.props.todo.length > 0 ? (
          <Button
            text="CLEAR ALL DONE"
            styleButton={styles.button}
            onPress={() => {
              this.props.clearAllDone();
            }}
          />
        ) : (
          <Text style={styles.primaryText}>
            No task to display, please add a task!
          </Text>
        )}
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
  clearAllDone: () => {
    dispatch(Actions.clearAllDone());
  },
  changeCheckBoxState: index => {
    dispatch(Actions.changeCheckBoxState(index));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
