import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

const NODE_ENV = process.env.NODE_ENV || 'development'
const outputFile = NODE_ENV === 'production' ? './lib/prod.js' : './lib/dev.js'

export default {
  input: 'src/index.js',
  output: {
    file: outputFile,
    format: 'cjs'
  },
  external: ['styled-components'],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ]
      }
    })
  ]
}
