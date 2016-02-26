var webpack = require('webpack');
var commonjsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
	plugins:[],
	//import的默认扩展名
	resolve: {
	    extensions: ['', '.js', '.json', '.jsx']
	  },
	module:{
		loaders:[
			{test:/es6\.js?$/,excluder:/node_modules/,loaders:['babel-loader']},
			{test:/\.jsx?$/,excluder:/node_modules/,loaders:['babel-loader']}
		]
	},
	entry:{
		app:["./src/js/page/index_es6.js"]
	},
	output:{
		path:'dist/js/page',
		publicPath: "/assets/",
		filename:'[name].js'
	}
}
