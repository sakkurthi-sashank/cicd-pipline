module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "indent": ["error", 2, {SwitchCase: 1}],
    // Ensure consistency in property quoting:
    "quote-props": ["error", "consistent"],
    "new-cap": "off",
    "object-curly-spacing": "off",
    "require-jsdoc": "off",
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "coverage/",
    "jest.config.js",
    ".eslintrc.js",
  ],
};
