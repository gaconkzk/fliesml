import riot from 'rollup-plugin-riot'
import babel from 'rollup-plugin-babel'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import postcss from 'rollup-plugin-postcss'
import alias from 'rollup-plugin-alias'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import { registerPreprocessor } from '@riotjs/compiler'
import { render } from 'pug'
import stylus from 'stylus'

registerPreprocessor('css', 'stylus', (code, options) => {
  return {
    code: stylus.render(code)
  }
})

registerPreprocessor('template', 'pug', (code, options) => {
  const { file } = options

  return {
    code: render(code, {
      filename: file,
      pretty: true,
      doctype: 'html'
    })
  }
})

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    htmlTemplate({
      template: 'templates/index.html',
      target: 'dist/index.html'
    }),
    // alias for folders inside `src`
    alias({
      // auto file resolve
      resolve: ['/index.js', 'index.pug', '.html', '.pug', '.js', '.css', '.scss', '.styl'],
      '@': '.'
    }),
    riot({
      ext: 'pug',
      template: 'pug'
    }),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      extensions: ['.css'],
    }),
    serve({
      port: 8088,
      historyApiFallback: true,
      host: '0.0.0.0',
      contentBase: ['dist', 'static'],
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }),
    livereload({ watch: ['dist', 'src'] })
  ]
}
