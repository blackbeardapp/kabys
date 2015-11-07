var publicPath = ''
if(process.env.NODE_ENV === 'production') {
  publicPath = 'build/'
} else {
  publicPath = 'http://localhost:8080/build/'
}

module.exports = {
  entry: './app',
  output: {
    path: __dirname + '/build',
    publicPath: publicPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.scss$/, loaders: ["style", "css?localIdentName=[local]--[hash:base64:5]", "sass"]},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  externals: {
    db: 'db',
    child_process: 'child_process'
  }
}
