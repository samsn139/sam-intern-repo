### When should you use Redux instead of useState?

Redux is best used when:
- **State needs to be shared globally** between many components.
- **Complex state logic** is involved (e.g., actions, async logic, dependencies).
- You want **predictable state transitions** using reducers and actions.
- You want **better debugging and dev tools** support (Redux DevTools).
- You need to **separate UI logic from business logic**, improving maintainability.

In contrast, `useState` is perfect for **simple, local component state** that doesn't need to be accessed elsewhere in the app.
