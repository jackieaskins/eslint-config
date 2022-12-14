module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  reportUnusedDisableDirectives: true,
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "off",
    // No unused vars is usually covered by TypeScript
    "@typescript-eslint/no-unused-vars": "off",
    "arrow-body-style": ["error", "as-needed"],
    "no-debugger": "error",
    "no-useless-rename": "error",
    "object-shorthand": "error",
    "require-await": "error",
  },
};
