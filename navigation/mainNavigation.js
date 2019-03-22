import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../containers/home/Home";
import NewTask from "../containers/newtask/NewTask";
import { Colors } from "../colors/Colors";

const MainNavigator = createStackNavigator(
  {
    Home: Home,
    NewTask: NewTask
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.customBlue
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        flex: 1
      }
    }
  }
);

export const AppNavigator = createAppContainer(MainNavigator);
