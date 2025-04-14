# Debugging React Native Apps

## How does Metro help in debugging a React Native app?

Metro, the JavaScript bundler for React Native, helps in debugging by providing detailed logs and errors that can give insight into issues with JavaScript code. It shows warnings, errors, and debugging information directly in the terminal or browser. This allows developers to identify problems in their JavaScript code and fix them efficiently.

## What debugging features does Flipper provide?

Flipper provides several powerful debugging features for React Native apps, including:
- **React DevTools** integration for inspecting component hierarchies and state.
- **Network Inspector** to monitor network requests and responses.
- **Log viewer** to examine logs and debug messages.
- **Performance monitoring** to track app performance, including frames per second (FPS), memory usage, and CPU usage.

These features allow developers to get a deeper understanding of app behavior and optimize performance.

## How can you inspect network requests in React Native?

Network requests in React Native can be inspected using Flipper's **Network Inspector** or by examining the **Console Logs**. The Network Inspector shows all the requests made from the app, including headers, responses, and payloads. This helps in identifying issues related to API calls, such as incorrect request format, slow responses, or failed requests. You can also use tools like **React Native Debugger** or **Chrome DevTools** to inspect network traffic when using `fetch` or `axios` for network requests.
