module.exports = {
  root: true,
  plugins: ['react-native', 'unused-imports'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['@react-native-community/eslint-config', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    'react/jsx-fragments': 1,
    'react-hooks/exhaustive-deps': 0,
    'react-native/no-inline-styles': 0,
    'comma-dangle': [1, 'never'],
    'eol-last': 1,
    'eqeqeq': 0,
    'no-bitwise': 0,
    'no-eval': 0,
    'no-unreachable': 1,
    'semi': 1,
    'quotes': [1, 'single'],
    'no-useless-escape': 0,
    'no-unused-vars': 0,
    'unused-imports/no-unused-imports': 2,
    'no-shadow': 0,
    'radix': 0,
    'indent': [2, 2, { 'SwitchCase': 1, 'ignoredNodes': ['TemplateLiteral'] }],
    'no-trailing-spaces': 2,
    'comma-spacing': [2, { 'after': true }]
  },
  globals: {
    btoa: true
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
