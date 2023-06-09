import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import url from "@rollup/plugin-url"
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
            },
        ],
        plugins: [
            scss({
                fileName: "goodaction.css",
                failOnError: true,
                outputStyle: "compressed",
            }),
            url(),
            babel({
                exclude: ["node_modules/**", "src/**/*.{stories.ts}"],
                include: ["package.json"],
                babelHelpers: 'bundled',
                presets: ["@babel/preset-react"],
            }),
            external(['react-router-dom']),
            resolve(),
            peerDepsExternal(),
            typescript({ sourceMap: false, exclude:["**/*.{stories.ts}"]}),
            terser(),
        ],
    },
];