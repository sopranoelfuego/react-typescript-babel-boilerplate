const htmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
 entry: './src/index.tsx',
 resolve: {
  extensions: ['.js', '.ts', '.tsx'],
 },
 module: {
  rules: [{ test: /\.tsx?$/, loader: 'babel-loader', exclude: /node_modules/ }],
 },
 plugins: [
  new htmlWebPackPlugin({
   template: './src/index.html',
   filename: 'index.html',
  }),
 ],
}
