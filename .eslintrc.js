module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    // "extends": "eslint:recommended",
    "extends": ["airbnb"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        // "semi": 0,
        //"comma-dangle": 0
    }
};