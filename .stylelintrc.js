module.exports = {
  "extends": "stylelint-config-sass-guidelines",
  "plugins": [
    "stylelint-scss",
  ],
  "rules": {
    "string-quotes": "double",
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["global"]
    }]
  }
};
