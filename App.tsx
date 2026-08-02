/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes';
import { store } from './src/redux/store';
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle='light-content' />
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
