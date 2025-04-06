### When should you use useEffect instead of handling logic inside event handlers?

- Use `useEffect` for side effects that need to run *after* render or on dependency changes (like fetching data on mount, setting up event listeners, or timers).
- Event handlers are only triggered by user interactions — `useEffect` handles things that happen as part of the component lifecycle.

---

### What happens if you don’t provide a dependency array?

- The effect runs *after every render*.
- This can cause unwanted API calls, performance degradation, or infinite loops if state is updated inside the effect.

---

### How can improper use of useEffect cause performance issues?

- **Re-renders**: If the effect changes state without proper dependencies, it can cause an infinite loop.
- **Memory leaks**: If you forget to clean up subscriptions, listeners, or timers, they persist even after the component unmounts.
- **Unnecessary computations**: Running expensive operations every render when they only need to run once or on specific changes.


### How does useMemo improve performance?

useMemo caches the result of a computation and only re-runs it when its dependencies change. This prevents expensive operations from re-executing unnecessarily, especially during re-renders.

---

### When should you avoid using useMemo?

- When the computation is cheap and won’t impact performance.
- When it adds complexity without measurable gain.
- Overuse can make code harder to understand without real benefit.

---

### What happens if you remove useMemo from your implementation?

The expensive calculation will run **every time** the component re-renders, even if the data hasn’t changed. This can significantly degrade performance, especially with large datasets or CPU-heavy operations.
