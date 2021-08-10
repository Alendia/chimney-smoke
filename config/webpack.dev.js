const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
    publicPath: "/",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env", "autoprefixer", "postcss-url"],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "src", to: "dist" }],
    // }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    open: true,
    // compress: true,
    publicPath: "/",
    // contentBase: path.resolve(__dirname, "../dist"),
    hot: true,
    inline: true,
  },
};
