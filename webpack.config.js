const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js",
        print: "./src/print.js"
    },
    devtool: "inline-source-map",
    //web server that serves the bundles from memory
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        //this will clear the dist folder before building
        //https://www.npmjs.com/package/clean-webpack-plugin
        new CleanWebpackPlugin(),
        //manages the creation of the index.html file
        //https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            title: "Webpack Demo"
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(csv|tsv)$/,
                loader: "csv-loader",
                options: {
                    dynamicTyping: true,
                    header: true,
                    skipEmptyLines: true
                }
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            }
        ]
    }
};
