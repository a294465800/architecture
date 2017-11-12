
const baseWebpackPlugin = require('./base.config.js')
const path = require('path')

const devWebpackPartialConfig = {
  watch: true,
  devServer: {
    contentBase: path.join(process.cwd(), "sample"),
    compress: true,
    port: 9000
  },
}

module.exports = Object.assign({}, baseWebpackPlugin, devWebpackPartialConfig)