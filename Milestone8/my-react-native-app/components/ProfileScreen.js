// components/ProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Profile Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
