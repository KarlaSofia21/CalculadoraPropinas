import { registerRootComponent } from 'expo';

import App from './App';
//import Login from './app/screens/Login';
/*import Header from './app/screens/Header'
import Carousel from './app/screens/Carousel';
import Collage from './app/screens/Collage';
import BottomMenu from './app/screens/BottomMenu';*/

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

//registerRootComponent(Login);
/*registerRootComponent(Header);
registerRootComponent(Carousel);
registerRootComponent(Collage);
registerRootComponent(BottomMenu);*/

import Historial from './app/components/Historial';
import Monto from './app/components/Monto';
import Resultado from './app/components/Resultado';