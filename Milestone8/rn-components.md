# React Native Components vs. React Web Components

### What are the key differences between `<View>` and `<div>`?

- `<View>` is used in React Native to structure layouts, replacing `<div>` from the web.
- Unlike `<div>`, `<View>` maps to native UI elements in Android/iOS and doesn’t support HTML attributes.

---

### How does `StyleSheet.create()` improve performance compared to inline styles?

- `StyleSheet.create()` compiles styles just once, which improves runtime performance.
- Inline styles are recalculated on every render, which can cause slowdowns.

---

### Why doesn’t React Native use `className` like React web?

- React Native doesn’t use a DOM, so there's no concept of class selectors.
- Styling is done using JavaScript objects via the `style` prop instead of CSS classes.
