import { createAppContainer, createStackNavigator } from "react-navigation";
import About from './src/About';
import Ano from './src/Ano';
import Details from './src/Details';
import Home from './src/Home';
import Marca from './src/Marca';
import Modelos from './src/Modelos';

const AppNavigator = createStackNavigator(

  {
    Home: Home,
    Marca: Marca,
    About: About,
    Modelos: Modelos,
    Ano: Ano,
    Details: Details
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);