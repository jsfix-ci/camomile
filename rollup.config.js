import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json";

const banner = `/**
* Camomile, the workflow automation toolset
* https://github.com/camomilejs/camomile
* 
* @version ${pkg.version}
* @license ${pkg.license}
*/`;

/**
 * Adds extra file for the CLI initialization with the proper shebang
 *
 * @type {import('Rollup').Plugin}
 */
const addCliEntry = () => ({
	buildStart() {
		this.emitFile({
			fileName: "bin/camomile",
			id: "src/cli.ts",
			preserveSignature: false,
			type: "chunk",
		});
	},
	name: "add-cli-entry",
	renderChunk(code, chunkInfo) {
		if (chunkInfo.fileName === "bin/camomile") {
			return {
				code: `#!/usr/bin/env node\n\n${code}`,
			};
		}
		return null;
	},
});

/**
 * Default build configuration
 *
 * @type {import('rollup').RollupOptions}
 */
const build = {
	input: {
		"camomile.js": "./src/camomile.ts",
	},
	output: {
		banner,
		chunkFileNames: "shared/[name].js",
		dir: "dist",
		entryFileNames: "[name]",
		externalLiveBindings: false,
		format: "es",
		freeze: false,
		manualChunks: {
			camomile: ["./src/camomile.ts"],
		},
	},
	plugins: [
		commonjs({ include: "node_modules/**" }),
		typescript(),
		addCliEntry(),
	],
};

export default build;
