import riot from 'rollup-plugin-riot'
import babel from 'rollup-plugin-babel'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import { registerPreprocessor } from '@riotjs/compiler'
import { render } from 'pug'
import stylus from 'stylus'

registerPreprocessor('css', 'stylus', (code, options) => {
  console.log(code)
  return {
    code: stylus.render(code)
  }
})

// // // register the pug preprocessor
// registerPreprocessor('template', 'pug', (code, options) => {
//   const { file } = options

//   return {
//     code: render(code, {
//       filename: file,
//       pretty: true,
//       doctype: 'html'
//     })
//   }
// })

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    htmlTemplate({
      template: 'src/templates/index.html',
      target: 'dist/index.html'
    }),
    riot(),
    // riot({
    //   template: 'pug'
    // }),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    serve({
      port: 8088,
      contentBase: ['dist']
    }),
    livereload('dist')
  ]
}
