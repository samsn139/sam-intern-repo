// components/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
