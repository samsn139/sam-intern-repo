# Reflection - API Calls in React Native

## Why is Axios preferred over fetch in some cases?

Axios is often preferred over the native `fetch` API for several reasons:

1. **Request and Response Interception**:
   - Axios supports request and response interceptors, which allows developers to modify requests before they are sent and responses before they are processed. This feature is useful for adding authentication tokens, logging, or handling error responses globally.

2. **Automatic JSON Transformation**:
   - Axios automatically transforms JSON data, while with `fetch`, you need to manually parse the response as JSON using `.json()`. This can save time and reduce boilerplate code.

3. **Error Handling**:
   - Axios provides better error handling. When a request fails (e.g., due to network errors), it returns a promise that is rejected with an error object, including status codes, headers, and response data. With `fetch`, only network errors are rejected; HTTP error status codes (like 404 or 500) do not trigger a rejection by default, which can lead to tricky error handling.

4. **Cancellation**:
   - Axios has built-in support for request cancellation using the `CancelToken` API, which can help in scenarios where requests need to be aborted. While the `fetch` API supports cancellation, it requires more complex handling, typically using `AbortController`.

5. **Support for Upload and Download Progress**:
   - Axios can track the progress of uploads and downloads, which can be useful for large file uploads or real-time progress bars. The native `fetch` API does not natively support progress events.

6. **Better Browser Compatibility**:
   - Axios works consistently across different browsers, while `fetch` might need polyfills to work in older browsers or environments, making Axios a more reliable option in some cases.

## How does Axios-Retry improve network reliability?

**Axios-Retry** is a plugin that helps improve network reliability by automatically retrying failed requests under certain conditions. It’s particularly useful for handling intermittent network failures or server-side issues. Here’s how it works:

1. **Automatic Retries**:
   - Axios-Retry allows requests to be retried automatically a specified number of times with configurable delay intervals. This can be useful for dealing with temporary network or server problems.

2. **Custom Retry Logic**:
   - You can customize the retry behavior based on certain conditions, such as retrying only on specific HTTP status codes (e.g., 500 or 503) or when certain types of errors occur (e.g., network timeouts).

3. **Exponential Backoff**:
   - The library supports exponential backoff strategies, meaning the time between retries increases progressively with each failed attempt. This helps to avoid overwhelming the server with too many requests in a short time.

4. **Logging and Debugging**:
   - Axios-Retry provides logging and debug features, allowing developers to monitor retries and understand the reasons behind request failures.

By using Axios-Retry, apps can improve user experience by handling transient errors more gracefully, reducing the impact of temporary connectivity issues, and providing more reliable network communication.

## How would you handle API failures gracefully in a React Native app?

Gracefully handling API failures in a React Native app is critical to ensuring a smooth user experience, especially when dealing with unstable network conditions or server errors. Here’s how to handle it:

1. **Error Boundaries**:
   - Use error boundaries in React Native to catch JavaScript errors and prevent the entire app from crashing. This helps in managing unexpected failures and provides a fallback UI for the user.

2. **User-Friendly Error Messages**:
   - Instead of showing raw error messages, provide user-friendly messages when an API call fails. For example, display a message like "Something went wrong. Please try again later" or provide a retry option.

3. **Retry Logic**:
   - Implement retry logic for transient errors such as network timeouts or server unavailability. You can use libraries like Axios-Retry or custom logic with exponential backoff to attempt the API call multiple times before failing.

4. **Fallback Data**:
   - In case of failure, consider providing fallback data or cached responses, especially for non-critical information. This can reduce the perceived impact of an error by showing the user data from a previous successful API call.

5. **Loading and Retry States**:
   - Show loading indicators while data is being fetched and provide a clear way for users to retry the operation if it fails. You can create a retry button or automatically retry the request after a delay.

6. **Handle Specific Status Codes**:
   - Handle different HTTP status codes in a manner suited to the situation. For example:
     - **400 Bad Request**: Show validation error messages to the user.
     - **401 Unauthorized**: Prompt the user to log in again.
     - **500 Internal Server Error**: Show a generic error message and potentially a retry option.

7. **Logging and Monitoring**:
   - Log API errors to an error tracking service (e.g., Sentry) to monitor failures in production. This allows you to track recurring issues and improve the app's reliability over time.

8. **Graceful Degradation**:
   - In situations where the app relies on third-party APIs, you can design it to degrade gracefully by offering alternative functionalities when the API is unavailable, ensuring users can still use the app in a limited capacity.

By implementing these strategies, you can improve the robustness of your app and provide a better experience even when API calls fail.
