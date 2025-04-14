# React Native Stylesheets vs CSS-in-JS

### Why does React Native use camelCase instead of traditional CSS properties?

React Native uses JavaScript objects for styling instead of external stylesheets. CamelCase keys align with JavaScript syntax and avoid conflicts with reserved words (like `float`).

---

### What are the benefits of using StyleSheet.create() over inline styles?

- Styles are cached and compiled once, improving performance.
- Code is more readable and maintainable.
- Centralized styles reduce repetition.

---

### How would you handle different screen sizes in React Native?

- Use `useWindowDimensions()` or `Dimensions.get('window')` to detect screen size.
- Apply conditional styles based on width or height.
- Use responsive libraries like `react-native-responsive-screen` or `react-native-size-matters`.
