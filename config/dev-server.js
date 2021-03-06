const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const webpackConfig = require('./webpack/webpack.dev')
const path = require('path')
const express = require('express')
const opn = require('opn')
const port = process.env.PORT || 7000
const compiler = webpack(webpackConfig)
webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:' + port)
const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve('/'),
  historyApiFallback: true,
  noInfo: true,
  setup: app => {
    var jsonServer = require('json-server')
    app.use('/assets', express.static(path.join(__dirname, '../src/assets/')))
    app.use('/api', jsonServer.router(path.join(__dirname, '../test/mocks/db.json')))
  },
  clientLogLevel: 'info',
  // quiet: true,
  inline: true,
  // noInfo: !process.env.NODE_ENV === 'testing',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  host: '0.0.0.0',
  disableHostCheck: true,
  publicPath: webpackConfig.output.publicPath,
  stats: 'minimal'
})
module.exports = server.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log(`Listening at ${uri}\n`)
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
