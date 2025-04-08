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


// import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Corrected import
// import { SafeAreaView } from 'react-native';  // SafeAreaView remains from 'react-native'
// import GestureComponent from './components/GestureComponent';
// import AnimationComponent from './components/AnimationComponent';

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={{ flex: 1 }}>
//         <GestureComponent />
//         <AnimationComponent />
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import SettingsScreen from './components/SettingsScreen';

// Stack Navigator
const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

// Tab Navigator
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

// Deep Linking Configuration
const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'profile',
      Settings: 'settings',
    },
  },
};

// App Component
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer linking={linking}>
        {/* Uncomment any of the following navigators based on the need */}
        {/* <StackNavigator /> */}
        <TabNavigator />
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
