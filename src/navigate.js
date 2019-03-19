import { createStackNavigator ,createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Login from './components/Login'
import CardDetail from './components/CardDetail'

const AppNavigator = createStackNavigator({
  Home:Home,
  Login:Login,
  CardDetail:CardDetail

}, {
  initialRouteName: "Home",
  headerMode: 'none'
}
);

const navigater = createAppContainer(AppNavigator);

export default navigater;