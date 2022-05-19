const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // mode: 'development',
  //输入, 这是入口文件
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  //输出:
  output: {
    //__dirname表示当前目录,dist是我们要去的目录
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'FUI',
    //输出格式
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