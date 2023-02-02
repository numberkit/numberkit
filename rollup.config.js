import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const bundle = (config) => ({
  ...config,
  external: (id) => !/^[./]/.test(id),
});

const coreBundle = [
  bundle({
    plugins: [esbuild()],
    input: "src/core/index.ts",
    output: { format: "es", file: "dist/index.js" },
  }),
  bundle({
    plugins: [dts()],
    input: "src/core/index.ts",
    output: { format: "es", file: "dist/index.d.ts" },
  }),
];

const randomBundle = [
  bundle({
    plugins: [esbuild()],
    input: "src/random/index.ts",
    output: { format: "es", file: "dist/random/index.js" },
  }),
  bundle({
    plugins: [dts()],
    input: "src/random/index.ts",
    output: { format: "es", file: "dist/random/index.d.ts" },
  }),
];

const validatorsBundle = [
  bundle({
    plugins: [esbuild()],
    input: "src/validators/index.ts",
    output: { format: "es", file: "dist/validators/index.js" },
  }),
  bundle({
    plugins: [dts()],
    input: "src/validators/index.ts",
    output: { format: "es", file: "dist/validators/index.d.ts" },
  }),
];

export default [...coreBundle, ...randomBundle, ...validatorsBundle];
