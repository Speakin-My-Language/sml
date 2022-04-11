const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: '/client/index.html' }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'client'),
      publicPath: '/',
    },
    proxy: {
      '/assets/*': {
        target: 'http://localhost:3000',
        logLevel: 'debug',
      },
      '/signup/*': {
        target: 'http://localhost:3000',
        logLevel: 'debug',
      },
      '/matches/*': {
        target: 'http://localhost:3000',
        logLevel: 'debug',
      },
    },
    compress: true,
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    },
    {
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
