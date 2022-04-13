const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    'large-number': './src/index.js',
    'large-number.min': './src/index.js',
  },
  mode: "none",
  output: {
    filename: '[name].js',
    library: 'largeNumber', // 打包后库名称
    libraryTarget: 'umd', // 打包后库的模块化方式
    libraryExport: 'default'
  },
  // min.js 才压缩
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/, 
      })
    ]
  }
}