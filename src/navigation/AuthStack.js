import React from 'react';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        // options={{header: () => null}}
      />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
{"additionalUserInfo":
 {"isNewUser": true}, 
 "user": {"displayName": null, "email": "bestabaidullahbutt@gmail.com", 
 "emailVerified": false, "isAnonymous": false, 
 "metadata": [Object], "phoneNumber": null, "photoURL": null,
  "providerData": [Array], "providerId": "firebase",
   "tenantId": null, "uid": "P9zTrOsSU6ToYv4vGpovYGmHsUF2"}}
LOG  {"displayName": null, "email": "bestabaidullahbutt@gmail.com",
 "emailVerified": false, "isAnonymous": false,
  "metadata": {"creationTime": 1664101706988, "lastSignInTime": 1664101706988}, 
  "phoneNumber": null, "photoURL": null, "providerData": [[Object]], 
  "providerId": "firebase", "tenantId": null, "uid": "P9zTrOsSU6ToYv4vGpovYGmHsUF2"}"appAssociation": "AUTO",
  "rewrites": [ { "source": "/**", "dynamicLinks": true } ]


  "appAssociation": "AUTO",
"rewrites": [ { "source": "/**", "dynamicLinks": true } ]
google-site-verification=LT8IxIMC1QOYrfUBJBaLdXEVI3DqGDO8PdNyBcc6HQM