var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackShellPlugin = require('webpack-shell-plugin');

var extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "build.js",
        publicPath: "/dist/",
        library: "fixit",
        libraryTarget: "umd",
    },

    module: {
        rules: [{
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
               test: /\.js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                 loader: 'babel-loader',
                 options: {
                   presets: ['es2015']
                 }
               }
             }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    devtool: "source-map",
    context: __dirname,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: "source-map",
            comments:false,
            sourceMap:true
        }),
		  new WebpackShellPlugin({onBuildStart:['npm run webpack:before'], onBuildEnd:['npm run webpack:after']}),
        extractSass
    ]
}
