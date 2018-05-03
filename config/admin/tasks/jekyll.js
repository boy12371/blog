import gulp from "gulp";
import cp from "child_process";
import config from "../config";

let jekyllConfig = config.jekyll.default;

export default done => {
  if (process.argv[2] === "--production") {
    process.env.JEKYLL_ENV = "production";
    jekyllConfig += config.jekyll.production
      ? "," + config.jekyll.production
      : "";
  } else {
    jekyllConfig += config.jekyll.development
      ? "," + config.jekyll.development
      : "";
  }
  return cp
    .spawn("jekyll", ["build", "--config", jekyllConfig], {
      stdio: "inherit",
      env: process.env
    })
    .on("close", done);
};
