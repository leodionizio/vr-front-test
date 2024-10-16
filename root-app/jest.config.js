module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^header/Header$": "<rootDir>/__mocks__/header.tsx",
    "^footer/Footer$": "<rootDir>/__mocks__/footer.tsx",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^contexts(.*)$": "<rootDir>/src/contexts$1",
    "^core(.*)$": "<rootDir>/src/core$1",
    "^hooks(.*)$": "<rootDir>/src/hooks$1",
    "^middlewares(.*)$": "<rootDir>/src/middlewares$1",
    "^pages(.*)$": "<rootDir>/src/pages$1",
    "^public(.*)$": "<rootDir>/src/public$1",
    "^services(.*)$": "<rootDir>/src/services$1",
    "^store(.*)$": "<rootDir>/src/store$1",
    "^assets(.*)$": "<rootDir>/src/assets$1",
    "axios": "axios/dist/node/axios.cjs"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
