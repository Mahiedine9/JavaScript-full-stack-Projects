const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {

  entry: {                         
    'commissaire-priseur': path.resolve(__dirname, 'scripts', 'commissaire-priseur.js'),
    'encherisseur' : path.resolve(__dirname, 'scripts', 'encherisseur.js')
  },
  mode : 'development',

  output: {
    path: path.resolve(__dirname, '../server/public'),
    filename: 'scripts/[name]-bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: "./html/commissaire-priseur.html",
        filename: "../server/public/commissaire-priseur.html",
        chunks : ['commissaire-priseur']
    }),

    new HtmlWebpackPlugin({
      template: "./html/encherisseur.html",
      filename: "../server/public/encherisseur.html",
      chunks : ['encherisseur']
    }),

    new CopyPlugin({
      patterns: [
       /* {
          context: path.resolve(__dirname, 'html'),
          from: '*.html',
	  to:   'html/[name].html',
          noErrorOnMissing: true
	},
  */
        {
          context: path.resolve(__dirname, 'images'),
          from: '**/*',
	  to:   'images/[name][ext]',
          noErrorOnMissing: true
	},
        {
          context: path.resolve(__dirname, 'style'),
          from: '**/*',
	  to:   'style/[name][ext]',
          noErrorOnMissing: true
	},
      ]
   })
  ]









};