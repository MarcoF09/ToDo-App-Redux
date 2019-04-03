import {
  createAppContainer,
  createStackNavigator,
  NavigationContainer
} from 'react-navigation';
import { Colors } from '../colors/Colors';
import Detail from '../containers/detail';
import Home from '../containers/home';
import NewTask from '../containers/newtask';

const MainNavigator: NavigationContainer = createStackNavigator(
  {
    Home,
    NewTask,
    Detail
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.customBlue
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1
      }
    }
  }
);

export const AppNavigator = createAppContainer(MainNavigator);
