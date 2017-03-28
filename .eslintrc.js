module.exports = {
    "env": {
        "browser": true,
        "node":true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error",2],
        "linebreak-style": ["error","windows"],
        "quotes": ["error","single"],
        "semi": ["error","always"],
        "no-var":["error"],
        "no-new-object":["error"],
        "object-shorthand":["error"],
        "no-array-constructor":["error"],
        "space-before-function-paren": ["error", "always"],
        "no-param-reassign":["error"],
        "prefer-arrow-callback":["error"],
        "no-useless-constructor":["error"],
        "no-dupe-class-members":["error"],
        "no-duplicate-imports":["error"],
        "no-plusplus":["error"],
        "eqeqeq":["error"],
        "no-nested-ternary":["error"],
        "no-unneeded-ternary":["error"],
        "brace-style":["error"],
        "spaced-comment":["error"],
        "space-in-parens":["error"],
        "array-bracket-spacing":["error"],
        "max-len":["error",{"code":100,"ignoreComments":true}],
        "id-length":["warn",{"min":2,"max":14}],
        "no-underscore-dangle":["error"],
        "no-unused-vars":["warn"],
        "no-console":["off"]
    }
};
