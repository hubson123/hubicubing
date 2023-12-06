module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": 1
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": [2, "single", { "avoidEscape": true }],
        'max-len': [2, {
            code: 140,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-use-before-define": "off",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/comma-spacing": ["warn"],
        "@typescript-eslint/object-curly-spacing": ["warn"],
        "semi": "off",
        "no-void": "off",
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/triple-slash-reference": "off",
    }
}
