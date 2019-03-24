import { createStackNavigator ,createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Login from './components/Login'
import placesDetail from './components/PlacesDetail'

const AppNavigator = createStackNavigator({
  HomeScreen:Home, //to navigate between screens 
  LoginScreen:Login,
  CardDetailScreen:placesDetail

}, {
  initialRouteName: "LoginScreen",
  headerMode: 'none'
}
);

const navigater = createAppContainer(AppNavigator);

export default navigater;