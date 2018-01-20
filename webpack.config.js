module.exports = {
  entry: './App.jsx',
  output: {
    filename: 'bundle.js'
  }, 
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env", "react"]
          }
        }
      }
    ]
  }
};