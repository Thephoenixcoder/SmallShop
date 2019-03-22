import { createStackNavigator ,createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Login from './components/Login'
import CardDetail from './components/CardDetail'

const AppNavigator = createStackNavigator({
  HomeScreen:Home, //to navigate between screens 
  LoginScreen:Login,
  CardDetailScreen:CardDetail

}, {
  initialRouteName: "HomeScreen",
  headerMode: 'none'
}
);

const navigater = createAppContainer(AppNavigator);

export default navigater;