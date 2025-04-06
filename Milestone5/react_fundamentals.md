# React Fundamentals

## React & Tailwind CSS Setup

### What challenges did you face during setup?

While setting up React with Tailwind CSS, the main challenge I faced was ensuring that Tailwind's CSS was being correctly applied.

## React Components

### Why are components important in React?

Components are important in React because they allow developers to break down the UI into smaller, reusable pieces. This makes it easier to maintain, test, and update code. React components are like the building blocks of an application.


### What happens if we modify state directly instead of using setState?

Modifying state directly (e.g., `count = count + 1`) bypasses React’s state management and won’t trigger a re-render. This means the UI won’t update, and it can lead to bugs and unpredictable behavior. Using `setCount` ensures React properly tracks changes and updates the DOM accordingly.


### What are some common issues when working with lists in React?

- **Missing keys**: React needs a unique `key` prop on each item to track updates efficiently.
- **Mutating state**: Directly modifying the array (e.g., with `.push()`) instead of using `setState` can cause unexpected behavior.
- **Re-render performance**: For large lists, inefficient rendering or improper key usage can lead to performance issues.
- **Controlled input issues**: Forgetting to update input state correctly can lead to UI bugs.


### What are the advantages of client-side routing?

- **Faster navigation**: Pages are swapped instantly without full reloads.
- **Smoother user experience**: Transitions between routes feel seamless.
- **Better control**: You can easily implement route guards, redirects, and nested routes.
- **Single-page application**: Allows your app to behave like a native app with dynamic content loading.
