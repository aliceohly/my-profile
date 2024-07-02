# Personal Profile

This project is a personal profile website built using React, Vite, and CSS Modules. It showcases personal information, skills, and projects, and is designed to be deployed on GitHub Pages.

# Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - A fast development build tool
- [CSS Modules](https://github.com/css-modules/css-modules) - A CSS file in which all class and animation names are scoped locally by default
- [GitHub Pages](https://pages.github.com/) - Free hosting directly from your GitHub repository

# Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone git@github.com:aliceohly/profile.git
   cd react-portfolio
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

# Usage

To customize the profile, update the components in the `src` directory. Personal information, skills, and projects can be edited directly in the respective components.

Data is stored in json files in `data` folder.

# Deployment

To deploy the project to GitHub Pages, follow these steps:

1. **Build the project:**

   ```sh
   npm run build
   ```

2. **Deploy to GitHub Pages:**

   ```sh
   npm run deploy
   ```

Ensure that your `package.json` has the following scripts configured:

```json
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
