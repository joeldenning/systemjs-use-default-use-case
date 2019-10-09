module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    libraryTarget: 'system'
  },
  devtool: 'sourcemap',
  externals: ['react']
}