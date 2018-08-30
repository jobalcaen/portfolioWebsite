let HTMLWebpackPlugin = require(
	'html-webpack-plugin'
);

let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

let FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = {
	entry: __dirname + '/app/index.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
	            test: /\.(png|jp(e*)g|svg)$/,  
	            use: [{
	                loader: 'url-loader',
	                options: { 
	                    limit: 8000, // Convert images < 8kb to base64 strings
	                    name: 'images/[hash]-[name].[ext]'
	                } 
	            }]
	        }
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build',
	    publicPath: '/'

	},
	plugins: [
		HTMLWebpackPluginConfig,
		new FaviconsWebpackPlugin({logo: './app/images/headshot.jpg',
			prefix: 'favicons/',
			statsFilename: 'iconstats.json',
		    title: 'Joel Balcaen',
		})
	],
	devServer: {
    	host: '0.0.0.0',
   	    historyApiFallback: true
	}
};
