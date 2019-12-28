'use strict'

const path = require('path')

module.exports = {
    outputDir: './dist',
    publicPath: './',
    assetsDir: './',
    // ポートなどの設定
    devServer: {
        port: 8888,
        contentBase: path.resolve(__dirname, 'public'),
        host: 'localhost',
    },
}
