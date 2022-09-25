import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

export default function HomeScreen({navigation}) {
  const {user, logout} = useContext(AuthContext);
  useEffect(() => {
    if (!user?.emailVerified) {
      navigation.navigate('Login');
    }
  }, [user]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome user {user?.uid}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
