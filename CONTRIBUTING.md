# Contributing to ngx-openlayers

We're thrilled that you're interested in contributing to ngx-openlayers! Any help is welcome.

## How to Contribute?

There are several ways to contribute to this project:

*   **Reporting Bugs**: If you find a bug not listed in [issues](https://github.com/quentinlampin/ngx-openlayers/issues), please open an "[Issue](https://github.com/quentinlampin/ngx-openlayers/issues/new)" on GitHub, describing the problem as accurately as possible.
*   **Suggesting Enhancements**: If you have an idea for a new feature or an improvement not listed in [issues](https://github.com/quentinlampin/ngx-openlayers/issues), feel free to open an "[Issue](https://github.com/quentinlampin/ngx-openlayers/issues/new)" to discuss it.
*   **Submitting Code**: If you want to fix a bug or implement a feature, please follow the steps below.

## Submitting Code Changes

1.  **Fork the repository**: Click the "Fork" button at the top right of the repository page.
2.  **Clone your fork**: `git clone https://github.com/YOUR_USERNAME/ngx-openlayers.git`
3.  **Create a branch**: `git checkout -b my-new-feature` (use a descriptive branch name, respecting [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary)).
4.  **Make your changes**: Code away! And do not forget to update documentation and demo if needed.
5.  **Test your changes**: Ensure your modifications don't break anything and that tests (if any) still pass.
6.  **Run** `yarn format` and `yarn lint`
7.  **Commit your changes**: `git commit -m "feat: add my new feature"` (use clear and concise commit messages, see "Commit Message Guidelines" below).
7.  **Push your changes to your fork**: `git push origin my-new-feature`
8.  **Open a Pull Request (PR)**: On GitHub, go to your fork and click "New pull request". Compare your branch with the main branch of the original repository. Clearly describe your changes in the PR.

## Code Style and Conventions

*   Please follow the existing code style.
*   Ensure your code is well-commented only if needed, especially for complex parts.

## Commit Message Guidelines

This project adheres to the **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)** specification. Please ensure your commit messages follow this format. This helps in automating changelog generation and makes the commit history more readable.

A commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

Closes #YOUR_ISSUE_ID
```

Common types include:
*   `feat`: A new feature
*   `fix`: A bug fix
*   `docs`: Documentation only changes
*   `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
*   `refactor`: A code change that neither fixes a bug nor adds a feature
*   `perf`: A code change that improves performance
*   `test`: Adding missing tests or correcting existing tests
*   `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

Examples:
```
feat(map): add support for custom map projections

BREAKING CHANGE: a BC description

Closes #123
```
```
fix(layer): resolve issue with tile loading on high zoom levels

Closes #456
```

For more details, please refer to the Conventional Commits specification.

## Questions?

If you have any questions, feel free to open an "Issue".

Thank you for your contribution!
