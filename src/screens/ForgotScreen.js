import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
export default function ForgotScreen({navigation}) {
  const [email, setEmail] = useState('');

  //   const {login} = useContext(AuthContext);
  const handleForgot = async () => {
    if (!email) {
      Alert.alert('Please type your email');
    } else {
      try {
        const response = await auth().sendPasswordResetEmail(email);
        console.log(response);
        Alert.alert('Email has been sent', 'Check your email');
        navigation.navigate('Login');
      } catch (err) {
        Alert.alert('There is something wrong');
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reset Password</Text>
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />

      <FormButton buttonTitle="Reset" onPress={() => handleForgot()} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>New user Join Here</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Already Have an Account </Text>
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
