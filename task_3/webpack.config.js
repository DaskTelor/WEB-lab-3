const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app',
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      filename:'index.html'
    })
  ],
  mode: 'development'
}

