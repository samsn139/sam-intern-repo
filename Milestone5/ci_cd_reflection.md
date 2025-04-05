# CI/CD Reflection

## What is the purpose of CI/CD?  
Continuous Integration (CI) and Continuous Deployment (CD) aim to automate the process of building, testing, and deploying code. CI helps developers detect integration issues early by running automated checks on each commit or pull request. CD ensures that code is automatically deployed to production or staging once it passes all tests, improving delivery speed and reducing human error.

## How does automating style checks improve project quality?  
Automating style checks, such as Markdown linting and spell checks, ensures that code and documentation follow consistent formatting and quality standards. This reduces manual review time, prevents simple errors from reaching production, and helps maintain readability and professionalism across the project.

## What are some challenges with enforcing checks in CI/CD?  
Challenges include:
- Initial setup complexity (especially for beginners).
- False positives in linters or spell checkers.
- Slower feedback loops if the pipeline takes too long to run.
- Resistance from team members unfamiliar with the tools or standards being enforced.

## How do CI/CD pipelines differ between small projects and large teams?  
In small projects, CI/CD pipelines are often simpler and may only involve basic tests or linting. In large teams or enterprise-level projects, pipelines are more complex with multiple stages (e.g., unit tests, integration tests, security scans, deployments) and support multiple environments. Larger teams also require more robust monitoring and rollback strategies to ensure reliability and collaboration.
