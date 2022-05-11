module.exports = {
  // ...
  extends: [
    // ...
    'eslint:recommended',
    // ...
    'plugin:vue/vue3-recommended',
    // ...
    'prettier',

    // Make sure "prettier" is the last element in this list.
  ],
  rules: {
    'no-console': 'warn',
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/component-name-in-template-casing': 'off',
  },
  // ...
};
