module.exports = {
  root: true,
  env: { node: true, es2022: true },
  extends: ["eslint:recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "no-undef": "error",
    "no-console": "off"
  },
  ignorePatterns: ["node_modules", "dist"]
};
