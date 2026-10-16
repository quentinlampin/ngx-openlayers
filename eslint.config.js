// @ts-check
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // Components keep ChangeDetectionStrategy.Eager (set by the Angular 22 migration) until they are made OnPush-safe
      "@angular-eslint/prefer-on-push-component-change-detection": "off",
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "off",
        {
          accessibility: "explicit",
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "objectLiteralProperty",
          leadingUnderscore: "allow",
          format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  }
);
