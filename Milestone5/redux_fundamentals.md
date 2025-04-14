### When should you use Redux instead of useState?

Redux is best used when:
- **State needs to be shared globally** between many components.
- **Complex state logic** is involved (e.g., actions, async logic, dependencies).
- You want **predictable state transitions** using reducers and actions.
- You want **better debugging and dev tools** support (Redux DevTools).
- You need to **separate UI logic from business logic**, improving maintainability.

In contrast, `useState` is perfect for **simple, local component state** that doesn't need to be accessed elsewhere in the app.


### What are the benefits of using selectors instead of directly accessing state?

Using **selectors** in Redux provides several advantages:

1. **Encapsulation and Reusability**  
   Selectors abstract away the logic for extracting data from the Redux store. This makes it easy to reuse them across multiple components, reducing code duplication.

2. **Improved Readability**  
   Named selectors like `getCounterValue` make it clear what piece of state is being accessed. This improves the overall readability and clarity of your code.

3. **Centralized Logic**  
   When you need to update how a value is calculated or derived from the state, you can do it in the selector without needing to refactor multiple components.

4. **Better Testability**  
   Since selectors are pure functions, they can be easily tested in isolation without requiring component rendering.

5. **Performance Optimization**  
   Selectors can be memoized (using tools like Reselect) to avoid unnecessary recalculations and re-renders, improving app performance.

6. **Decouples Components from State Shape**  
   By using selectors, your components become less dependent on the exact structure of the Redux state. If the state shape changes, you can just update the selectors accordingly.
