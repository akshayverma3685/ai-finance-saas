module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals"   // 👈 Next.js ke liye add karo
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"   // 👈 isse error band ho jayega
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
