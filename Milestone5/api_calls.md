### Why is it useful to create a reusable Axios instance?
A reusable Axios instance centralizes configuration like base URLs, headers, timeouts, and authentication tokens. This reduces code duplication and ensures consistency across the entire codebase.

### How does intercepting requests help with authentication?
Intercepting requests allows the app to automatically attach authentication tokens from local storage to each request, ensuring secure access to protected endpoints without repeating logic in every API call.

### What happens if an API request times out, and how can you handle it?
If an API request times out, Axios throws a timeout error. This can be caught and handled with custom error messages, retries, or fallback UI. It helps avoid hanging user interfaces and provides better user feedback.
