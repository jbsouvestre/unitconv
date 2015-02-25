/*jshint node: true, strict: false*/
var entry = './src/main.js',
    output = {
        path: __dirname,
        filename: 'main.js'
    };

var config = {
    debug: false,
    //devtool: 'eval',
    entry: entry,
    output: output,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]

    }
};

module.exports = config;