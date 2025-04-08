import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Animated, { Easing, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { InteractionManager } from 'react-native';

const AnimationComponent = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const translateY = useSharedValue(0);

  const startAnimation = () => {
    // Ensure animations only start after interactions are complete
    InteractionManager.runAfterInteractions(() => {
      translateY.value = withSpring(animationStarted ? 0 : 100, {
        damping: 3,
        stiffness: 100,
      });
      setAnimationStarted(!animationStarted);
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={{
          width: 200,
          height: 100,
          backgroundColor: '#f44336',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ translateY: translateY.value }],
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Slide me up and down!</Text>
      </Animated.View>

      <Text
        onPress={startAnimation}
        style={{ marginTop: 20, fontSize: 18, color: '#00796b' }}
      >
        Tap to start animation
      </Text>
    </View>
  );
};

export default AnimationComponent;
