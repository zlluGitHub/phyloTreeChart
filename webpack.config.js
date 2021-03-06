const path = require('path');
const webpack = require('webpack');   //导入webpack模块
// console.log(__dirname);

module.exports = {
  mode: 'production',
  // entry: path.resolve(__dirname, 'src', 'main.js'),
  // entry: ["./src/main.js","./src/js/own.js"], //入口文件,从项目根目录指定
  entry: {
    phylotree:__dirname + '/src/main.js',
    // main:__dirname + '/src/js/own.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].min.js',
    // filename: './js/phylotree.min.js'
  },
  externals: [
    'd3',
    'underscore',
    'bootstrap',
    'jquery'
  ],
  // devServer: {   //对象中写dev-server的参数
  //   open: true,
  //   port: 8080,
  //   // contentBase: path.resolve(__dirname, './'),
  // },
  plugins: [   //配置插件的节点
    new webpack.HotModuleReplacementPlugin()
    //实例化一个热跟新的对象（启动热跟新需要先导入webpack模块，再实例化一个对象）
  ]
}
