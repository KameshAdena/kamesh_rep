const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={

    entry: './src/index.js',
    output:{

        path: path.join(__dirname,'/dist'),
        filename:'indexbundle.js'
    },
    module:{
        rules:[{
            use:["babel-loader"],
            test: /\.js$/,
            exclude:/node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
          })
    ]
}