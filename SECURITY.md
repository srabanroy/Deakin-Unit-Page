# Security Policy

## Supported version

The latest version of the website on the `main` branch is supported.

## Implemented security controls

This project uses the following controls:

- HTTPS through GitHub Pages
- Production-built JavaScript and CSS assets
- Locally bundled React and Tailwind dependencies
- Exact dependency versions recorded in `package.json` and `package-lock.json`
- Content Security Policy for the production website
- Restrictions against externally hosted executable scripts
- Mixed-content protection using `upgrade-insecure-requests`
- Dependency vulnerability auditing
- Git exclusions preventing `node_modules` and temporary files from being committed

## Dependency management

Dependencies must be reviewed before being added or upgraded.

Run the following commands before merging dependency changes:

```bash
npm install
npm audit
npm run build
```

Do not use `npm audit fix --force` without reviewing the proposed changes.

## Secrets and credentials

Passwords, personal access tokens, API keys and other credentials must never be committed to this repository.

Use approved environment variables or GitHub repository secrets if credentials are required in the future.

## Reporting a vulnerability

Do not publish suspected security vulnerabilities in a public GitHub issue.

Report the vulnerability privately to the project team through the approved Microsoft Teams channel or contact:

Project Lead: Sraban Roy (via Microsoft Teams)

Include:

- A description of the issue
- Steps to reproduce it
- The affected page or component
- The potential impact
- Any recommended remediation
