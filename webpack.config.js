var HtmlWebpackPlugin = require('html-webpack-plugin');
var SvgStore = require('webpack-svgstore-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: "./dist",
        filename: "bundle.js",
        publicPath: "./"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'index.html',
          template: './src/index.html'
        }),

        // create svgStore instance object
        new SvgStore({
            // svgo options
            svgoOptions: {
                plugins: [
                    { removeTitle: true }
                ]
            }
        }),

        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] }
        })
    ]
};