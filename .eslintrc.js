module.exports = {
  root: true,

  env: {
    node: true,
    es6: true
  },

  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:vue/essential",
  ],

  rules: {
    "rules": {
      "prefer-destructuring": ["error", {
        "array": true,
        "object": true
      }, {
        "enforceForRenamedProperties": false
      }]
    },
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "fetch",
        "asyncData",
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        "head",
        ["template", "render"],
        "renderError"
      ]
    }],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "vue/multiline-html-element-content-newline": "off",
    "vue/no-v-html": "off",
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea", "span", "strong", "p", "b-button-close"]
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": true,
      }
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "never",
      },
      "svg": "any",
      "math": "any"
    }],
    "no-console": "off",	// process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "quotes": ["error", "single"],
    "vue/html-indent": "off",
    "no-var": ["error"],
    "vue/component-name-in-template-casing": "off",
    "no-undef": ["error"]
  },

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6
  },
};
