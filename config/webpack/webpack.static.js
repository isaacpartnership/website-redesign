const webpack = require('webpack')
const path = require('path')
const Prerender = require('prerender-spa-plugin')

module.exports = {
  entry: {
    'app': [
      './src/app/blank.js'
    ]
  },
  output: {
    path: path.resolve('./static'),
    filename: 'js/[name]-[chunkhash:7].js'
  },
  plugins: [
    new Prerender(
        // Absolute path to compiled SPA
      path.resolve('./dist'),
        // List of routes to prerender
      [ '/about', '/home' ],
      {
        outputDir: './static'
      }
    ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_endPoint': JSON.stringify('https://api.randomuser.me/')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      comments: false
    })
  ],
  stats: 'minimal'
}
