const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // mode: 'development',
    //Entry  
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    
    output: {
        //__dirname -----> current dir
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'FUI',
        //format
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                // \ 为转义符号
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

}