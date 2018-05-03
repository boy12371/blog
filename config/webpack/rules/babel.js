export default {
  exclude: /node_modules/,
  test: /\.(js|jsx)$/i,
  use: [
    {
      loader: "happypack/loader?id=happybabel"
    }
  ]
};
