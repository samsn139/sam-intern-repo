import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Greeting() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, Focus Bear!</Text>
      <Image source={require('../assets/icon.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
