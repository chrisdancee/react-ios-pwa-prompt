const webpack = require("webpack");
const pkg = require("./package.json");
const path = require("path");
const libraryName = pkg.name;

module.exports = {
  mode: "production",
  target: "node",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "react-ios-pwa-prompt.js",
    library: libraryName,
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true
  },
  node: {
    net: "empty",
    tls: "empty",
    dns: "empty"
  },
  module: {
    rules: [
      {
        test: /\.*css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[sha1:hash:hex:4]",
                context: path.resolve(__dirname, "src"),
                hashPrefix: "pwa"
              }
            }
          },
          "sass-loader"
        ],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom")
    },
    symlinks: false
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};
