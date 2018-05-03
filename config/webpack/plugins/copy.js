import path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default opts => {
  return new CopyWebpackPlugin(
    [
      {
        from: opts.src,
        to: opts.dest,
        toType: opts.type,
        test: opts.test,
        ignore: opts.ignore,
        context: opts.context,
        force: true,
        cache: false
      }
    ],
    {
      debug: "info",
      copyUnmodified: true,
      ignore: ["node_modules/**/*"]
    }
  );
};
