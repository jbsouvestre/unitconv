/*jshint node: true, strict: false*/
var entry = './src/main.js',
    output = {
        path: __dirname,
        filename: 'main.js'
    };
var autoprefixerOptions = '{browsers: ["last 2 version"]}';
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
        }, {
            test: /\.(s)?css$/,
            loader: 'raw!inline-style!autoprefixer?' + autoprefixerOptions + '!sass'
        }]

    }
};

module.exports = config;