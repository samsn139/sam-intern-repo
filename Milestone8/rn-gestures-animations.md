 # Handling Gestures and Animations in React Native

### What are the differences between Animated and react-native-reanimated?

- **Animated** is the built-in React Native API, easier to start with but less performant for complex animations.
- **react-native-reanimated** offers better performance and smoother animations by offloading work to the native thread, ideal for gesture-based UIs.

---

### How does react-native-gesture-handler improve gesture performance?

It processes gestures natively, avoiding JavaScript thread delays. This ensures smoother gesture handling, especially in apps with heavy rendering or background logic.

---

### When would you use gestures instead of buttons in a UI?

- To create more natural interactions (e.g., swipe to delete).
- When enhancing accessibility and UX in mobile-first designs.
- In features like side menus, drawers, carousels, or drag-and-drop UIs.

---

### Why is InteractionManager.runAfterInteractions necessary?

It ensures animations or heavy operations run **after** user interactions (like transitions or navigation) complete, improving perceived performance and avoiding jank during UI updates.
