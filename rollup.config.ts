import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { Plugin, RollupOptions } from "rollup";

import packageJson from "./package.json";

const banner = `/**
* Camomile, the workflow automation toolset
* https://github.com/camomilejs/camomile
* 
* @version ${packageJson.version}
* @license ${packageJson.license}
*/`;

/**
 * Plugin that generates a CLI file with the correct shebang
 *
 * Source: https://github.com/rollup/rollup/blob/69c099c9248d150fcb99c80c97b52adfda30fabc/build-plugins/add-cli-entry.ts
 *
 * @returns Rollup plugin
 */
function addCliEntry(): Plugin {
	return {
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

			// eslint-disable-next-line unicorn/no-null
			return null;
		},
	};
}

const build: RollupOptions = {
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
