import path from "path";
import CleanWebpackPlugin from "clean-webpack-plugin";

export default (pathsToClean, rootPath) => {
  return new CleanWebpackPlugin(pathsToClean, {
    root: rootPath,
    exclude: [".git"],
    verbose: true,
    allowExternal: true,
    beforeEmit: true
  });
};
