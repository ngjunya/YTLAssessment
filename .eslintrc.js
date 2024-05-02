module.exports = {
  root: true,
  extends: [
    "@react-native",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "prettier/prettier": "off",
    "no-console": "error",
    "semi": ["error", "always"],
    "no-unused-vars": "error",
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "react/prop-types": "warn",
    "react/self-closing-comp": "warn",
    "react/no-unknown-property": "error",
    "react-native/no-inline-styles": "warn",
  }
};

