// import {StyleSheet, Text, View, TextInput} from 'react-native';
// import React, {useState} from 'react';

// const SignupScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   return (
//     <View >
//       <TextInput
//         value={email}
//         onChangeText={setEmail}
//         placeholder="new value here"
//       />
//     </View>
//   );
// };

// export default SignupScreen;

// const styles = StyleSheet.create({});
import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Signup"
        onPress={() => register(email, password)}
      />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Login Here </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 20,
    color: '#6646ee',
  },
});
