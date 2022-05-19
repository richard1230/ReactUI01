const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  
module.exports = {
    mode: 'production',
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
        library: 'react-ui',
        // out format
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                // \ means Escape character
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
            // {
            //     test: /\.svg$/,
            //     loader: 'svg-sprite-loader',
            // },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            // {
            //     test: /\.(png|jpg|jpeg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'RUI',
            template:'index.html'
        })
    ]
  
}