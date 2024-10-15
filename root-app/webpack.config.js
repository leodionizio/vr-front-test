const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");

dotenv.config();

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      contexts: path.resolve(__dirname, "src/contexts"),
      core: path.resolve(__dirname, "src/core"),
      hooks: path.resolve(__dirname, "src/hooks"),
      middlewares: path.resolve(__dirname, "src/middlewares"),
      pages: path.resolve(__dirname, "src/pages"),
      public: path.resolve(__dirname, "public"),
      services: path.resolve(__dirname, "src/services"),
      store: path.resolve(__dirname, "src/store"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "root_app",
      filename: "remoteEntry.js",
      remotes: {
        header: "header@http://localhost:3001/remoteEntry.js",
        footer: "footer@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./store": "./src/store",
        "./interfaces": "./src/interfaces",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-redux": { singleton: true },
        "@reduxjs/toolkit": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
