module.exports = {
  entry: './app',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.scss$/, loaders: ["style", "css", "sass"]}
    ]
  },
  target: 'atom',
  externals: [{
    db: 'db'
  }]
}
