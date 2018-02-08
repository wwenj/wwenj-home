const path = require('path');
const webpack = require('webpack');
const uglify = require('uglifyjs-webpack-plugin'); //压缩
const htmlPlugin = require('html-webpack-plugin'); //html
const extractTextPlugin = require("extract-text-webpack-plugin"); //打包css分离


// const glob = require('glob'); //css去余使用
// const PurifyCSSPlugin = require("purifycss-webpack"); //css去余

var website = {
    // publicPath: "http://localhost:8080/"
    publicPath: "http://www.wwenj.com/"
}

module.exports = {
    // entry: "./src/index.js",
    entry:{
        entry: "./public/js/main.js",
        // jquery:'jquery'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        // publicPath: path.resolve(__dirname, 'dist'),
        publicPath: website.publicPath
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true,
        port: 1717
    },
    module: {
        rules: [{
                test: /\.css$/,
                // loader: ["style-loader", "css-loader"]
                use: extractTextPlugin.extract({ //css打包分离/引用pstcss
                    fallback: "style-loader",
                    use: [{
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                // minimize: true
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8194, //大于8k的图片不用base64
                    outputPath: 'images/' //图片打包后路径ps不转换base64的图片
                }
            },
            {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            }
        ]
    },
    plugins: [
        new uglify(),//压缩
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //       warnings: false
        //     }
        //   }),

        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './public/index.html'
        }),
        // minify：是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
        // hash：为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
        // template：是要打包的html模版路径和文件名称。

        new extractTextPlugin("/css/index.css"), //打包到dist目录的文件夹

        // new PurifyCSSPlugin({
        //     paths: glob.sync(path.join(__dirname, 'src/*.html')), //css去余
        // }),
        

        /*把引入的jq分离出去*/
        //   new webpack.optimize.CommonsChunkPlugin({
        //     //name对应入口文件中的名字，我们起的是jQuery
        //     name:'jquery',
        //     //把文件打包到哪里，是一个路径
        //     filename:"js/jquery.min1.js",
        //     //最小打包的文件模块数，这里直接写2就好
        //     minChunks:2
        // }),
        
    ]

};





/*
css自动加前缀：
    postcss-loader  //loader
    autoprefixer    //插件
css去除无用
    purify-css  //插件    















*/