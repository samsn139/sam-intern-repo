import React from 'react';
import { View, Text } from 'react-native';

export default function InlineStyledBox() {
  return (
    <View style={{ backgroundColor: 'tomato', padding: 20, margin: 10 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>Inline Styled Box</Text>
    </View>
  );
}
