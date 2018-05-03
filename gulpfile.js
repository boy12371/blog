require("babel-register");
const gulp = require("gulp");
const jekyll = require("./config/admin/tasks").jekyll;
const webpack = require("./config/admin/tasks").webpack;

gulp.task("jekyll", jekyll);
gulp.task("webpack", webpack);

gulp.task("default", ["webpack"], () => {
  console.log("\n---------\nBuild success!\n---------\n");
});
