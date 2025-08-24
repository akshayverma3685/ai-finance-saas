/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals", // ✅ Next.js ke liye zaroori
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // unused vars ko warning banaya
    "react/prop-types": "off", // ✅ PropTypes ki zaroorat nahi React 18 + TS ya modern apps me
    "react/react-in-jsx-scope": "off", // ✅ React import ki zaroorat nahi Next.js me
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
