module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // Enable transformation for .js, .jsx, .ts, .tsx files
  },
  testEnvironment: 'jest-environment-jsdom', // Necessary for DOM-like environment

  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js', // Mock CSS files
  },

};
