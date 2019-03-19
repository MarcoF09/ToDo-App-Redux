import React, { Component } from "react";
import { styles } from "./styles";
import { Colors } from "../../colors/Colors";
import { StatusBar, View, Text } from "react-native";
import { Button } from "../../components/button";
import { Actions } from "../../actions/actions";
import { connect } from "react-redux";

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Detail",
    headerRight: <View />
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.customBlue} />
        <View style={styles.topButtonContainer}>
          <Button
            text="Not done"
            onPress={() => {
              this.props.markAsNotDone(navigation.getParam("index"));
              navigation.pop();
            }}
          />
        </View>
        <Text style={styles.primaryText}>
          {this.props.todo[navigation.getParam("index")]["title"]}
        </Text>
        <Text style={styles.secondaryText}>
          {this.props.todo[navigation.getParam("index")]["description"]}
        </Text>
        <Button
          text="MARK AS DONE"
          onPress={() => {
            this.props.markAsDone(navigation.getParam("index"));
            navigation.pop();
          }}
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
  markAsNotDone: index => {
    dispatch(Actions.markAsNotDone(index));
  },
  markAsDone: index => {
    dispatch(Actions.markAsDone(index));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
