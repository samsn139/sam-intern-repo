# AI Tools for Development

## Which AI tools did you try?

1. GitHub Copilot
2. ChatGPT

## What worked well? What didn’t?

- **What worked well**:
  - **GitHub Copilot**: It was very effective for code suggestions and completing functions based on comments. The suggestions were generally accurate, especially for boilerplate code.
  - **ChatGPT**: It helped me understand new concepts and debug simple problems. The explanations were clear and concise.

- **What didn’t work**:
  - **GitHub Copilot**: Sometimes, Copilot would suggest code that wasn’t aligned with best practices or the intended logic. It’s useful, but it needs careful review.

## When do you think AI is most useful for coding?

AI is most useful for:
- **Debugging**: Quickly spotting errors and suggesting fixes.
- **Learning new concepts**: Explaining unfamiliar algorithms, frameworks, or languages.

## Adding this part based on Feedback:

If GitHub Copilot or any other AI-powered tool provides a solution that involves **hardcoding sensitive data** (e.g., API keys, passwords) directly in the code, I would not accept it. For example:

Here’s an example of how to connect to your database, with the password hardcoded in the code:
const dbPassword = 'your-password';
const connection = new Database('localhost', dbPassword);

This response is unsafe because storing sensitive data directly in the code exposes it to potential security risks, especially if the code is shared or uploaded to version control. Instead, the password should be stored in environment variables or a secrets management service to ensure security and follow best practices.

Why would I reject this?
Hardcoding sensitive information in the code violates security best practices and can lead to data breaches, unauthorized access, and exposure of private credentials. A better solution would involve using environment variables or a configuration management tool to keep sensitive information secure and out of the source code.
