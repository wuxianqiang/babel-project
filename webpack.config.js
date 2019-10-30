const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // libraryExport: 'default', // 如果代码使用的是ES6的模块，打包导出是使用commonJS，那么导出时加上default
    libraryTarget: 'commonjs2' // 导出使用commonJS
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}