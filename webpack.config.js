var webpack = require('webpack');
var commonjsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
	plugins:[],
	module:{
		loaders:[
			{test:/es6\.js?$/,excluder:/node_modules/,loaders:['babel-loader']}
		]
	},
	entry:{
		index:"./src/js/page/index.js",
		index_es6:"./src/js/page/index_es6.js"
	},
	output:{
		path:'dist/js/page',
		filename:'[name].js'
	}
}
