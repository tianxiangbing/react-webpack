var webpack = require('webpack');
var config = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
	 filename: 'app.js', //this is the default name, so you can skip it
	  //at this directory our bundle file will be available
	  //make sure port 8090 is used when launching webpack-dev-server
	  publicPath: 'http://localhost:8080/assets' //重点在这里
});
server.listen(8080);