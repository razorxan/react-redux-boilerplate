const ExtractTextPlugin = require('extract-text-webpack-plugin')
const fs = require('fs')

const extractCSS = new ExtractTextPlugin({
	filename: 'bundle.css',
	disable: false,
	allChunks: true
})

module.exports = {
    watch: true,
    target: 'web',
    entry: './app/src/entry.js',
    output: {
        path: __dirname + '/app/build',
        publicPath: '',
        filename: 'bundle.js'
    },
	resolve: {
		extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: 'app/build',
        publicPath: '',
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        },
        watchContentBase: true
    },
    module: {
        loaders: [
            {
				test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react'],
                            plugins: ['transform-decorators-legacy', 'transform-object-rest-spread', 'transform-class-properties']
                        }
                    }
                ]              
            },
            {
				test: /\.css$/,
				use: ExtractTextPlugin.extract(['css-loader'])
            },
            {
				test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: 'img/[name].[ext]?[hash]'
                }
			},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						publicPath: '',
						name: 'fonts/[name].[ext]'
					}
				}]
			}
        ]
    },
    plugins: [
		extractCSS
    ]
}
