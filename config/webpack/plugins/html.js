import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import config from "../../app";

const isDev = process.env.NODE_ENV === "production" ? false : true;

let Html = {};
if (isDev) {
  Html = new HtmlWebpackPlugin({
    title: "HOME",
    chunks: ["client"],
    filename: "index.html",
    template: `${config.client}/ejs/index.ejs`,
    inject: "body",
    hash: true
  });
} else {
  Html = new HtmlWebpackPlugin({
    title: "实体彩票店",
    chunks: ["client"],
    favicon: "./img/favicon.ico",
    filename: "index.html",
    template: `${config.client}/ejs/index.ejs`,
    inject: "body",
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      html5: true,
      minifyCSS: true,
      removeComments: true,
      removeEmptyAttributes: true
    },
    hash: true
  });
}

export default Html;
