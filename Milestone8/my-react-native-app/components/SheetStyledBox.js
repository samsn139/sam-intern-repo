import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export default function SheetStyledBox() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;

  return (
    <View style={[styles.box, isSmallScreen && styles.smallBox]}>
      <Text style={styles.text}>Sheet Styled Box</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'skyblue',
    padding: 20,
    margin: 10,
  },
  smallBox: {
    backgroundColor: 'steelblue',
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
  },
});
