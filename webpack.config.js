var webpack               = require("webpack");
var path                  = require('path');
var AssetsPlugin          = require('assets-webpack-plugin');


module.exports = {
  devtool   : 'source-map',
  entry     : {
    app             : path.join(__dirname, 'src/client/app.js'),
    vendor          : ["react", "react-dom", "react-router", "webpack-hot-middleware/client"]
  },
  output    : {
    path            : path.join(__dirname, '/dist/'),
    filename        : '[name].js',
    chunkFilename   : '[name].js',
    publicPath      : '/'
  },
  plugins   : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new AssetsPlugin({prettyPrint: true})
  ],
  module    : {
    loaders   : [{
      test          : /\.js?$/,
      exclude       : /node_modules/,
      loader        : 'babel',
      query         : {
        presets     : ['react-hmre']
      }
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  }
};