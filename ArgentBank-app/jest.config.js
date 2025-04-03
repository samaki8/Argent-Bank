//ArgentBank-app\jest.config.js
/*
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Chemin correct vers setupTests.js
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Gère les fichiers CSS/SCSS
  },
};*/
module.exports = {
  testEnvironment: "jest-fixed-jsdom", // Utilisation de jest-fixed-jsdom
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};

