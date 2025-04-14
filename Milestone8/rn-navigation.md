# Reflection on Navigation in React Native

### 1. Key Differences Between Stack, Tab, and Drawer Navigation
- **Stack Navigation**: Manages a stack of screens, where each new screen is placed on top of the stack. You can use this for scenarios like navigating from a home screen to a detailed screen and allowing users to go back.
- **Tab Navigation**: Allows users to switch between different screens using a bottom tab bar. Common for apps with multiple major sections, like Home, Profile, and Settings.
- **Drawer Navigation**: A sliding menu (or drawer) that can be used for navigation. It typically shows up from the left side and provides quick access to key sections of the app.

### 2. How React Navigation Handles Screen Transitions
React Navigation handles screen transitions using built-in transitions, such as sliding or fading. When a user navigates between screens, React Navigation pushes the new screen onto the stack and animates the transition.

### 3. How Would You Implement Deep Linking in a React Native App?
Deep linking is handled by configuring the `linking` prop in `NavigationContainer`. It maps URLs (like `myapp://home`) to the corresponding screens in the app. You can configure different paths for different screens, enabling external links to open specific screens in your app.
