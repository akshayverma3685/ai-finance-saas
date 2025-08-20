module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "react/prop-types": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
