import React, { Component } from "react";
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  FlatList
} from "react-native";
import { Strings } from "../../Strings/strings";
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
                this.props.changeCheckBoxState(item.index);
              }}
            />
          )}
        />

        {this.props.todo.length > 0 ? (
          <Button
            text={Strings.clearAllDone}
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
