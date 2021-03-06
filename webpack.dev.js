const webpackBase = require('./webpack.base');
const merge = require('webpack-merge');

module.exports = merge(webpackBase, {
  mode: 'development',
  devServer: {
    contentBase: './client',
    port: 9000,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
});
