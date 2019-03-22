import React, { Component } from "react";
import { styles } from "./styles";
import { Colors } from "../../colors/Colors";
import { Strings } from "../../Strings/strings";
import {
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import { Actions } from "../../actions/actions";
import { connect } from "react-redux";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstInputColor: Colors.lightGrey,
      secondInputColor: Colors.lightGrey,
      title: "",
      description: ""
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "New Task",
    headerRight: (
      <View style={styles.headerContainerRight}>
        <TouchableOpacity
          onPress={() => {
            navigation.getParam("addToDo")();
            navigation.pop();
          }}
          underlayColor={Colors.white}
          style={styles.textContainerRight}
        >
          <Text style={styles.statusBarText}>{Strings.save}</Text>
        </TouchableOpacity>
      </View>
    ),
    headerLeft: (
      <View style={styles.headerContainerLeft}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          underlayColor={Colors.white}
          style={styles.textContainerLeft}
        >
          <Text style={styles.statusBarText}>{Strings.cancel}</Text>
        </TouchableOpacity>
      </View>
    )
  });

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      addToDo: this.dispatchAddToDo
    });
  }

  dispatchAddToDo = () => {
    this.props.addToDo(this.state.title, this.state.description);
  };

  onChangeTitle = text => {
    this.setState({ title: text });
  };

  onChangeDescription = text => {
    this.setState({ description: text });
  };

  onFocus = input => {
    if (input == "first") {
      this.setState({
        firstInputColor: Colors.pink
      });
    } else {
      this.setState({
        secondInputColor: Colors.pink
      });
    }
  };
  onBlur = input => {
    if (input == "first") {
      this.setState({
        firstInputColor: Colors.lightGrey
      });
    } else {
      this.setState({
        secondInputColor: Colors.lightGrey
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.customBlue} />
        <TextInput
          onFocus={() => this.onFocus("first")}
          onBlur={() => this.onBlur("first")}
          style={[
            { borderBottomColor: this.state.firstInputColor },
            styles.textInput
          ]}
          placeholder={Strings.titlePlaceHolder}
          multiline={false}
          onChangeText={text => this.onChangeTitle(text)}
        />
        <TextInput
          onFocus={() => this.onFocus("second")}
          onBlur={() => this.onBlur("second")}
          style={[
            {
              borderBottomColor: this.state.secondInputColor
            },
            styles.textDescriptionInput
          ]}
          placeholder={Strings.descriptionPlaceHolder}
          multiline={true}
          numberOfLines={5}
          onChangeText={text => this.onChangeDescription(text)}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToDo: (title, description) => {
    dispatch(Actions.addToDo(title, description));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewTask);
