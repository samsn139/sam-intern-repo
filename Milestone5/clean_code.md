# Clean Code Reflections

## Unit Testing 

### How do unit tests help keep code clean?
- Unit tests encouraged me to break code into smaller, testable functions.
- They provided confidence when making changes or refactoring.
- Tests act as living documentation for how the function should behave.

### What issues did you find while testing?
- I forgot to handle division by zero initially. Writing a test for it helped me improve the function with a proper error check.


## Handling Errors & Edge Cases

### What was the issue with the original code?
The original function did not validate the types of inputs. If a user passed a string or None, it would crash.

### How does handling errors improve reliability?
By checking inputs and using guard clauses, the function now avoids crashes and provides meaningful error messages. This makes the code more reliable, easier to debug, and safer to use in production.


## Commenting & Documentation

### When should you add comments?
You should add comments when the logic is complex, when the code's intention is not immediately clear, or when you need to explain the rationale behind a certain design choice. Comments are also important for documenting public functions, explaining edge cases, and clarifying assumptions.

### When should you avoid comments and instead improve the code?
You should avoid adding comments when the code is already self-explanatory. Instead of commenting obvious code, refactor the code to make it more readable and understandable. Using meaningful variable names, breaking down large functions, and simplifying logic can often eliminate the need for comments.
