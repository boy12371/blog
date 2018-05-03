import path from "path";
import ImgRule from "../webpack/rules/img";
import SassRule from "../webpack/rules/sass";
import UglifyjsPlugin from "../webpack/plugins/uglifyjs";
import SpawnPlugin from "../webpack/plugins/spawn";

process.argv[2] === "--production"
  ? (process.env.NODE_ENV = "production")
  : (process.env.NODE_ENV = "development");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
const isDev = process.env.NODE_ENV === "production" ? false : true;
const ADMIN_DIR = path.resolve(__dirname, "../../admin");
const ADMIN_DIST_DIR = path.resolve(__dirname, "../../../stcpd-dist/admin");

let webpackConfig = {
  context: ADMIN_DIR,
  entry: { admin: "./admin.js" },
  output: {
    filename: "assets/js/[name].bundle.js",
    path: ADMIN_DIST_DIR
  },
  target: "web",
  resolve: { extensions: [".js", ".json", ".yaml", ".scss"] },
  mode: mode,
  module: {
    rules: [ImgRule, SassRule]
  },
  plugins: [SpawnPlugin]
};

if (isDev) {
  webpackConfig.devtool = "eval-source-map";
  webpackConfig.plugins = [SpawnPlugin];
  webpackConfig.watch = true;
  webpackConfig.output.publicPath = "/admin/";
}

export default webpackConfig;
