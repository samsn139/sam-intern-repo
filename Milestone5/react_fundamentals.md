# React Fundamentals

## React & Tailwind CSS Setup

### What challenges did you face during setup?

While setting up React with Tailwind CSS, the main challenge I faced was ensuring that Tailwind's CSS was being correctly applied.

## React Components

### Why are components important in React?

Components are important in React because they allow developers to break down the UI into smaller, reusable pieces. This makes it easier to maintain, test, and update code. React components are like the building blocks of an application.


### What happens if we modify state directly instead of using setState?

Modifying state directly (e.g., `count = count + 1`) bypasses React’s state management and won’t trigger a re-render. This means the UI won’t update, and it can lead to bugs and unpredictable behavior. Using `setCount` ensures React properly tracks changes and updates the DOM accordingly.
