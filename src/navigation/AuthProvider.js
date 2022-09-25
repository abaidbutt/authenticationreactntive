import React, {createContext, useState} from 'react';
import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
/**
 * This provider is created
 * to access user in whole app
 */

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
            Alert.alert('You credentials is wrong', 'Try Again');
          }
        },
        register: async (email, password) => {
          try {
            const response = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            if (!response.user?.emailVerified) {
              const confirm = await firebase
                .auth()
                .currentUser.sendEmailVerification({
                  handleCodeInApp: true,
                  // url: 'app/email-verification',
                  url: 'https://auth.page.link',
                  android: {
                    installApp: true,
                    packageName: 'com.newapp',
                  },
                });
              Alert.alert('Verification Email has been send');

              console.log(response.user);
              console.log(confirm);
              // navigation.navigate('Login');
            }
          } catch (e) {
            console.log(e);
            Alert.alert('There is something went wrong', 'Try Again');
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
            Alert.alert('There is something went wrong', 'Try Again');
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
