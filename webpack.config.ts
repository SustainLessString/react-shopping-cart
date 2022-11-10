import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: webpack.Configuration = {
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
    },
  },
  mode: process.env.NODE_ENV ? "production" : "development",
  entry: "./src/index.tsx",
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   publicPath: "/public/",
  //   filename: "bundled.js",
  // },
  devServer: { port: 3000 },

  performance: { maxAssetSize: 512000, maxEntrypointSize: 512000 },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },
    ],
  },
  // devtools: prod ? undefined : "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

export default config;
