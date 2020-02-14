import rimraf from 'rimraf'
import pkg from './package.json'

//  Rollup plugins
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
import image from '@rollup/plugin-image'

//  Custom plugins and helper functions
import typescript from './lib/simple-ts'
import renderHtmlTemplate from './lib/renderHtmlTemplate'
import copyStaticAssets from './lib/copyStaticAssets'
import resourceList from './lib/resource-list'
import constPlugin from './lib/const-plugin'

const outputDir = 'dist'
rimraf.sync(outputDir)
rimraf.sync('.ts-tmp')

export default [
  buildWebApp({
    isProd: process.env.NODE_ENV === 'production',
  }),
]

function buildWebApp({ isProd }) {
  return {
    input: {
      index: 'src/main/index.tsx',
      sw: 'src/sw/index.ts',
    },
    output: {
      dir: outputDir,
      chunkFileNames: '[name]-[hash].js',
    },
    plugins: [
      //  Parse typescript
      typescript('./src/main/', { watch: !isProd }),

      //  Transpile to ES5
      babel(),

      //  Module loaders
      nodeResolve(),
      commonjs(),
      json(),

      //  Allow to import images
      image(),

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
        assets: ['./src/main/assets/'],
      }),

      //  Provide constants
      constPlugin({
        version: pkg.version,
      }),

      //  Provide generated files into the code
      resourceList(),

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
