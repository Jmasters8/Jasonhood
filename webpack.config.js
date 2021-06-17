const path = require('path');
var SRC = path.resolve(__dirname, 'src/main/js');

module.exports = {
  context: __dirname,
  entry: './frontend/jasonhood.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
      // {
      //   test: /\.mp3$/,
      //   use: 'file-loader'
      // }
      // {
      //   test: /\.(png|svg|jpg|gif|mp3)$/,
      //   use: ['file-loader']
      // }

      // {
      //   test: /\.mp3$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'static/media/[name].[hash:8].[ext]'
      //   }
      // }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
