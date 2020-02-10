import rimraf from 'rimraf'

//  Rollup plugins
import typescript from '@rollup/plugin-typescript'
import babel from 'rollup-plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import tailwind from 'tailwindcss'
import purgecss from '@fullhuman/postcss-purgecss'
import cssnano from 'cssnano'
import { uglify } from 'rollup-plugin-uglify'
import html from '@rollup/plugin-html'
import gzipPlugin from 'rollup-plugin-gzip'

//  Custom plugins and helper functions
import renderHtmlTemplate from './lib/renderHtmlTemplate'
import copyStaticAssets from './lib/copyStaticAssets'

const outputDir = 'dist'
rimraf.sync(outputDir)

export default [
  buildWebApp({
    isProd: process.env.NODE_ENV === 'production',
  }),
]

function buildWebApp({ isProd }) {
  return {
    input: {
      index: 'src/index.tsx',
      sw: 'src/sw/index.ts',
    },
    output: {
      dir: outputDir,
      chunkFileNames: '[name]-[hash].js',
      chunkFileNames: '[name]-[hash].js',
      entryFileNames: '[name]-[hash].js',
    },
    plugins: [
      //  Parse typescript
      typescript(),

      //  Transpile to ES5
      babel(),

      //  Module loaders
      nodeResolve(),
      commonjs(),
      json(),

      //  Generate CSS
      postcss({
        minimize: isProd,
        extract: true,
        plugins: [
          //  Generate tailwind styles
          tailwind,

          //  Apply minifiers (prod only)
          ...(isProd
            ? [
                purgecss({
                  content: ['./src/**/*.tsx', './src/*.tsx'],
                  defaultExtractor: content =>
                    content.match(/[\w-/:]+(?<!:)/g) || [],
                }),
                cssnano,
                uglify,
              ]
            : []),
        ],
      }),

      //  Copy assets
      copyStaticAssets({
        assets: ['./src/assets/'],
      }),

      //  Generate index.html
      html({
        title: 'Nicholas Peretti',
        template(variables) {
          return renderHtmlTemplate('src/template.ejs', variables)
        },
      }),

      //  gzip
      gzipPlugin(),
    ],
  }
}
