export default {
  cache: true,
  entry: {
    'test': './src/test.js'
  },
  output: {
    path: __dirname + '/public/assets/js/',
    filename: "[name]/app.js"
  },
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
