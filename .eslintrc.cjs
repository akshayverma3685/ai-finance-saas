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
    // agar variable declare hai but use nahi hua to warning aayegi
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    // React ke prop-types wali warning off kar dena (aap TypeScript use nahi kar rahe ho)
    "react/prop-types": "off"
  }
};
