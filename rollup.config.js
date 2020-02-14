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

//  Custom plugins and helper functions
import typescript from './lib/simple-ts'
import renderHtmlTemplate from './lib/render-html-template'
import copyStaticAssets from './lib/copy-static-assets'
import resourceList from './lib/resource-list'
import constPlugin from './lib/const-plugin'
import assetTransformPlugin from './lib/filenames-transform-plugin'
import { removeHash } from './lib/build-utils'

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
      entryFileNames: '[name]-[hash].js',
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

      //  Remove hash from the manifest.json file
      assetTransformPlugin(asset => {
        if (
          asset.fileName.includes('manifest-') ||
          asset.fileName.includes('sw-')
        ) {
          // Remove name hashing
          asset.fileName = removeHash(asset.fileName)

          // Move the file to the root if it's the manifest.json file
          if (asset.fileName.includes('manifest.json')) {
            asset.fileName = asset.fileName.replace('assets/', '')
          }
        }
        if (asset.fileName.endsWith('.json')) {
          // Minify
          asset.source = JSON.stringify(JSON.parse(asset.source))
        }
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
    ],
  }
}
