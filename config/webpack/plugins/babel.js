import path from "path";
import os from "os";
import HappyPack from "happypack";

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

export default new HappyPack({
  id: "happybabel",
  loaders: ["babel-loader"],
  threadPool: happyThreadPool,
  verbose: true
});
