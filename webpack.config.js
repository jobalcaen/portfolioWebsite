var HTMLWebpackPlugin = require(
	'html-webpack-plugin'
);

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

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
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};
