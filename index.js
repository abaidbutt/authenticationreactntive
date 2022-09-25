/**
 * @format
 */
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {AuthProvider} from './src/navigation/AuthProvider';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
function Main() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AuthProvider>
          <App />
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
AppRegistry.registerComponent(appName, () => Main);
