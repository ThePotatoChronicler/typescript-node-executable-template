import * as esbuild from "esbuild";

await esbuild.build({
	entryPoints: [ "src/main.ts" ],
	outfile: "dist/main.mjs",
	format: "esm",
	platform: "node",
	target: [
		"node18"
	],
	sourcemap: "inline",
	bundle: true,
	minify: true,
	external: [
		'./node_modules/*'
	],
});
