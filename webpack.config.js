module.exports = {
  mode: 'development',
  entry: './src/assets/js/app.js',
  output: {
    path: `${__dirname}/html/assets/js/`,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
