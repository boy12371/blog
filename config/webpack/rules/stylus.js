const isDev = process.env.NODE_ENV === "production" ? false : true;

export default {
  exclude: /node_modules/,
  test: /\.styl$/,
  use: [
    {
      loader: "style-loader",
      options: { sourceMap: isDev }
    },
    {
      loader: "css-loader",
      options: { sourceMap: isDev, minimize: !isDev }
    },
    {
      loader: "postcss-loader",
      options: { sourceMap: isDev }
    },
    {
      loader: "stylus-loader",
      options: {
        preferPathResolver: "webpack",
        sourceMap: isDev
      }
    }
  ]
};
