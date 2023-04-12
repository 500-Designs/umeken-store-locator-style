module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
  },
  'plugins': ['sass-stylelint'],
  'rules': {
    'sass-stylelint/no-invalid-css': true,
  },
  'extends': ['stylelint-config-standard'],
};
