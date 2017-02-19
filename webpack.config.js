/*eslint-env node*/


const { resolve } = require('path')
const webpack = require('webpack')

function entries() {
  if (process.env.DEV === 'true'){
    return [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './index.js'
    ]
  } else {
    return './index.js'
  }
}

module.exports = {
  entry: entries(),
  
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      DEV: process.env.DEV === 'true',
      API_ROOT: JSON.stringify(process.env.API_ROOT)
    })
  ],
}
