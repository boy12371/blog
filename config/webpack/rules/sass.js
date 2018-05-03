import ExtractTextPlugin from "extract-text-webpack-plugin";

const isDev = process.env.NODE_ENV === "production" ? false : true;

export default {
  exclude: /node_modules/,
  test: /\.(s[ac]ss)$/,
  use: ExtractTextPlugin.extract({
    fallback: { loader: "style-loader", options: { sourceMap: isDev } },
    use: [
      {
        loader: "css-loader",
        options: { sourceMap: isDev, minimize: !isDev }
      },
      {
        loader: "postcss-loader",
        options: { sourceMap: isDev }
      },
      {
        loader: "sass-loader",
        options: { sourceMap: isDev }
      }
    ]
  })
};
