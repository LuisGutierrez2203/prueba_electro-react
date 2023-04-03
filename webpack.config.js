const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtracPlugin = require("mini-css-extract-plugin");

const htmlwebpack = new HtmlWebpackPlugin({
    template: "./react/src/index.html",
    filename: "./index.html",
})

module.exports = {
    mode: 'production',
    entry: {
        index:{
            import: './react/src/index.js',
            dependOn: 'shared',
        },
        
        shared: 'lodash',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './public')
    },

    optimization: {
        runtimeChunk: 'single',
    },

    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },

            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtracPlugin.loader,
                    "css-loader",
                ],

            },
        ]
    },

    plugins: [htmlwebpack, new MiniCssExtracPlugin()]


};