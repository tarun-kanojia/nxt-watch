module.exports = {
    entry: './app/assets/frontend/main.jsx',
    output: {
      path: __dirname + '/app/assets/javascripts',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx', 'ts', '.tsx']
    },
    module: {
      loaders: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  }