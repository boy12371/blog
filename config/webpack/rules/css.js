import ExtractTextPlugin from "extract-text-webpack-plugin";

const isDev = process.env.NODE_ENV === "production" ? false : true;

export default {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: { loader: "style-loader", options: { sourceMap: isDev } },
    publicPath: "../../",
    use: [
      {
        loader: "css-loader",
        options: { sourceMap: isDev, minimize: !isDev }
      },
      {
        loader: "postcss-loader",
        options: { sourceMap: isDev }
      }
    ]
  })
};
