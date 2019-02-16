const path = require('path');

module.exports = {

    devtool: "source-map",

    entry: {
        list: './src/list.js',
        list2: './src/list2.js',
        list3: './src/list3.js',
        event: './src/event.js',
        time: './src/time.js',
        customEvent: './src/customEvent.js',
        key: './src/key.js',
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["react", 'env']
                }
            }
        ]
    },

    devServer: {
        contentBase: './dist'
    }
};