// import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Navigation = () => {
  return (
    <View>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
