import React from 'react';
import { Alert, Text, View } from 'react-native';
import { GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { runOnJS } from 'react-native-reanimated';

const GestureComponent = () => {
  const onSwipe = (direction) => {
    Alert.alert(`Swiped ${direction}`);
  };

  const onLongPress = () => {
    Alert.alert('Long Press Detected!');
  };

  // Swipe Gesture (left or right)
  const swipeGesture = Gesture.Pan()
    .onEnd((e) => {
      if (e.translationX > 50) {
        runOnJS(onSwipe)('right');
      } else if (e.translationX < -50) {
        runOnJS(onSwipe)('left');
      }
    });

  // Long Press Gesture
  const longPressGesture = Gesture.LongPress()
    .onEnd(() => {
      runOnJS(onLongPress)();
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={swipeGesture}>
        <Animated.View
          style={{
            padding: 40,
            margin: 20,
            backgroundColor: '#e0f7fa',
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          <Text>Swipe me left or right</Text>
        </Animated.View>
      </GestureDetector>

      <GestureDetector gesture={longPressGesture}>
        <Animated.View
          style={{
            padding: 40,
            margin: 20,
            backgroundColor: '#ffeb3b',
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Text>Long press me!</Text>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default GestureComponent;
