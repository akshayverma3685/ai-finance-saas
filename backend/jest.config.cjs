// backend/jest.config.cjs
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  // We are using native ESM; disable transforms
  transform: {},
  extensionsToTreatAsEsm: ['.js'],
  setupFiles: ['<rootDir>/jest.setup.cjs'],
};
