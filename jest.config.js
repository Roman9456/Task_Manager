module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    setupFiles: ['text-encoding'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
      '^.+\\.css$': 'jest-transform-stub',
      '^.+\\.(png|jpg|jpeg|gif|webp|svg)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
      
    },
  };