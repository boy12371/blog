import ExecaPlugin from "execa-webpack-plugin";
import config from "../../admin/config";

let jekyllConfig = config.jekyll.default;

export default new ExecaPlugin({
  logLevel: "info",
  onCompile: [
    {
      args: ["build", "--config", jekyllConfig],
      cmd: "jekyll",
      options: {
        cwd: process.cwd(),
        env: process.env,
        stdio: "inherit"
      }
    }
  ]
});
