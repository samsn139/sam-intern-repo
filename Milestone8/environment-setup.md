# React Native Environment Setup with Expo & Metro

## What is the role of Metro in React Native development?

Metro is a JavaScript bundler specifically optimized for React Native. It watches and compiles JavaScript code, serves the bundle to the app, and supports features like Fast Refresh and source maps for debugging. Metro makes sure the app reflects the latest changes quickly during development.

## How does Expo simplify React Native development?

Expo removes the need for Xcode or Android Studio in the initial stages of React Native development. It wraps native modules, provides prebuilt APIs (camera, location, etc.), and offers a smooth QR-based deployment process to physical devices. Expo speeds up development, testing, and deployment without deep native code knowledge.

## What issues did you encounter, and how did you resolve them?

- **Issue**: `expo` command not found  
  **Fix**: Installed Expo CLI globally using `npm install -g expo-cli`.

- **Issue**: Phone couldn't connect to Metro server  
  **Fix**: Ensured my laptop and phone were on the same network and allowed local network access in system permissions.

