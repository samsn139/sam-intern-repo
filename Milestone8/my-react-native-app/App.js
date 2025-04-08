// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello, Focus Bear!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import Greeting from './components/Greeting';

// export default function App() {
//   return (
//     <SafeAreaView>
//       <Greeting />
//     </SafeAreaView>
//   );
// }

// import { ScrollView, SafeAreaView } from 'react-native';
// import InlineStyledBox from './components/InlineStyledBox';
// import SheetStyledBox from './components/SheetStyledBox';

// export default function App() {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <InlineStyledBox />
//         <SheetStyledBox />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }


import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Corrected import
import { SafeAreaView } from 'react-native';  // SafeAreaView remains from 'react-native'
import GestureComponent from './components/GestureComponent';
import AnimationComponent from './components/AnimationComponent';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureComponent />
        <AnimationComponent />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

