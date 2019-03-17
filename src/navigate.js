import { createStackNavigator ,createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Login from './components/login'

const AppNavigator = createStackNavigator({
  Home:Home,
  Login:Login
}, {
  initialRouteName: "Home"
}
);

const navigater = createAppContainer(AppNavigator);

export default navigater;