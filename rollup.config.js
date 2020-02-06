import rimraf from "rimraf";
import typescript from "@rollup/plugin-typescript";
import babel from "rollup-plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import postcss from "rollup-plugin-postcss";
import tailwind from "tailwindcss";
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";
import { uglify } from "rollup-plugin-uglify";
import gzipPlugin from "rollup-plugin-gzip";

import renderHtmlTemplate from "./lib/renderHtmlTemplate";
import runOnlyInProduction from "./lib/runOnlyInProduction";
import copyStaticAssets from "./lib/copyStaticAssets";

const outputDir = "dist";

rimraf.sync(outputDir);

export default [buildWebApp("src/index.tsx", outputDir)];

function buildWebApp(inputPath, outputPath) {
  return {
    input: inputPath,
    output: {
      dir: outputPath,
      format: "umd",
      entryFileNames: "[name]-[hash].js",
      chunkFileNames: "[name]-[hash].js",
      assetFileNames: "[name]-[hash].js"
    },
    plugins: [
      copyStaticAssets({
        assets: ["src/assets"]
      }),
      typescript(),
      babel(),
      nodeResolve(),
      commonjs(),
      postcss({
        minimize: true,
        extract: true,
        plugins: [
          tailwind,
          //  For more info about purgeCSS config check this:
          //  https://tailwindcss.com/docs/controlling-file-size/
          ...runOnlyInProduction([
            purgecss({
              content: ["./src/**/*.tsx", "./src/*.tsx"],
              defaultExtractor: content =>
                content.match(/[\w-/:]+(?<!:)/g) || []
            }),
            //  Keep cssnano after purgeCSS to keep the `purgecss ignore` comments
            cssnano,
            uglify
          ])
        ]
      }),
      html({
        title: "Nicholas Peretti",
        template(variables) {
          return renderHtmlTemplate("src/template.ejs", variables);
        }
      }),
      gzipPlugin()
    ]
  };
}
