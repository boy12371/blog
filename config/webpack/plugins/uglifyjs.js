import UglifyJsPlugin from "uglifyjs-webpack-plugin";

export default new UglifyJsPlugin({
  sourceMap: false,
  parallel: 4,
  uglifyOptions: { compress: true }
});
