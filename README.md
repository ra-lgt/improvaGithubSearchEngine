# GitHub Profile Explorer

Welcome to GitHub Profile Explorer, a sleek and responsive web app that makes discovering GitHub profiles a breeze. This application allows users to search for GitHub profiles, view detailed information, and manage their search history.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

GitHub Profile Explorer is a web application built using TypeScript, React, and Vite. It provides a user-friendly interface for searching GitHub profiles, viewing detailed information, and managing search history. The app is designed to be responsive and accessible, ensuring a smooth and enjoyable experience across all devices.

## Features

- Search for GitHub profiles by entering a username.
- View detailed profile information, including avatar, bio, followers, following, and repositories.
- View a list of the user's repositories, including name, description, stars, forks, and primary language.
- Save successful search queries in your personal history for easy revisiting.
- Manage your search history, including deleting or clearing entries.
- Dark mode support for a more comfortable viewing experience.

## Getting Started

To get started with GitHub Profile Explorer, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/improvaGithubSearchEngine.git`
2. Navigate to the project directory: `cd improvaGithubSearchEngine`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`

## Project Structure

The project structure is organized as follows:

```
improvaGithubSearchEngine/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   │   ├── GitHub-logo.png
│   │   └── githubLight.png
│   ├── components/
│   │   ├── ui/
│   │   │   ├── toaster.tsx
│   │   │   └── ...
│   │   └── ...
│   ├── context/
│   │   ├── searchHistoryContext.tsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useDarkMode.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── home/
│   │   │   ├── home.tsx
│   │   │   └── ...
│   │   ├── userdetails/
│   │   │   ├── userdetail.tsx
│   │   │   └── ...
│   │   └── ...
│   ├── routes/
│   │   ├── routes.tsx
│   │   └── ...
│   ├── services/
│   │   ├── service.tsx
│   │   └── ...
│   ├── utils/
│   │   ├── constants.ts
│   │   └── ...
│   ├── index.css
│   ├── main.tsx
│   └── vite.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Technologies Used

- TypeScript: A superset of JavaScript that adds static type checking and other features.
- React: A popular JavaScript library for building user interfaces.
- Vite: A fast and modern build tool for web applications.
- Chakra UI: A simple, modular, and accessible component library for React.
- Font Awesome: A popular icon set and toolkit.
- Moment.js: A JavaScript date library for parsing, validating, and manipulating dates.

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/improvaGithubSearchEngine.git`
2. Navigate to the project directory: `cd improvaGithubSearchEngine`
3. Install dependencies: `npm install` or `yarn install`

## Usage

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The development server will start at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/your-username/improvaGithubSearchEngine/blob/main/LICENSE) file for more information.

## Expanding the ESLint configuration

To enable type-aware lint rules and additional React-specific lint rules, you can update the ESLint configuration in the `package.json` file. Add the following dependencies:

```bash
npm install --save-dev eslint-plugin-react-hooks eslint-plugin-react-typescript eslint-plugin-react-hooks-testing-library
```

Then, update the `eslintConfig` section in the `package.json` file:

```json
"eslintConfig": {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "react-hooks",
    "react-typescript",
    "react-hooks-testing-library"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-typescript/rule-name": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

This configuration enables type-aware lint rules, additional React-specific lint rules, and ensures that the correct version of React is detected.

Note: Make sure to update the `tsconfig.json` file to include the necessary configuration for TypeScript, such as `compilerOptions.jsx` and `compilerOptions.esModuleInterop`.

That's it! You now have a well-structured README file for your GitHub Profile Explorer project, including project introduction, features, getting started instructions, project structure, technologies used, installation, usage, contributing guidelines, and license information. Additionally, you have expanded the ESLint configuration to enable type-aware lint rules and additional React-specific lint rules.