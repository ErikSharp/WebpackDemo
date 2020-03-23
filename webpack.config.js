const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.ts"
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
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            // {
            //     test: /\.css$/,
            //     include: path.resolve(__dirname, "src"), //specifying the include makes it only do the files necessary
            //     use: ["style-loader", "css-loader"]
            // },
            {
                test: /\.s[ac]ss$/,
                include: path.resolve(__dirname, "src"), //specifying the include makes it only do the files necessary
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: path.resolve(__dirname, "src"),
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: path.resolve(__dirname, "src"),
                use: ["file-loader"]
            },
            {
                test: /\.(csv|tsv)$/,
                include: path.resolve(__dirname, "src"),
                loader: "csv-loader",
                options: {
                    dynamicTyping: true,
                    header: true,
                    skipEmptyLines: true
                }
            },
            {
                test: /\.xml$/,
                include: path.resolve(__dirname, "src"),
                use: ["xml-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
