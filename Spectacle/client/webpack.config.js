const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


const PRODUCTION = false;

module.exports = {

  entry: {                         
    'admin': path.resolve(__dirname, 'scripts', 'admin.client.js'),
    'user' : path.resolve(__dirname, 'scripts', 'user.client.js'),
    'login': path.resolve(__dirname, 'scripts', 'login.client.js'),
    'register': path.resolve(__dirname, 'scripts', 'register.client.js')
  },

  output: {
    path: path.resolve(__dirname, '../server/public'),
    filename: 'javascripts/[name]-bundle.js'
  },

  mode :  (PRODUCTION ? 'production' : 'development'),
  devtool : (PRODUCTION ? undefined : 'eval-source-map'),

  devServer: {
      static: {
	       publicPath: path.resolve(__dirname, 'public'),
	       watch : true
      },
      host: 'localhost',
      port : 3000,
      open : true
  },

  module: {
    rules : [
      {
        test: /\.(m?js*)/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },


      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif)/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name : '[name].[ext]',
              outputPath : 'images'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: "./admin.html",
        filename: "./admin.html",
        chunks : ['admin']
    }),

    new HtmlWebpackPlugin({
      template: "./user.html",
      filename: "./user.html",
      chunks : ['user']
    }),

    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, 'html'),
          from: '**/*.html',
	        to: 'html/[name].html',
          noErrorOnMissing: true
	},

        {
          context: path.resolve(__dirname, 'images'),
          from: '**/*',
	        to: 'images/[name][ext]',
          noErrorOnMissing: true
	},
        {
          context: path.resolve(__dirname, 'style'),
          from: '**/*',
	  to:   'stylesheets/[name][ext]',
          noErrorOnMissing: true
	},
      ]
   })
  ]









};