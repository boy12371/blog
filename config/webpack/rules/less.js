const isDev = process.env.NODE_ENV === "production" ? false : true;

export default {
  exclude: /node_modules/,
  test: /\.less$/,
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
      loader: "less-loader",
      options: { sourceMap: isDev }
    }
  ]
};
