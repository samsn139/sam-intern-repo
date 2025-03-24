# Git Concepts

## What is the difference between staging and committing?

- **Staging**: Staging is the process of preparing changes to be committed. When you stage a file, you’re telling Git that you want to include these changes in your next commit. Staged changes are not saved in the repository until they are committed.
  
- **Committing**: Committing is the process of saving your staged changes into the repository’s history. Once you commit, the changes become a permanent part of the repository’s version history.

## Why does Git separate these two steps?

Git separates the staging and committing steps to give developers more control over their changes.
- Stage only the changes you want to commit, without including unintentional modifications.
- Write descriptive commit messages for each logical change, making it easier to track project history.
- Review and test staged changes before committing them.

## When would you want to stage changes without committing?

- When working on multiple changes and want to commit them separately, even though they’re part of the same task.
- To stage a file for later review or need to test something before committing.
- When preparing a set of changes for a specific commit but need more time to finalize or test everything.

# Branching & Team Collaboration

# Why is pushing directly to main problematic?  
Pushing directly to main can cause issues such as unreviewed or broken code being deployed, difficulty in tracking changes, and potential conflicts with teammates' work.  

## How do branches help with reviewing code?  
Branches allow developers to work on features or fixes independently. They enable code reviews before merging, ensuring better quality, maintainability, and fewer disruptions to the main branch.  

## What happens if two people edit the same file on different branches?  
If two people edit the same file on different branches and merge them, Git may encounter a **merge conflict**. This requires manually resolving the conflicting changes before merging.


# Advanced Git Commands & When to Use Them  

## git checkout main -- <file>  
**What it does:**  
Restores a specific file from the main branch, discarding any local changes you made to that file.  
**When to use it:**  
When you want to reset a file to its state from the main branch without affecting the rest of your changes in the repository.

## git cherry-pick <commit>  
**What it does:**  
Applies the changes from a specific commit on another branch to your current branch.  
**When to use it:**  
When you want to bring a particular change or fix from another branch without merging the entire branch. This is useful for picking specific features or bug fixes.

## git log  
**What it does:**  
Displays a log of the commit history, showing the details of each commit (author, date, commit message, etc.).  
**When to use it:**  
When you need to track the evolution of the codebase, find past commits, or understand changes made over time.

## git blame <file>  
**What it does:**  
Shows the details of the last modification for each line in a file, including the commit hash and author.  
**When to use it:**  
When you need to investigate which developer made specific changes in a file, useful for debugging or understanding why certain decisions were made in the code.

## Reflections  
Testing these commands helped me understand their value in real-world scenarios:
- `git cherry-pick` is incredibly useful when integrating select changes without merging unrelated code.
- I was surprised by how `git blame` could help track down the exact contributor and commit for specific lines of code—it's a handy tool for accountability and debugging.


# Debugging with git bisect

## What does git bisect do?  
`git bisect` is a tool used to find the commit that introduced a bug in your project. It uses a binary search algorithm, allowing you to narrow down the range of commits efficiently by testing "good" and "bad" commits. This process helps identify the exact commit where the issue was introduced.

## When would you use it in a real-world debugging situation?  
`git bisect` is useful in scenarios where:
- You're unsure which commit caused a bug in your codebase.
- The bug is introduced after multiple commits, and manually reviewing each commit would be too time-consuming.
- It is difficult to reproduce the bug in every commit, so narrowing down the culprit is necessary.

## How does it compare to manually reviewing commits?  
While manually reviewing commits requires going through each commit individually and checking for potential changes that caused the bug, `git bisect` automates the process by narrowing down the search using a binary search algorithm. This is much faster and more efficient, especially in large codebases. Instead of going through every commit, you can jump to commits that are more likely to contain the issue.


# Writing Meaningful Commit Messages

## What makes a good commit message?  
A good commit message is concise, clear, and descriptive. It should briefly explain the purpose of the change, providing context for others who may review the commit in the future.

## How does a clear commit message help in team collaboration?  
A clear commit message helps team members understand the intent and scope of changes made without needing to inspect the code. It aids in code reviews, allows easier identification of specific changes when debugging, and ensures a more organized, traceable project history. 

## How can poor commit messages cause issues later?  
Poor commit messages can lead to confusion and make it harder to track down issues in the codebase. Vague or unclear messages may leave developers guessing about the intent behind changes, causing delays in debugging or further development. 


# Creating & Reviewing Pull Requests

## Why are PRs important in a team workflow?  
Pull Requests (PRs) are critical in a team workflow as they provide a formalized way for code changes to be reviewed, discussed, and approved before being merged into the main codebase. 

## What makes a well-structured PR?  
- A clear title and description that explain the purpose of the change and any relevant context.
- A linked issue (if applicable) to show the reason for the change.
- A comprehensive set of changes that address the issue without unrelated modifications.
- Clear, concise commit messages that help others understand the individual changes made.
- Proper tests (if required) to validate the change and ensure it works as expected.

## What did you learn from reviewing an open-source PR?  
From reviewing an open-source PR, I learned how important detailed comments and discussions are in the process of code review. I observed how reviewers request changes, provide feedback, and ensure that the code aligns with project standards and guidelines. 



