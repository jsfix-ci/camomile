module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
	},
	extends: ["airbnb-base", "prettier"],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
	},
	overrides: [
		{
			files: ["**/*.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
			},
			plugins: ["@typescript-eslint"],
			extends: [
				"airbnb-typescript/base",
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"prettier",
			],
			rules: {
				"import/prefer-default-export": 0,
				"no-console": 0,
			},
		},
	],
};
