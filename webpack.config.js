module.exports = {
  entry: './app',
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.scss$/, loaders: ["style", "css?localIdentName=[local]--[hash:base64:5]", "sass"]}
    ]
  },
  target: 'atom',
  externals: {
    db: 'db'
  }
}
