module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.prettierrc.js"], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: ["eslint:recommended"],
    overrides: [
        // This configuration will apply only to TypeScript files
        {
            files: ["**/*.ts", "**/*.tsx"],
            parser: "@typescript-eslint/parser",
            settings: { react: { version: "detect" } },
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended", // TypeScript rules
                "plugin:react/recommended", // React rules
                "plugin:react-hooks/recommended", // React hooks rules
                "plugin:jsx-a11y/recommended", // Accessibility rules
                "prettier/@typescript-eslint", // Prettier plugin
                "plugin:prettier/recommended", // Prettier recommended rules
            ],
            rules: {
                "prettier/prettier": ["error", {}, { usePrettierrc: true }],
                "react/react-in-jsx-scope": "off",
                "react/prop-types": "off",
                "@typescript-eslint/no-unused-vars": ["error"],
                "@typescript-eslint/explicit-function-return-type": "off",
                "jsx-a11y/anchor-is-valid": [
                    "error",
                    {
                        components: ["Link"],
                        specialLink: ["hrefLeft", "hrefRight"],
                        aspects: ["invalidHref", "preferButton"],
                    },
                ],
            },
        },
    ],
};
