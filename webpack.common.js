require("webpack");
const path = require("path");


module.exports = {
    entry: path.resolve(__dirname + "/CLMS-model/src/search-results-model.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "clms-model.js",
        library: ["clms-model"],
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: "url-loader",
                // options: {
                //     limit: 8192,
                // },
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9000
    }
};
