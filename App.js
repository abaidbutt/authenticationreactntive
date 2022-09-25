import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './src/navigation/AuthProvider';
import Loading from './src/components/Loading';
import ForgotScreen from './src/screens/ForgotScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  async function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <>
        <Stack.Navigator initialRouteName="Home">
          {user ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Forgot" component={ForgotScreen} />
            </>
          )}
        </Stack.Navigator>
      </>
    </>
  );
};

export default App;
