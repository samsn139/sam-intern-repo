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


## Refactoring Code for Simplicity

### What made the original code complex?
The original code was complex because it mixed multiple responsibilities into a single function: calculating discounts, shipping, and the total order value. It also had deeply nested logic, and the calculation was spread throughout the function, making it difficult to read and maintain.

### How did refactoring improve it?
By refactoring the code, we extracted each concern into its own function, improving readability and maintainability. Each function now has a single responsibility and is easier to understand. The main function is now simpler, focusing on orchestrating the calculation by calling smaller, more focused functions.


## Avoiding Code Duplication

### What were the issues with duplicated code?
The duplicated code led to redundancy, making the codebase harder to maintain and more error-prone. Any change in the logic (e.g., changing how discounts are applied) would have to be made in multiple places, increasing the chances of inconsistencies.

### How did refactoring improve maintainability?
By refactoring the code, we eliminated duplication by centralizing the logic into a single function. This improves maintainability because any future changes (such as altering the discount logic) only need to be applied in one place. It also reduces the chance of introducing errors or bugs due to inconsistent code.


## Writing Small, Focused Functions

### Why is breaking down functions beneficial?
Breaking down functions into smaller, focused units allows for easier understanding and maintenance. It enhances readability, making it easier for other developers to follow the logic. Additionally, small functions are easier to test and debug.

### How did refactoring improve the structure of the code?
By refactoring the function, the logic became more modular and easier to follow. Each function now has a single responsibility, which makes the code more readable and reusable. The refactored code also makes unit testing more straightforward, as each function performs a discrete task.


## Naming Variables & Functions

### What makes a good variable or function name?
A good variable or function name is descriptive and meaningful. It should clearly convey its purpose or action in the code. Names should be concise but unambiguous. For functions, it's best to use verbs to indicate actions (e.g., `calculate`, `fetch`, `update`).

### What issues can arise from poorly named variables?
Poorly named variables can lead to confusion, making it harder for developers to understand the code. This can result in bugs, longer debugging times, and difficulty maintaining the code. Unclear names increase the cognitive load when trying to understand the code, making it less readable.

### How did refactoring improve code readability?
Refactoring the code with clear, descriptive names makes the purpose of each variable and function much easier to understand. It eliminates ambiguity and improves the overall readability of the code. Now, it's immediately clear what the function is doing and what each variable represents.
