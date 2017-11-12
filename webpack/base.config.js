const path = require('path')
const entry = require('./entry')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(process.cwd(), "src/app"),
  entry,
  output: {
    publicPath: "/dist",
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name].js"
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin({
      title: 'sale',
      template: '../base/webpack.template.html',
      // inject: true,
      chunks: ['sale'],
      filename: 'sale.html',
    }),
    new HtmlWebpackPlugin({
      title: 'list',
      template: '../base/webpack.template.html',
      inject: true,
      chunks: ['sale', 'list'],
      filename: 'list.html',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        loader: "file-loader",
        options: {
          name: "assets/[name]_[sha512:hash:base64:7].[ext]"
        }
      }
    ]
  }
}